import React, { FC, useEffect, useState } from 'react';
import './App.css';
import Person from './Person/Person'

const App: FC = () => {
  const [persons, setPersons] = useState([
    { name: 'Max', age: 28 },
    { name: 'Manu', age: 29 },
    { name: 'Stephanie', age: 26 }
  ])

  const switchNameHandler = (newName: string): void => {
    setPersons([
      { name: newName, age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 29 }
    ])
  }

  const switchNameChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPersons([
      { name: 'Maximum', age: 28 },
      { name: event.target.value, age: 29 },
      { name: 'Stephanie', age: 29 }
    ]) 
  } 

  useEffect(() => {
  }, [persons])

  return (
    <div className="App">
      <h1>Hi, I'm React App</h1>
      <p>this is really wordking!</p>
      <button onClick={() => switchNameHandler('Maxmilion')}>Switch Name</button>
      {persons.map((p, id) => <Person key={id} name={p.name} age={p.age} click={() => switchNameHandler(p.name)} change={switchNameChangeHandler} />)}
    </div>
  )
}

export default App;
