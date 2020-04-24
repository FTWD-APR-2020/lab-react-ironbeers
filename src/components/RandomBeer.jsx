import React, { Component } from "react";
import axios from "axios";

export default class Beer extends Component {
  state = { beer: null };
  async componentDidMount() {
    const beer = await axios.get(
      "https://ih-beers-api2.herokuapp.com/beers/random"
    );
    console.log(beer);
    this.setState({
      beer: beer.data,
    });
  }

  render() {
    // console.log(this.props);
    return this.state.beer ? (
      <div>
        <img src={this.state.beer.image_url} alt="Our beer" />
        <h3>{this.state.beer.name}</h3>
        <p>{this.state.beer.tagline}</p>
        <br />
        <p> {this.state.beer.description}</p>
      </div>
    ) : (
      <div>
        {" "}
        <h1>Loading...</h1>
      </div>
    );
  }
}
