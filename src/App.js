import React, { Component } from 'react';
import ReactDOM from "react-dom";
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Main from './Main';
import PatientDoc from './PatientDoc'  
import Office from './Office' 
import Brands from './Brands' 
import Plateform from './Plateform';
import Footer from './Footer';
  class App extends Component {

    
  render() {
    return (

      <div className="App">
        <div className="header">
         <Header/>
         </div>
         <div className="main">
         <Main/>
       
         </div>
         <div><PatientDoc/></div>
           <div><Brands/></div>
           <div><Plateform/></div>
         <div><Office/> </div>
         <div><Footer/></div>
       
  </div>
      
    );
  }
}

export default App;


const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
