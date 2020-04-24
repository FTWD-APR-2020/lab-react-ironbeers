import React, { Component } from "react";

export default class Beer extends Component {
  state = { beer: null };
  componentDidMount() {
    const beer = this.props.beers
      ? this.props.beers.find((beer) => {
          console.log(beer._id, this.props.match.params.beerID);
          if (beer._id === this.props.match.params.beerID) {
            console.log(beer);
            return true;
          }
          return false;
        })
      : null;
    console.log(beer);
    this.setState({
      beer: beer,
    });
  }

  render() {
    console.log(this.props);
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
