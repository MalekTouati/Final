import React , {Component} from "react";

class All extends Component{
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
        for(let i = 1 ; i < 80 ; i++ ){
            pages.push(i)
        }
        pages.map(pages => {
            fetch(`https://api.themoviedb.org/3/discover/movie?api_key=8bff9b8deb854ccc0b32f30a367a9aa5&certification_country=US&certification.lte=G&sort_by=popularity.desc&page=${pages}&adult=false`)
            .then(res => res.json())
            .then(result=>{
                this.props.addMovie(result.results)
            }) 
        })
    }
}

export default All;