import React, { Component } from "react";
// import logo from './logo.svg';
import "./App.css";
import HomePage from "./components/HomePage";
import { Switch, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import Axios from "axios";
import Beers from "./components/Beers";
import Beer from "./components/Beer";
import RandomBeer from "./components/RandomBeer";
import NewBeer from "./components/NewBeer";

let baseUrl = "https://ih-beers-api2.herokuapp.com/beers";
let allBeersEndpoint = "/";

class App extends Component {
  state = {
    dataReady: false,
  };

  componentDidMount = () => {
    this.getAllBeers();
  };

  getAllBeers = () => {
    Axios.get(baseUrl + allBeersEndpoint)
      .then((response) => {
        this.setState({
          beers: response.data, // save the array of the data instead of the whole object response
          dataReady: true,
        });
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route
            exact
            path="/home"
            render={(props) => <HomePage {...props} />}
          />
          <Route
            exact
            path="/beers"
            render={(props) => (
              <Beers
                {...props}
                beers={this.state.beers}
                dataReady={this.state.dataReady}
              />
            )}
          />
          <Route
            exact
            path="/random-beer"
            render={(props) => <RandomBeer {...props} />}
          />
          <Route
            exact
            path="/new-beer"
            render={(props) => <NewBeer {...props} />}
          />
          <Route
            exact
            path="/beers/:beerID"
            render={(props) => <Beer {...props} beers={this.state.beers} />}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
