// Reducer to help to manage state
import { ACTIONS } from '../Util/constant'

export default function reducer(state, action) {
    switch (action.type) {
        case ACTIONS.MAKE_REQUEST: {
            return {
                loading: true,
                repositories: []
            }
        }

        case ACTIONS.GET_DATA: {
            return {
                ...state,
                loading: false,
                repositories: action.payload.repositories
            }
        }

        case ACTIONS.ERROR: {
            return {
                ...state,
                loading: false,
                error: action.payload.error,
                repositories: []
            }
        }

        default: {
            return state
        }
    }
}