import React from "react";
import { Button, Card } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const Post = ({ posts, loading }) => {
  const history = useHistory();

  return (
    <div>
      {posts.map((n, index) => {
        return (
          <Card style={{ margin: "10px", textAlign: "left" }} key={n.id}>
            <Card.Body>
              <Card.Title>{n.title}</Card.Title>
              <Button
                variant="primary"
                onClick={() => {
                  history.push("/board/detail/" + n.id);
                }}
              >
                상세보기
              </Button>
            </Card.Body>
          </Card>
        );
      })}
    </div>
    // <ul>
    //   {posts.map((post) => (
    //     <li key={post.id}>{post.title}</li>
    //   ))}
    // </ul>
  );
};

export default Post;
