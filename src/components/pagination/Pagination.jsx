import classNames from "classnames";
import { PaginationContainer } from "./Style";
const range = (start, end) => {
  return [...Array(end - start).keys()].map((el) => el + start);
};

const getPagesCut = ({ pagesCount, pagesCutCount, currentPage }) => {
  const ceiling = Math.ceil(pagesCutCount / 2);
  const floor = Math.floor(pagesCutCount / 2);

  if (Number(pagesCount) < Number(pagesCutCount)) {
    return { start: 1, end: Number(pagesCount) + 1 };
  } else if (Number(currentPage) >= 1 && Number(currentPage) <= ceiling) {
    return { start: 1, end: Number(pagesCutCount) + 1 };
  } else if (Number(currentPage) + floor >= Number(pagesCount)) {
    return {
      start: Number(pagesCount) - Number(pagesCutCount) + 1,
      end: Number(pagesCount) + 1,
    };
  } else {
    return {
      start: Number(currentPage) - ceiling + 1,
      end: Number(currentPage) + floor + 2,
    };
  }
};

const PaginationItem = ({ page, currentPage, onPageChange, isDisabled }) => {
  const liClasses = classNames({
    "page-item": true,
    active: Number(page) === Number(currentPage),
    disabled: isDisabled,
  });

  return (
    <li className={liClasses} onClick={() => onPageChange(page)}>
      <span className="page-link">{page}</span>
    </li>
  );
};

const Pagination = ({ currentPage, total, limit, onPageChange }) => {
  const pagesCount = Math.ceil(total / limit);

  console.log(pagesCount, 5, currentPage);

  const pagesCut = getPagesCut({ pagesCount, pagesCutCount: 5, currentPage });

  const pages = range(pagesCut.start, pagesCut.end);
  const isFirstPage = Number(currentPage) === 1;
  const isLastPage = Number(currentPage) === Number(pagesCount);
  return (
    <PaginationContainer>
      <PaginationItem
        page="First"
        currentPage={Number(currentPage)}
        onPageChange={() => onPageChange(1)}
        isDisabled={isFirstPage}
      />
      <PaginationItem
        page="Prev"
        currentPage={Number(currentPage)}
        onPageChange={() => onPageChange(Number(currentPage) - 1)}
        isDisabled={isFirstPage}
      />
      {pages.map((page) => (
        <PaginationItem
          page={page}
          key={page}
          currentPage={Number(currentPage)}
          onPageChange={onPageChange}
        />
      ))}
      <PaginationItem
        page="Next"
        currentPage={Number(currentPage)}
        onPageChange={() => onPageChange(Number(currentPage) + 1)}
        isDisabled={isLastPage}
      />
      <PaginationItem
        page="Last"
        currentPage={Number(currentPage)}
        onPageChange={() => onPageChange(pagesCount)}
        isDisabled={isLastPage}
      />
    </PaginationContainer>
  );
};
export default Pagination;
