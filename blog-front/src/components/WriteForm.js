import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import styled from "styled-components";

const StyledContainer = styled.div`
  margin: auto;
  width: 50%;
  max-width: 1920px;
  text-align: left;
  margin-top: 30px;
`;

const WriteForm = () => {
  let [userForm, setUserForm] = useState({
    title: "",
    content: "",
  });

  const changeValue = (e) => {
    setUserForm({
      ...userForm,
      [e.target.name]: e.target.value,
    });
    console.log(userForm);
  };

  return (
    <div className="container">
      <StyledContainer>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicUsername">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter title"
              onChange={changeValue}
              name="title"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>content</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="content"
              onChange={changeValue}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            글쓰기완료
          </Button>
        </Form>
      </StyledContainer>
    </div>
  );
};

export default WriteForm;
