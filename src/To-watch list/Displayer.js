import React , {Component} from 'react';
//import './App2.css';
import Title from './Title/Title';
import Field from './Text field/Field';
import Objectives from './Objectives/Objectives';
import List from './List';

class Displayer extends Component {
  constructor(props){
    super(props);
    this.state = {
      todo : []
    }
    this.addObjective=this.addObjective.bind(this)
  }
  render(){
    return (
      <div>
        <Title></Title>
        <Field addObjective = {this.addObjective}></Field>
        <Objectives></Objectives>
        <List todo = {this.state.todo}/>
      </div>
    );
  }
  addObjective(newItem){
    let newArray = this.state.todo;
    newArray.push(newItem);
    this.setState({todo : newArray});
  }
}


export default Displayer;
