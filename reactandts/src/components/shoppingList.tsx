import React from 'react'

interface ShoppingListProps {
  data: {id: string, name: string}[]
}

const shoppingList = ({data}: ShoppingListProps): JSX.Element => {
  return (
    <div>
      <h1>shoppingList</h1>
      <ul>
        {data.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      </div>
  )
}

export default shoppingList;