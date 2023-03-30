import React, {useState} from 'react';
import Item from './models/item';
import { v4 as getId } from 'uuid';
import ShoppingList from './components/shoppingList';
import AddToListForm  from './components/addToListForm';
import './App.css';



function App() {
const [ShopItems, setItems] = useState<Item[]>([])

const handleAdd = (name: string) => {
   setItems([...ShopItems, {id: getId(), name} ])
}

  return (
    <div className="App">
      <header className="App-header">

        <ShoppingList data = {ShopItems} />
        <AddToListForm handleAdd={handleAdd} />
       
      </header>
    </div>
  );
}

export default App;
