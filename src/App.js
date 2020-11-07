import logo from './logo.svg';
import './App.css';
import React from "react";
import Profile from "./Component/Profile/Profile"
import FullName from  "./Component/Profile/FullName"
import Adress from  "./Component/Profile/Adress";


const App = () => (
  <div className='container'>
    <Profile />
    <FullName/>
    <Adress/>
  </div>
 
);
 export default App;
 




