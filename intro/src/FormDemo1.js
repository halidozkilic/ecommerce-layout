import React, { Component } from "react";

export default class FormDemo1 extends Component {
  state = {
    userName: '',
    dalga:[],
    city:'',
  };
  onChangeHandler = (event) => {
    //this.setState({ userName: event.target.value });
    let name=event.target.name;
    let value=event.target.value;

    this.setState({[name]:value});
  };

  onSubmitHandler = (event) => {
     event.preventDefault();
    this.state.dalga.push(this.state.userName);
    alert(this.state.userName);
    console.log(this.state.dalga)
  };

  render() {
    return (
      <div>
        
        <form onSubmit={this.onSubmitHandler}>
        <h3>User Name</h3>
          <input name="userName" onChange={this.onChangeHandler} type="text"></input>
          <h3>Welcome {this.state.userName}</h3>

          <h3>City Name</h3>
          <input name="city"onChange={this.onChangeHandler} type="text"></input>
          <h3>City {this.state.city}</h3>

         
          <input type="submit" value="Save"></input>
        </form>
      </div>
    );
  }
}
