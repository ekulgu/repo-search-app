import axios from 'axios';
import {  useEffect, useReducer } from 'react'
import { isEmptyObject } from './../Util/commonFunc'
import { ACTIONS } from './../Util/constant'
import { SEARCH_REPO } from './../Util/urls'

/**
 * SearchRepositories calls the api and return to state with the result
 * @param repoName
 * @param repoLanguage
 * @param page
 * @param reducer
 * @param initialState
 * @returns {*}
 * @constructor
 */
export default function SearchRepositories(repoName, repoLanguage, page, reducer, initialState) {
    const [state, dispatch] = useReducer(reducer, initialState);

    // Check to see if the vaibale is not an object
    // Then builds the query
    const name = !isEmptyObject(repoName) ? `${repoName}` : '';
    const language = !isEmptyObject(repoLanguage) ? `language:${repoLanguage}` : ''
    const query = name+language

    useEffect(() => {
        if(query) {

            // Prevents having a lot of request being in process
            // Whenever type a new character in the search field
            // clears out the old request
            const cancelToken = axios.CancelToken.source()

            // Call reducer to set up the state
            dispatch({type: ACTIONS.MAKE_REQUEST})
            axios.get(SEARCH_REPO, {
                cancelToken: cancelToken.token,
                params: {
                    q: query, sort: 'stars', order: 'desc', page: page,
                }
            }).then((response) => {
                dispatch({type: ACTIONS.GET_DATA, payload: {repositories: response.data}})
            }).catch((err) => {
                if (axios.isCancel(err))
                 return dispatch({type: ACTIONS.ERROR, payload: {error: err}})
            })

            return () => {
                // Clears out the axios request
                cancelToken.cancel()
            }
        } else {

        }

    }, [query, page])
    return state

}

