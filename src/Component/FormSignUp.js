import React from 'react'
import useForm from './useForm'

function FormSignUp() {

    const{handleChange,handleSubmit,values} = useForm()

    return (
        <div className="form-content-right">
            <form className="form" onSubmit={handleSubmit}>
                <h1>get started with us today! create your account by filling out the information below</h1>
                <div className="form-inputs">
                    <label htmlFor="username" className="form-label">
                        UserName
                    </label>
                    <input 
                        id="username"
                        type="text" 
                        name="username" 
                        className="form-input" 
                        placeholder="enter your username"
                        value={values.username}
                        onChange={handleChange}/>
                     
                </div>

                <div className="form-inputs">
                    <label htmlFor="email" className="form-label">
                       Email
                    </label>
                    <input 
                        id="email"
                        type="email" 
                        name="email" 
                        className="form-input" 
                        placeholder="enter your email"
                        value={values.email}
                        onChange={handleChange}/>
                </div>

                <div className="form-inputs">
                    <label htmlFor="password" className="form-label">
                    Password
                    </label>
                    <input 
                        id="password"
                        type="password" 
                        name="password" 
                        className="form-input" 
                        placeholder="enter your password"
                        value={values.password}
                        onChange={handleChange}/>
                </div>

                <div className="form-inputs">
                    <label htmlFor="password2" className="form-label">
                    Confirm password
                    </label>
                    <input 
                        id="password2"
                        type="password" 
                        name="password2" 
                        className="form-input" 
                        placeholder="enter confirm password"
                        value={values.password2}
                        onChange={handleChange}/>
                </div>
                <button className="form-input-btn" type="submit" >Sign Up</button>
                <span className="form-input-login">
                    Already have an account? Login <a href='#'>here</a>
                </span>
            </form>
        </div>
    )
}

export default FormSignUp
