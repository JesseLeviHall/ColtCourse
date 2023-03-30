import React, { useRef } from 'react'

interface ListProps {
  handleAdd: (newItem: string) => void
}

const AddToListForm = ({handleAdd}: ListProps) => {
  const inputRef = useRef<HTMLInputElement>(null)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('submit')
    const newListItem = inputRef.current!.value;
    handleAdd(newListItem);
    inputRef.current!.value = '';
  }


  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder='Add Item' ref={inputRef} />
      <button type="submit">Add</button>
    </form>
  )
}

export default AddToListForm