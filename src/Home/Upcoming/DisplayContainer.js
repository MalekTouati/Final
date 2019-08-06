import React , {Component} from 'react';
import Upcoming from "./Upcoming";
import Display from "./Displaying";

class Container2 extends Component{
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
                <center><h1 style = {{marginBottom : '70px'}}>Upcoming movies</h1></center>
                <Display displayedStuff = {this.state.movies}></Display>
                <Upcoming addMovie = {this.addMovie}></Upcoming>
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

export default Container2;