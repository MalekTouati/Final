import React , {Component} from 'react';
import Popular from "./Popular";
import Display from "./Displaying";

class Container1 extends Component{
    constructor(props){
        super(props)
        this.state = {
          movies : []
        }
        this.addMovie = this.addMovie.bind(this)
    }
    render(){
        return(
            <div>  
                <center><h1 style = {{marginBottom : '70px'}}>Popular movies</h1></center>
                <Display displayedStuff = {this.state.movies}></Display>
                <Popular addMovie = {this.addMovie}></Popular>
            </div>
        )
    }
    addMovie(newItem){
        let goodMovies = []
        newItem.map((element)=>{
            if (element.backdrop_path !== null){
                goodMovies.push(element)
            }
        })
        let oldMovies = this.state.movies
        oldMovies = [...oldMovies , ...goodMovies]
        this.setState({movies : oldMovies});
    }
}

export default Container1;