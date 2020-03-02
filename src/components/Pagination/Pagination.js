import React from 'react'
import ReactPaginate from 'react-paginate'
import './styles.css'

export const Pagination = ({pageCount, onPageChange, currentPage}) => (
  <div className="paginationContainer">
    <ReactPaginate
      previousLabel="<"
      nextLabel=">"
      breakLabel="..."
      breakClassName="page-item"
      breakLinkClassName="page-link"
      pageCount={pageCount}
      marginPagesDisplayed={2}
      pageRangeDisplayed={5}
      onPageChange={onPageChange}
      containerClassName="pagination"
      activeClassName="active"
      pageClassName="page-item"
      pageLinkClassName="page-link"
      previousClassName="page-item"
      nextClassName="page-item"
      previousLinkClassName="page-link"
      nextLinkClassName="page-link"
      forcePage={currentPage}
    />
  </div>
)
