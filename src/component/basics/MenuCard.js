import React, { useState, useEffect } from 'react';

function MenuCard({ menuData }) {
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(3);
    const [selectedItem, setSelectedItem] = useState(null);
    const [totalPrice, setTotalPrice] = useState(0);
    const [modalOpen, setModalOpen] = useState(false);
    const [quantity, setQuantity] = useState(1); // State to keep track of quantity

    const imgStyle = {
        height: '50vh',
        objectFit: 'cover'
    };

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = menuData.slice(indexOfFirstItem, indexOfLastItem);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    useEffect(() => {
        // Update total price when quantity changes
        if (selectedItem) {
            const price = parseFloat(selectedItem.price.replace('$', ''));
            setTotalPrice(price * quantity);
        }
    }, [quantity, selectedItem]);

    const handleOrderClick = (item) => {
        setSelectedItem(item);
        setModalOpen(true);
        setQuantity(1); // Set quantity to 1 when modal is opened
        // Calculate total price based on selected item and quantity
        const price = parseFloat(item.price.replace('$', ''));
        setTotalPrice(price);
    };

    const handleDecreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1); // Decrease quantity if greater than 1
        }
    };

    const handleCancelClick = () => {
        setSelectedItem(null);
        setTotalPrice(0);
        setModalOpen(false);
    };

    const handlePlaceOrder = () => {
        setModalOpen(false);
    };

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
                                            <button onClick={() => handleOrderClick(ele)} className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">Order Now<span className="ml-1 font-weight-bold">{price}</span></button>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
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
            {selectedItem && (
                <div className={`modal fade ${modalOpen ? 'show' : ''}`} id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden={!modalOpen}>
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">{selectedItem.name}</h5>
                                <button type="button" className="close" onClick={handleCancelClick} aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <p>{selectedItem.description}</p>
                                <p>Price: {selectedItem.price}</p>
                                <div className="d-flex justify-content-between align-items-center mb-3">
                                    <span>Quantity:</span>
                                    <div>
                                        <button className="btn btn-sm btn-secondary" onClick={handleDecreaseQuantity}>-</button>
                                        <span className="mx-2">{quantity}</span>
                                        <button className="btn btn-sm btn-primary" onClick={() => setQuantity(quantity + 1)}>+</button>
                                    </div>
                                </div>
                                <p>Total Price: {totalPrice.toFixed(2)}₹</p>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" onClick={handleCancelClick}>Cancel</button>
                                <button type="button" className="btn btn-success" onClick={handlePlaceOrder}>Place Order</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default MenuCard;
