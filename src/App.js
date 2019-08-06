import React , {Component} from 'react';
import {BrowserRouter , Link , Route} from "react-router-dom";
import Home from "./Home/Home";
import AboutUs from "./AboutUs/AboutUs";
import Towatchlist from "./To-watch list/towatchlist";
import './App.css';

class App extends Component{
  render(){
    return (
      <BrowserRouter>
        <img className="image" src="/ticket.png" alt="ticket pic"/>
        <button className="navElements btnsPusher"><Link className="btnText" to = "/home">Home</Link></button>
        <button className="navElements btns"><Link className="btnText" to = "/aboutus" >About Us</Link></button>
        <button className="navElements btns"><Link className="btnText" to = "/towatchlist" >To-watch list</Link></button>
        {/*<input className="navElements" type="button" value = "search"/>*/}
        <Route path = "/home" component = {Home}></Route>
        <Route path = "/aboutus" component = {AboutUs}></Route>
        <Route path = "/towatchlist" component = {Towatchlist}></Route>
      </BrowserRouter>
    );
  }
}

export default App;
