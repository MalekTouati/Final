import React , {Component} from 'react';
import Item from './List item/List item'

class List extends Component {
    render(){
        return(
            <div>
                {this.props.todo.map(item => {
                    return(
                        <Item item = {item}/>
                    )
                })}
            </div>
        )
    }
    
}

export default List;