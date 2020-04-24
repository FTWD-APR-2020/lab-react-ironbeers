import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default class Beers extends Component {
  state = {
    query: "",
    beers: [],
  };
  showBeers = () => {
    let beers = this.state.beers ? this.state.beers : this.props.beers;
    return beers.map((eachBeer) => {
      return (
        <div key={eachBeer._id}>
          <img src={eachBeer.image_url} />
          <h3>{eachBeer.name}</h3>
          <h6>
            <Link to={`/beers/${eachBeer._id}`}>{eachBeer.tagline}</Link>
          </h6>
          <p>Contributed by: {eachBeer.contributed_by}</p>
        </div>
      );
    });
  };

  searchHandler = async (e) => {
    await this.setState({
      query: e.target.value,
    });
    let response = await axios.get(
      `https://ih-beers-api2.herokuapp.com/beers/search?q=${this.state.query}`
    );
    this.setState({
      beers: response.data,
    });
  };

  render() {
    console.log(this.props.beers);
    return (
      <div>
        <label>Search:</label>
        <input
          type="text"
          value={this.state.query}
          onChange={this.searchHandler}
        />
        {this.props.dataReady ? this.showBeers() : "Loading..."}
        {/* {this.showBeers()} */}
      </div>
    );
  }
}
