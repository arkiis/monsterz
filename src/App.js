import React, { Component } from "react";
import { CardList } from "./components/card-list/card-list.component";

import { SearchBox } from "./components/search-box/search-box";

import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      rappers: [],
      searchField: ""
    };
  }

  handleChange = e => {
    this.setState({ searchField: e.target.value });
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ rappers: users }));
  }

  render() {
    const { rappers, searchField } = this.state;
    const filteredRappers = rappers.filter(rapper =>
      rapper.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder="search monsters"
          handleChange={e => this.setState({ searchField: e.target.value })}
        />
        <CardList rappers={filteredRappers} />
      </div>
    );
  }
}

export default App;
