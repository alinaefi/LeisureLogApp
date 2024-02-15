import React, { useState } from 'react';
import axios from 'axios';
import '../App.css';
import {
  Input,
  Form,
  FormGroup,
  Label,
  Col,
  Button
} from "reactstrap";

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('login/', { username, password }, { withCredentials: true });
      // Handle successful login
      console.log(response.data);
      if (response.status === 200) {
        alert('!LOGGED');
      }
      // Handle login error
    } catch (error) {
      console.error(error);
    }
  };

  return (
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
  );
};

export default LoginForm;