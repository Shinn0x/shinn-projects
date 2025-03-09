import React, { useState } from 'react'
import QRCode from "react-qr-code";

export const QrCodeGenerator = () => {

    const [qrInput, setQrInput] = useState("");
    const [qrCode, setQrCode] = useState("");

    const handleQrCodeInput = () => {
        setQrCode(qrInput);
        setQrInput('');
    }

  return (
    <>
        <section id="qrCode" className="section-padding">
            <div className="container">
                <div className="row">
                    <h1 className='text-center display-3 fw-bold'>QR Code Generator</h1>
                    <div className="col-lg-12 d-flex justify-content-center my-2">
                        <label htmlFor='qrInput' className='me-2'>QR Input: </label>
                        <input 
                            className='px-3 py-1'
                            type='text' name="qrInput" value={qrInput} 
                            onChange={(e)=>setQrInput(e.target.value)}
                            placeholder='Enter your QR input...'
                            required
                        />
                        <button 
                            className='ms-2 btn bg-primary text-light'
                            disabled={!qrInput || qrInput.trim() === ""}
                            onClick={()=>handleQrCodeInput()}
                        >Generate</button>
                    </div>
                    <div className='col-lg-12 d-flex justify-content-center my-2'>
                        <QRCode id="qrCodeValue"  className='bg-dark' value={qrCode} size={400}/>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
