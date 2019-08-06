import React , {Component} from 'react';
import {BrowserRouter , Link , Route} from "react-router-dom";
import Container2 from "./Upcoming/DisplayContainer";
import Container from "./Top rated/DisplayContainer";
import Container1 from "./Popular/DisplayContainer";
import Container3 from "./All/DisplayContainer";

class Home extends Component{
  render(){
    return (
      <BrowserRouter>
        <p className = "title">Simply Movies.</p>
        <p className = "subtitle">Search any movie, anywhere, anytime</p>
        <center>
          <button className="genreButton"><Link className="genreText" to = "/all" >All</Link></button>
          <button className="genreButton"><Link className="genreText" to = "/toprated" >Top rated</Link></button>
          <button className="genreButton"><Link className="genreText" to = "/popular" >Popular</Link></button>
          <button className="genreButton"><Link className="genreText" to = "/upcoming" >Upcoming</Link></button>
        </center>
        <Route path = "/popular" component = {Container1}></Route>
        <Route path = "/toprated" component = {Container}></Route>
        <Route path = "/upcoming" component = {Container2}></Route>
        <Route path = "/all" component = {Container3}></Route>
      </BrowserRouter>
    );
  }
}

export default Home;