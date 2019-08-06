import React , {Component} from 'react';
import './style.css'

class Field extends Component {
  constructor(props){
    super(props);
    this.state = {
      newItem : ""
    }
  }
  render(){
    return (
      <div>
          <center>
            <textarea 
              className="textField"
              onChange = {e => {
                this.setState({newItem : e.target.value})
              }}
              value = {this.state.newItem}
            ></textarea><br/>
            <button onClick = {() => {this.props.addObjective(this.state.newItem)}} className='button goalButton'>Add Goal</button>
          </center>
      </div>
    );
  }
}

export default Field;