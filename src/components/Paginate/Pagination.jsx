import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { DB } from "../../temporaryBackendDB";
import Infocard from "../InfoCard/InfoCard";
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";
import "./Pagination.scss";
const items = DB;
function Items({ currentItems }) {
  return (
    <>
      {currentItems &&
        currentItems.map((item, i) => <Infocard item={item} key={i} />)}
    </>
  );
}

function PaginatedItems({ itemsPerPage }) {
  //numberCount
  const [counting, setCounting] = useState(1);
  // We start with an empty list of items.
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentItems(items.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(items.length / itemsPerPage));
  }, [itemOffset, itemsPerPage]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };
  const handleForwardClick = () => {
    if (counting < DB.length - itemsPerPage) {
      setCounting(counting + itemsPerPage);
    } else {
      setCounting(DB.length - itemsPerPage);
    }
  };
  const handleBackClick = () => {
    if (counting > itemsPerPage) {
      setCounting(counting - itemsPerPage);
    } else {
      setCounting(1);
    }
  };
  return (
    <>
      <Items currentItems={currentItems} />
      <ReactPaginate
        breakLabel="..."
        nextLabel={
          <ArrowForwardIos
            className="paginationControlArrow"
            onClick={handleForwardClick}
          />
        }
        onPageChange={handlePageClick}
        pageRangeDisplayed={4}
        marginPagesDisplayed={1}
        pageCount={pageCount}
        previousLabel={
          <ArrowBackIos
            onClick={handleBackClick}
            className="paginationControlArrow"
          />
        }
        renderOnZeroPageCount={null}
        className="paginationControlBar"
        pageClassName="paginationControlBar-page"
      />
      <p className="paginationControlNote">
        {counting} -{" "}
        {counting < DB.length - itemsPerPage
          ? counting + itemsPerPage - 1
          : DB.length}{" "}
        of {DB.length} places to stay
      </p>
    </>
  );
}
export default PaginatedItems;
