import React, { useState } from 'react';
import axios from 'axios';
import '../App.css';
import {
    Input,
    Form,
    FormGroup,
    Label,
    Col,
    Button,
    Container,
    Row
} from "reactstrap";
import { useNavigate } from 'react-router-dom';
import { getCookie } from './cookieUtils';

const NewPostForm = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [url, setUrl] = useState('');
    const [type, setType] = useState('');
    const [comments, setComments] = useState('');
    const [rating, setRating] = useState('');

    const navigate = useNavigate();

    const handleFormSubmittion = async (e) => {
        e.preventDefault();
        try {
            const result = await axios.post('http://127.0.0.1:8000/posts/', 
            {
                title,
                description,
                url,
                type,
                comments,
                rating,
            },
            {
                headers: {'X-CSRFToken': getCookie('csrftoken')},
                withCredentials: true 
            }
            );
            console.log(result);

            navigate('/posts');
        } catch (error) {
            // Handle errors
            console.error(error);
        }
    };

    return (
        <div>
            <Container>
                <Row>
                    <Col md={{ offset: 3, size: 6 }} sm="12">
                        <Form onSubmit={handleFormSubmittion}>
                            <h1 className='my-sub-heading'>
                                New Post
                            </h1>
                            <FormGroup row>
                                <Label for="Title" sm={2}> Title: </Label>
                                <Col sm={10}>
                                    <Input
                                        id="Title"
                                        name="title"
                                        placeholder="E.g. Lion King"
                                        type="text"
                                        value={title}
                                        onChange={(e) => setTitle(e.target.value)}
                                    />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="Description" sm={2}> Description: </Label>
                                <Col sm={10}>
                                    <Input
                                        id="Description"
                                        name="description"
                                        placeholder="E.g. Stage Musical performed in London"
                                        type="textarea"
                                        value={description}
                                        onChange={(e) => setDescription(e.target.value)}
                                    />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="Url" sm={2}> Url: </Label>
                                <Col sm={10}>
                                    <Input
                                        id="Url"
                                        name="url"
                                        placeholder="E.g. url for trailer video onYoutube"
                                        type="url"
                                        value={url}
                                        onChange={(e) => setUrl(e.target.value)}
                                    />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="Type" sm={2}> Type: </Label>
                                <Col sm={10}>
                                    <Input
                                        id="Type"
                                        name="type"
                                        type="select"
                                        value={type}
                                        onChange={(e) => setType(e.target.value)}
                                    >
                                        <option value='mv'>movie</option>
                                        <option value='msc'>music</option>
                                        <option value='act'>activity</option>
                                        <option value='vgm'>videogame</option>
                                        <option value='bgm'>boardgame</option>
                                        <option value='loc'>location</option>
                                        <option value='o'>other</option>
                                    </Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="Comments" sm={2}> Comments: </Label>
                                <Col sm={10}>
                                    <Input
                                        id="Comments"
                                        name="comments"
                                        placeholder="E.g. It was FANTASTIC!!"
                                        type="textarea"
                                        value={comments}
                                        onChange={(e) => setComments(e.target.value)}
                                    />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="Rating" sm={2}> Rating: </Label>
                                <Col sm={10}>
                                    <Input
                                        id="Rating"
                                        name="rating"
                                        type="select"
                                        value={rating}
                                        onChange={(e) => setRating(e.target.value)}
                                    >
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Input>
                                </Col>
                            </FormGroup>
                            <Button color="info" type="submit"> Create </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default NewPostForm;