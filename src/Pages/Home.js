import '../App.css';
import React, { useState, useContext } from 'react'
import SearchRepositories from '../Actions/SearchRepositories'
import { Container, Spinner, Card }  from 'react-bootstrap'
import Lists from './../Components/Lists'
import Search from './../Components/Search'
import { RepositoryContext } from './../index'

const Home = () => {
    const [repoName, setRepoName] = useState({})
    const [repoLanguage, setRepoLanguage] = useState({})

    const page = 1

    const {reducer, initialState} = useContext(RepositoryContext);

    // Calls api and return repos and repo details
    const {repositories, error, loading} = SearchRepositories(
        repoName,
        repoLanguage,
        page,
        reducer,
        initialState);

    const { items } = repositories;

    // Set state with repo name value
    const handleNameChange = (event) => {
        const value = event.target.value;
        setRepoName(value)
    }

    // Set state with repo language value
    const handleLanguageChange = (event) => {
        const value = event.target.value;
        setRepoLanguage(value)
    }


    return (
        <Container>
            <h1>Repository Search</h1>
            <Search
                repoName={repoName}
                repoLanguage={repoLanguage}
                handleNameChange={handleNameChange}
                handleLanguageChange={handleLanguageChange}/>

            {
                loading &&
                <Spinner animation="border" variant="secondary" role="status" style={{display: 'block'}} className="mx-auto mt-5">
                    <span className="sr-only">Loading...</span>
                </Spinner>
            }

            <Lists items={items} />
            {
                error &&
                <Card border="danger text-secondary" style={{width: '18rem'}} className="mx-auto mt-5">
                    <Card.Header>uh-oh!!</Card.Header>
                    <Card.Body>
                        <Card.Text>
                            Something went wrong. <br />
                            Please, reload your the page again.
                        </Card.Text>
                    </Card.Body>
                </Card>
            }
        </Container>

    )
}

export default Home;
