import React from "react";
import { Button, Form } from "react-bootstrap";
import styled from "styled-components";

const StyledContainer = styled.div`
  margin: auto;
  width: 50%;
  max-width: 1920px;
  text-align: left;
  margin-top: 30px;
`;

const LoginForm = () => {
  return (
    <StyledContainer>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" placeholder="Enter Username" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Enter Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Remember me" />
        </Form.Group>
        <Button variant="primary" type="submit">
          로그인
        </Button>
      </Form>
    </StyledContainer>
  );
};

export default LoginForm;
