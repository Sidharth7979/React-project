import React, { useState } from 'react';

function MenuCard({ menuData }) {
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(3); // Change this value according to your preference

    const imgStyle = {
        height: '50vh',
        objectFit: 'cover'
    };

    // Logic to calculate the indexes of items to be displayed on the current page
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = menuData.slice(indexOfFirstItem, indexOfLastItem);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <>
            <section className="my-5">
                <div className="container">
                    <div className="row gy-4">
                        {currentItems.map((ele) => {
                            const { id, name, image, price, description } = ele;
                            return (
                                <div key={id} className="col-4">
                                    <div className="p-0 card">
                                        <img src={image} style={imgStyle} className="card-img-top" alt="card" />
                                        <div className="card-body">
                                            <h5 className="text-capitalize font-weight-bold card-title">{name}</h5>
                                            <p className="card-text">{description}</p>
                                            <a href="#order" className="btn btn-primary">Order Now<span className="ml-3 font-weight-bold">{price}</span></a>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    {/* Pagination */}
                    <ul className="pagination justify-content-center">
                        {menuData.length > itemsPerPage &&
                            Array(Math.ceil(menuData.length / itemsPerPage)).fill().map((_, index) => (
                                <li key={index} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
                                    <button onClick={() => paginate(index + 1)} className="page-link">
                                        {index + 1}
                                    </button>
                                </li>
                            ))}
                    </ul>
                </div>
            </section>
        </>
    );
}

export default MenuCard;
