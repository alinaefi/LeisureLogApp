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

const RegistrationForm = () => {
  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const handleRegistration = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('register/', { first_name, last_name, username, password });
      // Handle successful registration
      console.log(response.data);
    } catch (error) {
      // Handle registration error
      console.error(error);
    }
  };

  return (
    <div>
      <Container>
        <Row>
          <Col md={{ offset: 3, size: 6 }} sm="12">
            <Form onSubmit={handleRegistration}>
              <h1 className='my-sub-heading'> Sign Up </h1>
              <FormGroup row>
                <Label for="First Name" sm={3}> First Name: </Label>
                <Col sm={9}>
                  <Input
                    id="FirstName"
                    name="fname"
                    placeholder="First name"
                    type="text"
                    value={first_name}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="Last Name" sm={3}> Last Name:</Label>
                <Col sm={9}>
                  <Input
                    id="LastName"
                    name="lname"
                    placeholder="Last name"
                    type="text"
                    value={last_name}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="Email" sm={3}> Email: </Label>
                <Col sm={9}>
                  <Input
                    id="Email"
                    name="email"
                    placeholder="Email"
                    type="email"
                    value={username}
                    onChange={(e) => setUserName(e.target.value)}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="Password" sm={3}> Password: </Label>
                <Col sm={9}>
                  <Input
                    id="Password"
                    name="password"
                    placeholder="Password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Col>
              </FormGroup>
              <Button color="info" type="submit"> Sign Up </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default RegistrationForm;