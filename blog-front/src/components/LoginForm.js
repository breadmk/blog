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

const LoginForm = () => {
  let history = useHistory();

  const accessToken = sessionStorage.getItem("ACCESS_TOKEN");

  let [userForm, setUserForm] = useState({
    username: "",
    password: "",
  });

  const changeValue = (e) => {
    setUserForm({
      ...userForm,
      [e.target.name]: e.target.value,
    });
    // console.log(userForm);
  };

  const loginSubmit = (e) => {
    e.preventDefault();

    let data = {
      username: userForm.username,
      password: userForm.password,
    };

    fetch("/auth/loginForm", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        // console.log(res, "www");
        // console.log(res.text(), "1www");
        return res.json();
        // if (res.status === 200) {
        // res.json();
        // }
      })
      .then((data) => {
        // console.log(data, "22");
        if (data.token) {
          alert("로그인이 완료되었습니다!");
          sessionStorage.setItem("ACCESS_TOKEN", data.token);
          history.push("/");
        } else {
          alert("로그인에 실패하였습니다!");
        }
      })
      .catch((error) => console.log(error, "dd"));
    // console.log(data);
  };

  return (
    <StyledContainer>
      <Form onSubmit={loginSubmit}>
        <Form.Group className="mb-3" controlId="formBasicUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Username"
            onChange={changeValue}
            name="username"
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
