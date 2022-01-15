import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import styled from "styled-components";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { useHistory } from "react-router-dom";

const StyledContainer = styled.div`
  margin: auto;
  width: 50%;
  max-width: 1920px;
  text-align: left;
  margin-top: 30px;
`;

const WriteForm = () => {
  let history = useHistory();

  let [boardForm, setBoardForm] = useState({
    title: "",
    content: "",
    user: "",
  });

  const changeValue = (e) => {
    setBoardForm({
      ...boardForm,
      [e.target.name]: e.target.value,
    });
    console.log(boardForm);
  };

  const boardSave = (e) => {
    const userNumber = sessionStorage.getItem("USERNUMBER");
    e.preventDefault();
    let boardData = {
      title: boardForm.title,
      content: boardForm.content,
      id: userNumber,
      // user: usernick,
    };
    // const apiToken = sessionStorage.getItem("ACCESS_TOKEN");
    fetch("/api/write", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        // Authorization: "Bearer " + apiToken,
      },
      body: JSON.stringify(boardData, "dd"),
    })
      .then((res) => {
        return res.json();
        // console.log(res);
      })
      .then((data) => {
        console.log(data);
        if (data.status === 200) {
          alert("글쓰기가 완료되었습니다");
          history.push("/");
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="container">
      <StyledContainer>
        <Form onSubmit={boardSave}>
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
            <CKEditor
              editor={ClassicEditor}
              data=""
              name="content"
              onReady={(editor) => {
                // You can store the "editor" and use when it is needed.
                // console.log("Editor is ready to use!", editor);
              }}
              // config={{
              //   plugins: [Base64UploadAdapter],
              // }}
              onChange={(event, editor) => {
                const data = editor.getData();
                // console.log({ event, editor, data });
                setBoardForm({
                  ...boardForm,
                  content: data,
                });
              }}
              // onBlur={(event, editor) => {
              //   console.log("Blur.", editor);
              // }}
              // onFocus={(event, editor) => {
              //   console.log("Focus.", editor);
              // }}
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
