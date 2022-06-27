import Map from "../../components/Map/Map";
import React from "react";
import PaginatedItems from "../../components/Paginate/Pagination";
import "./Search.scss";

const Search = () => {
  return (
    <div className="search">
      <div className="searchResults">
        <PaginatedItems itemsPerPage={10} />
        <p className="searchResultsNote">
          Additional fees apply. Taxes may be added.
        </p>
      </div>
      <div className="searchMap">
        <Map />
      </div>
    </div>
  );
};

export default Search;
