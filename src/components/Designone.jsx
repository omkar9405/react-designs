import React,{useState, useEffect}from 'react'
import loginImg from '../login.svg';
import './DesignOne.css';
 export class Designone extends React.Component {
    constructor(props){
        super(props);
    }
    
    render(){
    return (
            <div className="container-main">
                <div className="header">
                    Login
                </div>
                <div className="image">
                    <img src={loginImg} alt="login image"/>
                </div>
                <div className="content">
                    <div className="form">
                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <input type="text" placeholder="Enter Username"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" placeholder="Enter Password"/>
                        </div>
                    </div>
                    <div className="footer">
                        <button className="btn" >
                           Login
                        </button>
                    </div>
                    
                </div>
            </div>
      
    )
}
}


