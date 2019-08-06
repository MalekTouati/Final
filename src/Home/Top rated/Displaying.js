import React , {Component} from 'react';
import Item from './DisplayedItem'

class Display extends Component{
    render(){
        if (this.props.displayedStuff.length !== 0){
            return(
                <div className = "Allmovies">
                    {this.props.displayedStuff.map(element => {
                        return <Item 
                        item = {element} 
                    />
                    })}
                </div>
            )
        }
        else{
            return(
                <center>
                    <h1>
                        Fetching  data from API
                    </h1>
                </center>
            ) 
            
        }
    }
    componentShouldUpdate(){
        return true
    }
}

export default Display;