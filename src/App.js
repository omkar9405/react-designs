import React from 'react';
import './App.css';
import "./components/DesignOne.css";
import { Designone } from "./components/Designone";
import "./components/Designtwo.css";
import { Designtwo } from './components/Designtwo';
import "./components/Designthree.css";
import { Designthree } from './components/Designthree';

class App extends React.Component {
  constructor(props)
  {
    super(props);
  }
  render(){
  return  <div className="App">
            <div className="row">
              <div className="col-lg-3">
              <Designone />
              <labe>Design One</labe>
              </div>
              <div className="col-lg-3">
              <Designtwo />
              <labe>Design Two</labe>
              </div>
              <div className="col-lg-6">
              <Designthree />
              <labe>Design Three</labe>
              </div>
            </div>
            
          </div>
    
}
}

export default App;
