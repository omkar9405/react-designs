import React from 'react'
import loginImg from '../login.svg';
import './Designtwo.css';
 export class Designtwo extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
    return (
            <div className="container-main2">
                <div className="header">
                    Register
                </div>
                <div className="image1">
                    <img src={loginImg} alt="login image"/>
                </div>
                <div className="content">
                    <div className="form">
                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <input type="text" placeholder="Enter Username"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" placeholder="Enter Email"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" placeholder="Enter Password"/>
                        </div>
                    </div>
                    <div className="footer">
                        <button className="btn">
                                    Register
                        </button>
                    </div>
                    
                </div>
            </div>
      
    )
}
}


