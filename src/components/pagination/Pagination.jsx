import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { PaginationContainer } from "./Style";

export default function Pagination({ count, globaLimit, pageIndex, goTo }) {
  const navigate = useNavigate();

  const [currentPage, setCurrentPage] = useState(pageIndex);
  useEffect(() => {
    setCurrentPage(pageIndex);
  }, [pageIndex]);

  const onPageChange = (selectedPage) => {
    goTo(navigate, selectedPage.selected);
  };

  return (
    <PaginationContainer
      currentPage={currentPage}
      previousLabel={"Previous"}
      nextLabel={"Next"}
      breakLabel={"..."}
      pageCount={Math.trunc(count / globaLimit) + 1}
      onPageChange={onPageChange}
      activeClassName={"item active"}
      breakClassName={"item break-me"}
      containerClassName={"pagination"}
      disabledClassName={"disabled-page"}
      marginPagesDisplayed={2}
      nextClassName={"item next"}
      pageClassName={"item pagination-page"}
      pageRangeDisplayed={2}
      previousClassName={"item previous"}
    />
  );
}
