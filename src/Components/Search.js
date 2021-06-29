import React from 'react'
import { Form, Col } from 'react-bootstrap'

/**
 * This helps you to type in repository name and language
 * @param repoName
 * @param repoLanguage
 * @param handleNameChange
 * @param handleLanguageChange
 * @returns {XML}
 * @constructor
 */
const Search = ({
    repoName,
    repoLanguage,
    handleNameChange,
    handleLanguageChange
}) => {

    return (
        <Form className="mb-4">
            <Form.Row>
                <Col xs={12} sm={6}>
                    <Form.Group>
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" name="name" value={repoName.name} onChange={handleNameChange} />
                    </Form.Group>
                </Col>
                <Col xs={12} sm={6}>
                    <Form.Group>
                        <Form.Label>Language</Form.Label>
                        <Form.Control type="text" name="language" value={repoLanguage.language} onChange={handleLanguageChange} />
                    </Form.Group>
                </Col>
            </Form.Row>
        </Form>
    )
}

export default Search;