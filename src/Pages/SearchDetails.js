import React, { useContext } from 'react'
import {ListGroup, Card} from 'react-bootstrap'
import { A } from "hookrouter";
import { RepositoryContext } from './../index'


/**
 * Shows repository details in bootstrap card
 * Action to owner repository and home page
 * @returns {XML}
 * @constructor
 */
const SearchDetails = () => {
    const { result } = useContext(RepositoryContext);

    return (

        result && result.owner ?
        <Card style={{ width: '25rem' }} className="mx-auto mt-5">
            <Card.Img variant="top" src={result.owner.avatar_url} />
            <Card.Body>
                <Card.Title>{result.name}</Card.Title>
                <Card.Text>{result.description}</Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroup.Item>Stars: {result.stargazers_count}</ListGroup.Item>
                <ListGroup.Item>Language: {result.language}</ListGroup.Item>
                <ListGroup.Item>Owner: {result.owner.login}</ListGroup.Item>
            </ListGroup>
            <Card.Body>
                <A href="/">Back to Search</A>
                <Card.Link style={{float: "right"}} href={result.html_url} target="_blank">Go to Repo</Card.Link>
            </Card.Body>
        </Card>
            :
            <Card border="danger text-secondary" style={{width: '18rem'}} className="mx-auto mt-5">
                <Card.Header>uh-oh!!</Card.Header>
                <Card.Body>
                    <Card.Text>
                        Something went wrong. <br />
                        Please, go back to <A href="/">Search page</A>
                    </Card.Text>
                </Card.Body>
            </Card>



    )
}

export default SearchDetails;