import React, { Component } from "react";
import Cards from "./components/cards";
import SearchBox from "./components/searchbox";
import { Robots } from "./robots";
import "./App.css";
import Scroll from "./components/scroll";

class App extends Component {
  constructor() {
    super();
    this.state = {
      cards: [],
      searchfield: ""
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => {
        this.setState({ cards: users });
      });
  }

  handleChnage = e => {
    this.setState({ searchfield: e.target.value.toLowerCase() });
  };

  render() {
    const { cards, searchfield } = this.state;

    const filteredCards = cards.filter(card =>
      card.name.toLowerCase().includes(searchfield)
    );
    return !cards.length ? (
      <h1>Loading</h1>
    ) : (
      <div className="tc">
        <h1 className="f2">RoboFriends</h1>
        <SearchBox searchChange={this.handleChnage} />
        <Scroll>
          <Cards cards={filteredCards} />
        </Scroll>
      </div>
    );
  }
}

export default App;
