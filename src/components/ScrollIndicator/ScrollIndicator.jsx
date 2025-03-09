import React, { useEffect, useState, useRef } from 'react';
import './ScrollIndicator.css';
import { useFetch } from '../../customHooks/useFetch';

export const ScrollIndicator = () => {
    const url = "https://dummyjson.com/products?limit=100";
    const { loading, error, fetchData } = useFetch();
    const [data, setData] = useState([]);
    const [scrollProgress, setScrollProgress] = useState(0);

    const loadData = async () => {
        const result = await fetchData(url);
        if (result && result.products) {
            setData(result.products);
        }
    };

    useEffect(() => {
        loadData();
    }, [url]);
    const updateScrollProgress = () => {
    const container = document.getElementsByClassName('itemsContainer')[0];
    if (!container) return;

    const scrollTop = container.scrollTop;
    const scrollHeight = container.scrollHeight;
    const clientHeight = container.clientHeight;
    const totalScrollable = scrollHeight - clientHeight;

    if (totalScrollable > 0) {
        let progress = (scrollTop / totalScrollable) * 100;
        progress = Math.round(progress * 100) / 100;

        setScrollProgress(progress); 
    }
};

    

    useEffect(() => {
        setTimeout(() => {
            const container = document.getElementsByClassName('itemsContainer')[0];
    
            if (container) {
                container.addEventListener('scroll', updateScrollProgress);
            }
    
            return () => {
                if (container) {
                    container.removeEventListener('scroll', updateScrollProgress);
                }
            };
        }, 1000); 
    }, []);
    

    if (loading) return <div className='text-primary text-center'>Loading...</div>;

    if (error) return <div className='text-danger text-center'>Error: {error}</div>;

    return (
        <>
            <section id="scrollIndicator" className="section-padding">
                <div className="container">
                    <div className="row position-relative">
                        <h1 className='text-center display-3 fw-bold'>Scroll Indicator</h1>
                        <span className='text-info text-decoration-underline text-center'>This is scrollable!</span>

                        {/* Scroll Progress Bar */}
                        <div className='scrollbarContainer'>
                            <div className="scroll-progress-bar bg-success" style={{ width: `${scrollProgress}%` }}></div>
                        </div>

                        {/* Scrollable Container */}
                        <div className='itemsContainer bg-dark text-white p-3 rounded-bottom'>
                            {data.map(item => (
                                <p className='text-center my-3 p-1' key={item.id}>{item.title}</p>
                            ))}

                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
