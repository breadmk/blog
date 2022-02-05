import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const StyledContainer = styled.div`
  margin: auto;
  width: 50%;
  max-width: 1920px;
  text-align: left;
  margin-top: 30px;
`;

const JoinForm = () => {
  const history = useHistory();

  let [userForm, setUserForm] = useState({
    username: "",
    password: "",
    email: "",
  });

  const changeValue = (e) => {
    setUserForm({
      ...userForm,
      [e.target.name]: e.target.value,
    });
    // console.log(userForm);
  };

  const joinSubmit = (e) => {
    e.preventDefault();
    let data = {
      username: userForm.username,
      password: userForm.password,
      email: userForm.email,
    };
    fetch("http://localhost:8080/auth/joinProc", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        }
      })
      .then((data) => {
        // console.log(data);
        if (data.status === 201) {
          alert("축하합니다! 회원가입이 완료되었습니다!");
          history.push("/");
        } else {
          alert("회원가입에 실패하였습니다!");
        }
      })
      .catch((error) => console.log(error));
    // console.log(data);
  };

  return (
    <StyledContainer>
      <Form onSubmit={joinSubmit}>
        <Form.Group className="mb-3" controlId="formBasicUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Username"
            onChange={changeValue}
            name="username"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter Email"
            onChange={changeValue}
            name="email"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter Password"
            onChange={changeValue}
            name="password"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          회원가입
        </Button>
      </Form>
    </StyledContainer>
  );
};

export default JoinForm;
