import React, { useEffect, useState } from "react";
import axios from 'axios';
import './ImageSlider.css';
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { BiSolidSquareRounded } from "react-icons/bi";

export const ImageSlider = () => {

    const [imageData, setImageData] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [loading, setLoading] = useState(true);
    const [errMsg, setErrMsg] = useState(null);

    const nextImage = () => {
        setCurrentIndex((currentIndex + 1) % imageData.length);
    }

    const prevImage = () => {
        setCurrentIndex((currentIndex - 1 + imageData.length) % imageData.length);
    }

    useEffect(() => {
        const fetchImages = async () => {
            try {
                setLoading(true);
                const response = await axios.get('https://picsum.photos/v2/list?page=1&limit=10');
                setImageData(response.data);
            } catch (error) {
                setErrMsg(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchImages();
    }, []);

    if (loading) return (
        <div className="d-flex justify-content-center align-items-center" style={{ height: '500px' }}>
            <span className="text-center text-primary fs-3">Loading...</span>
            <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    );

    if (errMsg) return <div className="text-danger text-center">Unexpected error occurred! {errMsg}</div>;

    return (
        <section id="imageSlider" className="section-padding">
            <div className="container">
                <h1 className="display-4 text-center fw-bold">Image Slider</h1>
                <div className="row">
                    <div className="col-lg-12" id="imageWrapper">
                        <div className="position-relative mt-3" style={{ maxWidth: "1152px", height: "500px", margin: "0 auto" }}>
                            {imageData.map((image, index) => (
                                <img
                                    key={index}
                                    src={image.download_url}
                                    alt={image.author}
                                    className={`rounded position-absolute top-0 start-0 w-100 h-100 ${currentIndex === index ? 'd-block' : 'd-none'}`}
                                    style={{ objectFit: 'cover' }}
                                />
                            ))}
    
                            <SlArrowLeft
                                className="arrow position-absolute top-50 start-0 translate-middle-y bg-light rounded-circle fs-2 cursor-pointer"
                                onClick={prevImage}
                                style={{ zIndex: 10 }}
                            />
                            <SlArrowRight
                                className="arrow position-absolute top-50 end-0 translate-middle-y bg-light rounded-circle fs-2 cursor-pointer"
                                onClick={nextImage}
                                style={{ zIndex: 10 }}
                            />
    
                            <div className="squareContainer mb-3 position-absolute bottom-0 start-50 translate-middle-x d-flex gap-2 p-2 bg-light rounded-pill" style={{ zIndex: 10 }}>
                                {imageData.map((_, index) => (
                                    <BiSolidSquareRounded
                                        key={index}
                                        className={`fs-4 cursor-pointer ${currentIndex === index ? 'text-primary' : 'text-muted'}`}
                                        onClick={() => setCurrentIndex(index)}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
    
};