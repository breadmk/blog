// eslint-disable-next-line no-unreachable
import React from "react";
import { Button, Card } from "react-bootstrap";

const CardBar = () => {
  return (
    <div className="container">
      <Card style={{ margin: "10px", textAlign: "left" }}>
        <Card.Body>
          <Card.Title>제목 적는 부분</Card.Title>
          <Button variant="primary">상세보기</Button>
        </Card.Body>
      </Card>
      <Card style={{ margin: "10px", textAlign: "left" }}>
        <Card.Body style={{ width: "auto" }}>
          <Card.Title>제목 적는 부분</Card.Title>
          <Button variant="primary">상세보기</Button>
        </Card.Body>
      </Card>
      <Card style={{ margin: "10px", textAlign: "left" }}>
        <Card.Body style={{ width: "auto" }}>
          <Card.Title>제목 적는 부분</Card.Title>
          <Button variant="primary">상세보기</Button>
        </Card.Body>
      </Card>
    </div>
  );
};
export default CardBar;
