import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Detail = (props) => {
  const history = useHistory();
  const id = props.match.params.id;

  let [boardData, setBoardData] = useState({});

  const detail = async () => {
    await fetch("http://localhost:8080/board/detail/" + id, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => setBoardData(data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    detail();
  }, []);

  return (
    <div className="container">
      <div>
        <Form.Group className="mb-3" controlId="formBasicUsername">
          <Form.Label>제목</Form.Label>
          <Form.Control
            type="text"
            readOnly="true"
            name="title"
            value={boardData.title}
            style={{ width: "50%", margin: "auto" }}
          />
        </Form.Group>
        <div style={{ width: "50%", margin: "auto" }}>
          <CKEditor
            editor={ClassicEditor}
            data={boardData.content}
            name="content"
            onReady={(editor) => {
              editor.isReadOnly = true;
            }}
          />
          <br></br>
          <Button
            variant="secondary"
            type="submit"
            onClick={() => {
              history.goBack();
            }}
          >
            목록
          </Button>{" "}
          <Button variant="warning" type="submit">
            수정
          </Button>{" "}
          <Button variant="danger" type="submit">
            삭제
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Detail;
