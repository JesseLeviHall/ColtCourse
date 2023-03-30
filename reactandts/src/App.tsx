import React from 'react';

import ShoppingList from './components/shoppingList';
import './App.css';

function App() {
  const items = [
    {id: 1, name: 'Item 1'},
    {id: 2, name: 'Item 2'},
    {id: 3, name: 'Item 3'},
    {id: 4, name: 'Item 4'},
  ]

  return (
    <div className="App">
      <header className="App-header">
        <ShoppingList data = {items} />
       
      </header>
    </div>
  );
}

export default App;
