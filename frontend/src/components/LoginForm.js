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
import { useAuth } from './AuthProvider';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const result = await login({ username: username, password: password });

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
          <Form onSubmit={handleLogin}>
            <h1 className='my-sub-heading'>
              Log In
            </h1>
            <FormGroup row>
              <Label for="Email" sm={2}> Email: </Label>
              <Col sm={10}>
                <Input
                  id="Email"
                  name="email"
                  placeholder="Email"
                  type="email"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="Password" sm={2}> Password: </Label>
              <Col sm={10}>
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
            <Button color="info" type="submit"> Login </Button>
          </Form>
        </Col>
      </Row>
    </Container>
    </div>
  );
};

export default LoginForm;