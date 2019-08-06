import React , {Component} from 'react';
import All from "./All";
import Display from "./Displaying";

class Container3 extends Component{
    constructor(props){
        super(props)
        this.state = {
          movies : [],
        }
        this.addMovie = this.addMovie.bind(this)
    }
    render(){
        return(
            <div>
                <center><h1 style = {{marginBottom : '70px'}}>All movies</h1></center>
                <Display displayedStuff = {this.state.movies}></Display>
                <All addMovie = {this.addMovie}></All>
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

export default Container3;