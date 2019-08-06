import React , {Component} from 'react';
import './style.css'

const style1 = {
    textDecoration : "none"  
}

const style2 = {
    textDecoration : "line-through"
} 

class Item extends Component {
    constructor(props){
        super(props)
        this.state = {
            style : 1
        }
    }

    render(){
        return(
            <div>
                <div  onClick = {() => {
                    let style = (this.state.style === 1 ? 2 : 1)
                    this.setState({style : style})
                    }} className = "list-element" style = {this.state.style === 1 ? style1 : style2}>
                    {this.props.item}
                </div>
            </div>
        )
    }
}

export default Item;