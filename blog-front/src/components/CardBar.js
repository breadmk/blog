// eslint-disable-next-line no-unreachable
import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Pagination from "../paging/Pagination";
import Post from "../paging/Post";

const CardBar = () => {
  // 페이징 처리를 위한 부분
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1); //현재 페이지
  const [postPerPage] = useState(3); //페이지당 포스트 개수
  //----------------------------------

  const [boardList, setBoardList] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    const test = () => {
      fetch("http://localhost:8080/board/list?sort=id,desc", { method: "GET" })
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          return setPosts(data);
        })
        .catch((error) => console.log(error));
    };
    test();
  }, []);
  // 페이징을 위한 변수 설정
  const indexOfLastPost = currentPage * postPerPage; //1*10 = 10번 포스트
  const indexOfFirstPost = indexOfLastPost - postPerPage; //10-10 = 0번 포스트
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost); //0~10번까지 포스트

  const paginate = (pageNum) => setCurrentPage(pageNum);

  return (
    <div className="container">
      <Post posts={currentPosts} />
      <Pagination
        postPerPage={postPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      />
    </div>
  );
};
export default CardBar;
