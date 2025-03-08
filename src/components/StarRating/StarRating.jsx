import React, { useState } from "react";
import { GiRoundStar } from "react-icons/gi";

export const StarRating = ({ totalStars = 10 }) => {
    const [rating, setRating] = useState(7);
    const [hover, setHover] = useState(null);

    const updateRating = (value) => {
        setRating(prev => (prev === value ? null : value)); 
        setHover(null); 
    };

    const updateHover = (value) => setHover(value);

    const addStyleToStar = (value) => value <= (hover || rating);

    return (
        <>
            <section id="starRating" className="section-padding user-select-none">
                <div className="container  bg-dark text-center">
                    <div className="row p-5">
                        <div className="col-lg-12">
                            <h2 className="text-warning display-4 fw-bold">
                                Rating {hover || rating || " "}
                            </h2>

                            {[...Array(totalStars)].map((_, index) => {
                                const value = index + 1;
                                return (
                                    <GiRoundStar
                                        key={value}
                                        className={`fs-1 pe-auto ${addStyleToStar(value) ? "text-warning" : "text-light"}`}
                                        onClick={() => updateRating(value)}
                                        onMouseEnter={() => updateHover(value)}
                                        onMouseLeave={() => setHover(null)}
                                        style={{ cursor: "pointer" }}
                                    />
                                );
                            })}
                            {rating !== null && (
                                <div
                                    className="text-danger text-decoration-underline my-3"
                                    style={{ cursor: "pointer" }}
                                    onClick={() => setRating(null)}
                                >
                                   Double Click The Star OR Click Here To Reset Rating!
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
