import React, { useState } from 'react'
import FormSignUp from './FormSignUp'
import FormSuccess from './FormSuccess'
import './Form.css'

function Form() {
    const [isSubmited, setIsSubmited] = useState(false);

    function submitForm() {
        setIsSubmited(true)
    }
    return (
        <>
            <div className="form-container">
                <span className="close-btn">X</span>
                <div className="form-content-left">
                    <img src="img/img2.png" alt="" className="form-img" />
                </div>
                {!isSubmited ? (<FormSignUp submitForm={submitForm} />) : (<FormSuccess />)}
            </div>
        </>
    )
}

export default Form
