import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import alertify from "alertifyjs";

export default class FormDemo2 extends Component {
  state = {
    email: "",
    password: "",
    city: "",
    description: "",
  };

  handleChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;

    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    alertify.success(this.setState.email, "added to db");
  };

  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label for="email"> email</Label>
            <Input
              name="email"
              type="email"
              id="email"
              placeholder="enter email"
              onChange={this.handleChange}
            ></Input>
          </FormGroup>

          <FormGroup>
            <Label for="password"> password</Label>
            <Input
              name="password"
              type="password"
              id="password"
              placeholder="enter password"
              onChange={this.handleChange}
            ></Input>
          </FormGroup>

          <FormGroup>
            <Label for="description"> description</Label>
            <Input
              name="description"
              type="textarea"
              id="description"
              placeholder=""
              onChange={this.handleChange}
            ></Input>
          </FormGroup>

          <FormGroup>
            <Label for="city">City</Label>
            <Input
              type="select"
              name="city"
              id="city"
              onChange={this.handleChange}
            >
              <option>ANTALYA</option>
              <option>MUĞLA</option>
              <option>İZMİR</option>
              <option>İSTANBUL</option>
            </Input>
          </FormGroup>
           <Button type="submit" >Save</Button>
        </Form>
      </div>
    );
  }
}
