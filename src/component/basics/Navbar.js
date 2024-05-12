
import React, { useState } from "react";
import Search from "./Search";

function Navbar({ filterItem, menuList }) {
  const [searchQuery, setSearchQuery] = useState(""); // State to store the search query

  // Function to handle search query change
  const handleSearchChange = (query) => {
    setSearchQuery(query);
    filterItem("All", query); // Pass both category 'All' and search query to the filterItem function
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand font-weight-bold" style={{ color: "red" }} href="#">
            Swiggy
          </a>
{/* Render the Search component with onSearchChange prop */}
<Search onSearchChange={handleSearchChange} />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="mx-auto navbar-nav">
              {menuList.map((currEle) => (
                <li className="nav-item" key={currEle}>
                  <a
                    className="nav-link text-capitalize text-white p-3 active"
                    aria-current="page"
                    href="#"
                    onClick={() => filterItem(currEle, "")}
                  >
                    {currEle}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      
    </>
  );
}

export default Navbar;
