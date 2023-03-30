import React from 'react'

interface GreeterProps {
  person: string
}

const Greeter = ({person}: GreeterProps) => {
  return (
    <div>Hello {person}</div>
  )
}

export default Greeter;