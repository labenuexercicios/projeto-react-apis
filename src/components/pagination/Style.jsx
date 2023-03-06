import styled from "styled-components";
import Pagination from "react-paginate";

export const PaginationContainer = styled(Pagination)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  height: fit-content;
  border: 1px solid black;
  color: black;

  .item {
    align-items: center;
    cursor: pointer;
    display: flex;
    font-size: 20px;
    height: 30px;
    justify-content: center;
    width: 40px;
  }

  .disabled-page {
    color: #808e9b;
  }

  .active {
    border: solid 1px #808e9b;
    color: #808e9b;
  }

  .next {
    font-size: 20px;
    height: 30px;
    width: 100px;
    border-left: 1px solid black;
  }

  .pagination {
    background-color: #0fbcf9;
    display: flex;
  }

  .previous {
    font-size: 20px;
    height: 30px;
    width: 100px;
    border-right: 1px solid black;
  }
`;
