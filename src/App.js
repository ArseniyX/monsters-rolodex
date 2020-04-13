import React, { useState, useEffect } from 'react';

import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component'

import './App.css';

const App = () => {
  const [monsters, setMonsters] = useState([]);
  const [searchField, setSearchField] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => setMonsters(users))
  })

  return (
    <div className="App">
      <h1>Monster Rolodex</h1>

      <SearchBox 
        placeholder={'search monsters'}
        handleChange={e => setSearchField(e.target.value)}
      />
      <CardList monsters={monsters.filter(monster => 
        monster.name.toLowerCase().includes(searchField.toLowerCase()))}/>
    </div>
  );
}

export default App;
