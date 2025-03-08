import React, { useState } from 'react';
import './Accordion.css';
import data from './data.js'

//Single selection
//Multiple selection

export const Accordion = () => {

    const [selectMultiple,setSelectMultiple] = useState(false);
    const [selectedAccordionArray, setSelectedAccordionArray] = useState([]);
    const [selectedAccordionID, setSelectedAccordionID] = useState(null);

    const handleAccordionID = (id) => {
        setSelectedAccordionID(prevAccID => prevAccID === id ? null : id);
    };

    const handleAccordionArray = (id) => {
        setSelectedAccordionArray(prevAccArray =>
            prevAccArray.includes(id)
                ? prevAccArray.filter(accId => accId !== id)
                : [...prevAccArray, id] 
        );
    };

    const attachFunction = (id) => {
       return selectMultiple ? handleAccordionArray(id) : handleAccordionID(id);
    }

    const renderAnswer = (id) => {
        return selectMultiple ? selectedAccordionArray.includes(id) : selectedAccordionID === id
    }


    return (
        <>
            <section id="accordion" className="section-padding mh-100 m-auto d-flex align-items-center  bg-secondry vh-100">
                <div className="container">
                    <h1 className='display-3 text-center fw-bold'>FAQs</h1>
                    <div className="d-flex flex-column justify-content-center align-items-center">
                        <p className='text-center text-light bg-info rounded-3 p-3'>Select Muliple Items : {selectMultiple ? "True" : "False"}</p>
                        <button className='btn border bg-info fw-bold' onClick={()=>setSelectMultiple(prevState=>!prevState)}>Change</button>
                    </div>
                    <div className="accordionWrapper">
                        {data && data.length > 0 ? (
                            data.map((item) => (
                                <div
                                    className="accordionItem my-3 p-3 bg-dark"
                                    key={item.id}
                                    onClick={() => attachFunction(item.id)}
                                >
                                    <div className="accordionQuestion d-flex justify-content-between align-items-center p-2 text-light fs-5">
                                        {item.question}
                                        <span className='fs-5 text-info'>+</span>
                                    </div>
                                    {renderAnswer(item.id) &&
                                        <div className="accordionAnswer border-top border-lg p-2 text-info">
                                            {item.answer}
                                        </div>}
                                </div>
                            ))
                        ) : (
                            <p>No data available.</p>
                        )}

                    </div>
                </div>
            </section>
        </>
    )
}
