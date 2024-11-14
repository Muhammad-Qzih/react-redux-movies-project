import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import { getPage } from "../redux/actions/moviesActions";

const UsePagenation = () => {
  const [pagesCount, setPagesCount] = useState(0);
  const dispatch = useDispatch();
  const pages = useSelector((state) => state.pageCount);

  useEffect(() => {
    setPagesCount(pages);
  }, [pages]);

  const handlePageClick = (data) => {
    dispatch(getPage(data.selected + 1));
  };

  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel="Next"
      onPageChange={handlePageClick}
      marginPagesDisplayed={2}
      pageRangeDisplayed={2}
      pageCount={pagesCount}
      previousLabel="previous"
      containerClassName="pagination justify-content-center p-3"
      pageClassName="page-item"
      pageLinkClassName="page-link"
      previousClassName="page-item mx-5"
      nextClassName="page-item me-5"
      previousLinkClassName="page-link"
      nextLinkClassName="page-link"
      breakClassName="page-item"
      breakLinkClassName="page-link"
      activeClassName="active"
    />
  );
};

export default UsePagenation;
