import React, { FC, useState } from 'react';
import styled from 'styled-components';

import './App.css';
import Person from './Person/Person';

const StyledButton = styled.button<{ showPersons: boolean }>`
  background-color: ${props => props.showPersons ? 'red' : 'green'};
  color: white;
  font: inherit;
  border: 1px solid blue;
  padding: 8px;
  cursor: pointer;
  
  &:hover {
    background-color: ${props => props.showPersons ? 'salmon' : 'lightgreen'};
    color: black;
  }
`

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

  const classes = [];

  if(persons.length <= 2) {
    classes.push('red');
  }
  if(persons.length <= 1) {
    classes.push('bold');
  }

  return (
    <div className="App">
      <h1>Hi, I'm React App</h1>
      <p className={classes.join(' ')}>this is really wordking!</p>
      <StyledButton showPersons={showPersons} onClick={togglePersonsHalder}>
        Toggle Persons 
      </StyledButton> 
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
