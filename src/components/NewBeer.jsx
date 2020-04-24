import React, { Component } from "react";
import axios from "axios";

export default class NewBeer extends Component {
  state = {
    name: "",
    tagline: "",
    description: "",
    first_brewed: "",
    brewers_tips: "",
    attenuation_level: 0,
    contributed_by: "",
  };

  onChangeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      let responseFromAPI = await axios.post(
        "https://ih-beers-api2.herokuapp.com/beers/new",
        this.state
      );
      console.log(responseFromAPI);
    } catch (err) {
      console.log(err);
    }
  };
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmitHandler}>
          <input
            type="text"
            name="name"
            onChange={this.onChangeHandler}
            value={this.state.name}
          />
          <input
            type="text"
            name="tagline"
            onChange={this.onChangeHandler}
            value={this.state.tagline}
          />
          <input
            type="text"
            name="description"
            onChange={this.onChangeHandler}
            value={this.state.description}
          />
          <input
            type="text"
            name="first_brewed"
            onChange={this.onChangeHandler}
            value={this.state.first_brewed}
          />
          <input
            type="text"
            name="brewers_tips"
            onChange={this.onChangeHandler}
            value={this.state.brewers_tips}
          />
          <input
            type="number"
            name="attenuation_level"
            onChange={this.onChangeHandler}
            value={this.state.attenuation_level}
          />
          <input
            type="text"
            name="contributed_by"
            onChange={this.onChangeHandler}
            value={this.state.contributed_by}
          />
          <button type="submit">Click me</button>
        </form>
      </div>
    );
  }
}

// name - must be type text
// tagline - must be type text
// description - must be type text
// first_brewed - must be type text
// brewers_tips - must be type text
// attenuation_level - must be type number !!!
// contributed_by - must be type text
