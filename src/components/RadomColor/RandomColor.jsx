import React, { useEffect, useState } from 'react'
import './Random.css'

export const RandomColor = () => {

    const [colorValue, setColorValue] = useState("#FF9D34");
    const colorType = ["HEX", "RGB"];
    const [activeId, setActiveId] = useState(0);
    const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "A", "B", "C", "D", "E", "F"];
    const generateRandomColor = () => {
        switch (colorType[activeId]) {
            case "HEX":
                // setColorValue(prevColor => prevColor = "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0"));
                setColorValue(prevColor => prevColor = generateRandomHEX());
                break;
            case "RGB":
                setColorValue(prevColor => prevColor = `rgb(
                            ${Math.floor(Math.random() * 256)}, 
                            ${Math.floor(Math.random() * 256)}, 
                            ${Math.floor(Math.random() * 256)}
                            )`
                );
                break;
            default:
                return;
        }
    }

    const generateRandomHEX = () => {
        let colorHex = "";
        for (let i = 0; colorHex.length < 6; i++) {
            let randomInt = Math.floor(Math.random() * hex.length);
            colorHex += hex[randomInt];
        }
        return "#" + colorHex;
    }

    const changeColorType = (e) => {
        setActiveId(prevId => prevId = parseInt(e.target.value));
    }

    useEffect(() => {
        generateRandomColor();
    
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [activeId]);
    

    return (
        <>
            <section id="randomColor" className="section-padding" style={{ background: colorValue }}>
                <div className="container d-flex flex-column align-items-center  vh-100 justify-content-center gap-5">
                    <div id="btnContainer">
                        <select onChange={(e) => changeColorType(e)} className='p-2 me-3'>
                            <option value={colorType[activeId]} disabled></option>
                            {colorType.map((color, index) => (
                                <option key={index} value={index}>{color}</option>
                            ))}
                        </select>

                        <div className="btn border bg-info fw-bold" onClick={() => generateRandomColor()}>Generate</div>
                    </div>
                    <div className="">
                        <h1 className='text-uppercase display-3 text-center'>{colorType[activeId]} color</h1>
                        <p className='display-5 text-center text-uppercase'>{colorValue}</p>
                    </div>
                </div>
            </section>
        </>
    )
}
