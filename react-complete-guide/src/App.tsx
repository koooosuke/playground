import React, { FC, useEffect, useState } from 'react';
import './App.css';
import Person from './Person/Person'

const App: FC = () => {
  const [persons, setPersons] = useState([
    { id: 'a', name: 'Max', age: 28 },
    { id: 'b', name: 'Manu', age: 29 },
    { id: 'c', name: 'Stephanie', age: 26 }
  ])

  const [showPersons, setShowPersons] = useState(false)

  const switchNameChangeHandler = (event: React.ChangeEvent<HTMLInputElement>, id: string) => {
    const personIndex = persons.findIndex((p) => p.id === id);
    const person = {...persons[personIndex]};
    person.name = event.target.value
    const newPersons = [...persons];
    newPersons[personIndex] = person
    setPersons(newPersons) 
  } 

  const togglePersonsHalder = () => {
    setShowPersons(!showPersons)
  }

  const deletePersonHandler = (index: number) => {
    const dupPersons = [...persons];
    dupPersons.splice(index, 1);
    setPersons(dupPersons)
  }

  const style = {
    backgroundColor: 'white',
    font: 'inherit',
    border: '1px solid blue',
    padding: '8px',
    cursor: 'pointer'
  };

  return (
    <div className="App">
      <h1>Hi, I'm React App</h1>
      <p>this is really wordking!</p>
      <button style={style} onClick={togglePersonsHalder}>Toggle Persons</button>
      {showPersons ?
        <div>
          {persons.map((p, index) => (
            <Person 
            key={p.id}
            name={p.name}
            age={p.age}
            click={() => deletePersonHandler(index)}
            change={(event) => switchNameChangeHandler(event, p.id)} />)
          )}
        </div> : null
      }
    </div>
  )
}

export default App;
