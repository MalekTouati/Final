import React , {Component} from 'react';

class Item extends Component{
    constructor(props){
        super(props)
        this.state = {
            mode : "clicked",
            mode1 : "normal" 
        }
    }
    render(){
        if (this.props.item.backdrop_path != null){
            return(
                <div>
                <div className="movie" onClick = {() => {
                            if (this.state.mode === "clicked"){
                                this.setState({mode : "text" , mode1 : "long"})
                            }
                            else{
                                this.setState({mode : "clicked" , mode1 : "normal"})
                            }
                            }}
                            >
                    { this.state.mode === "clicked" ? <img className= "Image" src={`https://image.tmdb.org/t/p/w300${this.props.item.poster_path}`}   alt=""/> :  
                        <div className="info">
                            <br/>
                            <img src={`https://image.tmdb.org/t/p/w200${this.props.item.poster_path}`}/><br/><br/>
                            <p className = "title1" style ={{fontFamily: 'Oswald, sans-serif;' , width : 'max-content'}}>{this.props.item.original_title}</p> <br/>  
                            <span style ={{fontFamily: 'Tajawal, sans-serif' , width : 'max-content' , fontSize : '35px' , color : '#B4B0BE'}}>Original language:</span>  <span className = "language" style = {{fontSize : '23px' , fontFamily : 'PT Sans, sans-serif'}}>{this.props.item.original_language}</span> <br/>
                            <span style ={{fontFamily: 'Tajawal, sans-serif' , width : 'max-content' , fontSize : '35px' , color : 'yellow'}}>Score:</span> <span style = {{fontSize : '23px' , fontFamily : 'PT Sans, sans-serif'}}>{this.props.item.vote_average}</span> <br/>
                            <span style ={{fontFamily: 'Tajawal, sans-serif' , width : 'max-content' , fontSize : '35px' , color : 'red'}}>Popularity:</span> <span style = {{fontSize : '23px' , fontFamily : 'PT Sans, sans-serif'}}>{this.props.item.popularity}</span> <br/>
                            <span style ={{fontFamily: 'Tajawal, sans-serif' , width : 'max-content' , fontSize : '35px' , color : '#64C8BD'}}>Release date:</span> <span style = {{fontSize : '23px' , fontFamily : 'PT Sans, sans-serif'}}>{this.props.item.release_date}</span> <br/>
                            <span style ={{fontFamily: 'Tajawal, sans-serif' , width : 'max-content' , fontSize : '35px' , color : 'yellowgreen'}}>Summary:</span> <br/> <span style = {{fontSize : '23px' , fontFamily : 'PT Sans, sans-serif'}}>{this.props.item.overview}</span>
                            <br/><br/>
                        </div>
                    }
                    
                    {this.state.mode1 === "long" ? <div className = "movieTitle" style = {{width : '95%'}}><div className = "movieTitleText" >{this.props.item.title}</div></div> : <div className = "movieTitle"  ><div className = "movieTitleText" >{this.props.item.title}</div></div> }
                    
                </div>
            </div>
            )
        }
        else{
            return <div>none</div>
        }
    }
}

export default Item;