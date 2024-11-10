import React from 'react';
import { NavLink } from 'react-router-dom';
import './formLogin.css' 

const FormLogin = () => {
    return (
        <div className='formLogin'>
            <h2>Create an account</h2>
            <h5>
                Already have an account ? 
                <NavLink>Log in</NavLink>    
            </h5>

            <form action="">
                <input type="text" className='firstName' id='firstName' placeholder='First name'/>
                <input type="text" className='lastName' id='lastName' placeholder='Last name'/>
                <input type="email" className='email' id='email' placeholder='email'/>
                <input type="password" className='password' id='password' placeholder='Enter your password'/>
                <input type="submit" placeholder='Create Account'/>
            </form>
            <span>or <NavLink>sign up</NavLink> with</span>
            <div className="options">
                <button>
                    
                </button>
                <button></button>
            </div>

        </div>
    );
};

export default FormLogin;