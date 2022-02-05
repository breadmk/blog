import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  margin: auto;
`;

const Pagination = ({ postPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination" style={{ justifyContent: "center" }}>
        {pageNumbers.map((num) => (
          <li
            key={num}
            style={{
              width: "30px",
              background: "#eeeee",
              height: "30px",
              cursor: "pointer",
            }}
          >
            <StyledDiv onClick={() => paginate(num)}>{num}</StyledDiv>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
