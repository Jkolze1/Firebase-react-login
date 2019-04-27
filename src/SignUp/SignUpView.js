import React from "react";
import {Container, Col, Form,FormGroup, Label, Input,Button,} from 'reactstrap';
import './SignUpView.css';

const SignUpView = ({ onSubmit }) => {
    return (
      <Container className="App">
        <h2>Sign In</h2>
        <form onSubmit={onSubmit}>
          <Col>
            <FormGroup>
              <Label>Email</Label>
              <Input
                type="email"
                name="email"
                id="exampleEmail"
                placeholder="myemail@email.com"
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input
                type="password"
                name="password"
                id="examplePassword"
                placeholder="********"
              />
            </FormGroup>
          </Col>
          <button type="submit">Sign Up</button>
          </form>
      </Container>
    );
  }



export default SignUpView;
