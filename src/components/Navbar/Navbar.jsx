import React from 'react'
import { FaSlidersH,FaScroll, FaPalette, FaStar, FaImages, FaDatabase, FaSitemap, FaQrcode } from 'react-icons/fa';

export const Navbar = () => {
    return (
        <>
            <nav className='navbar navbar-expand-lg navbar-light bg-light shadow-lg position-fixed top-0 start-0 w-100' style={{ zIndex: 9999 }}>
                <div className='container'>
                    <p className="navbar-brand p-0 m-0">
                        <img src="/assets/images/logo.svg" style={{ width: "150px", height: "auto" }} alt="Shinn Logo" />
                    </p>

                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item dropdown">
                            <a
                                className="nav-link dropdown-toggle fs-5 fw-bold"
                                href="#"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Components
                            </a>

                            <ul className="dropdown-menu">
                                <li>
                                    <a className="dropdown-item" href="#accordion">
                                        <FaSlidersH className="me-2" /> Accordion
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#randomColor">
                                        <FaPalette className="me-2" /> Random Color Generator
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#starRating">
                                        <FaStar className="me-2" /> Star Rating
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#imageSlider">
                                        <FaImages className="me-2" /> Image Slider
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#loadMoreData">
                                        <FaDatabase className="me-2" /> Load More Data
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#treeView">
                                        <FaSitemap className="me-2" /> Tree View Navigation
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#qrCode">
                                        <FaQrcode className="me-2" /> QR Code Generator
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item position-relative" href="#scrollIndicator">
                                        <FaScroll className="me-2" /> Scroll Indicator
                                    </a>
                                </li>
                            </ul>

                        </li>
                    </ul>
                </div>
            </nav>

            {/* Spacer for fixed navbar height */}
            <div style={{ height: '70px' }}></div>
        </>
    )
}
