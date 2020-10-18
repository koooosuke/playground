import React, { FC, useState } from 'react';
import './App.css';
import Person from './Person/Person'

const App: FC = () => {
  const [persons, setPersons] = useState([
    { name: 'Max', age: 28 },
    { name: 'Manu', age: 29 },
    { name: 'Stephanie', age: 26 }
  ])

  const switchNameHandler = () => {
    console.log('was clocked!')
    setPersons([
      { name: 'Maximum', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 29 }
    ])
  }

  return (
    <div className="App">
      <h1>Hi, I'm React App</h1>
      <p>this is really wordking!</p>
      <button onClick={switchNameHandler}>Switch Name</button>
      {persons.map((p, id) => <Person key={id} name={p.name} age={p.age} />)}
    </div>
  )
}

export default App;
