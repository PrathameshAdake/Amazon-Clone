import React, { useState } from 'react';
import './Login.css';
import { Link, useHistory } from 'react-router-dom';
import { auth } from './firebase';

function Login() {

    const[email,setEmail] = useState('');
    const[password,setPassword] = useState('');
    const history = useHistory();

    const signIn = e => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(email,password)
            .then((auth)=>{
                history.push("/");
            })
            .catch(error=>alert(error.message));
    }

    const register = e => {
        e.preventDefault();

        auth.createUserWithEmailAndPassword(email,password)
            .then((auth)=>{
                //successfully created an user
                console.log(auth)
                if(auth){
                    history.push("/")
                }
            })
            .catch(error=>alert(error.message))
    }

    return (
        <div className="login">
            <Link to="/">
                <img 
                    className="login__logo"
                    src="//upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/175px-Amazon_logo.svg.png"
                    alt=""
                />
            </Link>
            <div className="login__container">
                <h1>Sign-in</h1>

                <form>
                    <h5>E-mail</h5>
                    <input
                        type="text" 
                        value={email}
                        onChange={e=>setEmail(e.target.value)}
                        />

                    <h5>Password</h5>
                    <input 
                        type="password" 
                        value={password}
                        onChange={e=>setPassword(e.target.value)}    
                    />

                    <button onClick={signIn} className="login__signInButton">Sign In</button>
                </form>

                <p>Don't you dare press that login button or else all of Your passwords will be mine muahhahahahaha!</p>
                
                <button onClick={register} className="login__registerButton">Create Your Amazon Account</button>
            </div>
        </div>
    )
}

export default Login
