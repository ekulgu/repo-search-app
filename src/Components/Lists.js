import React, { useContext } from 'react'
import {ListGroup} from 'react-bootstrap'
import { A } from "hookrouter";
import { RepositoryContext } from './../index'

/**
 * Show result from api in the bootstrap list item
 * Every row action to detailed result
 * @param items
 * @returns {XML}
 * @constructor
 */
const Lists = ({
    items
}) => {
    const { setResult } = useContext(RepositoryContext);

    /**
     * This function set detail list based on the row clicked.
     * @param list
     */
    const handleClickRow = (list) => {
        setResult(list)
    }

    return (
        <ListGroup>
            {items && items.map((list) => {
                return (
                    <A href="/search-details" key={list.id}>
                        <ListGroup.Item action onClick={() => handleClickRow(list)}>
                            {list.name} - <span className="text-muted font-weight-light">{list.owner.login}</span> <br />
                            <label className="text-muted font-weight-light">{new Date(list.created_at).toLocaleDateString()}</label>
                        </ListGroup.Item>
                    </A>
                )
            })}
        </ListGroup>
    )
}

export default Lists;