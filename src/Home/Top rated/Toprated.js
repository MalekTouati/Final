import React , {Component} from "react";

class Toprated extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            null
        )
    }
    componentWillMount(){
        let pages = [1 , 2 , 3];
        for(let i = 1 ; i < 6 ; i++ ){
            pages.push(i)
        }
        pages.map(pages => {
            fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=8bff9b8deb854ccc0b32f30a367a9aa5&language=en-US&page=${pages}&adult=false`)
            .then(res => res.json())
            .then(result=>{
                this.props.addMovie(result.results)
            }) 
        })
    }
}

export default Toprated;