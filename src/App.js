import React, { Component } from 'react';
import './App.css';

// 
import CardList from './components/card-list/card-list.component';
import { Search } from './components/search/search.component';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''
    };
    
  };

  handleChange = (e) => {
    // console.log(e.target.value);
    this.setState({ searchField: e.target.value })
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(result => result.json())
      .then(users => this.setState({ monsters: users }));
  }

  render() {

    const { monsters, searchField } = this.state;
    const filterMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));

    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <Search placeholder='Search Monster' handleChange={this.handleChange} />
        <CardList monsters={filterMonsters} />
      </div>
    )
  }
}

export default App;
