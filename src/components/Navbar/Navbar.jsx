import React from 'react'

export const Navbar = () => {
    return (
        <>
            <nav className='navbar navbar-expand-lg navbar-light bg-light shadow-lg position-fixed top-0 start-0 w-100' style={{ zIndex: 9999 }}>
                <div className='container'>
                    <p className="navbar-brand active fs-3 fw-bold">ShinnTheByte</p>
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
                                <li><a className="dropdown-item" href="#accordion">Accordion</a></li>
                                <li><a className="dropdown-item" href="#randomColor">Random Color</a></li>
                                <li><a className="dropdown-item" href="#starRating">Rating</a></li>
                                <li><a className="dropdown-item" href="#imageSlider">Image Slider</a></li>
                                <li><a className="dropdown-item" href="#loadMoreData">Load More Data</a></li>
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
