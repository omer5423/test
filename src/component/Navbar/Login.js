import React, { useState } from 'react';
import axios from 'axios'
import './login.css'

const Login = () => {
    const [email , setEmail] = useState('')
    const [password , setPassword] = useState('')
    const [added , setAdded] = useState(false)
    const [success , setSuccess] = useState('')

    const login = async(e) => {
        e.preventDefault()
        const data = {email, password}
        const res = await axios.post('http://localhost:5000/api/v1/login' , data )
        setSuccess(res.data.message)
        console.log(res.data.message)
        setAdded(true)
    }
    setTimeout(() => {
        if(added){
            setAdded(false)
        }
    }, 3000)


    return (
        <div className='login mt-5 mb-5'>
            <div className="container">
                <div className="close-login">
                    <li className="fa fa-times"></li>
                </div>
                <div className="alert-login">
                <div className='head-login'>
                    <h2>Login</h2>
                </div>
                
                { added ? <div className='alert alert-success'>{success} </div> : ''}
                
                <form className='mt-5' onSubmit={login} >
                    <input
                        type="email" 
                        required
                        className='input-login'
                        name='email'
                        placeholder='email...'
                        value={email}
                        onChange={ (e) => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        required 
                        className='input-login mt-5'
                        name='password'
                        placeholder='Password...'
                        value={password}
                        onChange={ (e) => setPassword(e.target.value)} />
                        <br 
                    />
                    <input
                         type="submit"
                         className='btn1 btn-slide-left'
                         value="Add"
                    />
                    <br />
                    
                </form>
            </div>
            </div>
            
            
        </div>
    );

    
}

export default Login;
