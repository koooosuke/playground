import React, { FC, useState } from 'react';
import './App.css';
import Persons, { PersonAttr } from 'components/Persons/Persons';
import Cockpit from 'components/Cockpit/Cockpit';

const App: FC<{ title: string }> = ({ title }) => {
  const [persons, setPersons] = useState<PersonAttr[]>([
    { id: 'a', name: 'Max', age: 28 },
    { id: 'b', name: 'Manu', age: 29 },
    { id: 'c', name: 'Stephanie', age: 26 }
  ])

  const [showPersons, setShowPersons] = useState(false)

  const [showCockpit, setshowCockpit] = useState(true)

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



  return (
    <div className="App">
      <button onClick={() => setshowCockpit(false)}>Rmove Cockpit</button>
      {showCockpit ? <Cockpit title={title} persons={persons} showPersons={showPersons} click={togglePersonsHalder} /> : null}
      {showPersons ?
        <Persons
          persons={persons}
          click={deletePersonHandler}
          change={switchNameChangeHandler} />
      : null}
    </div>
  )
}

export default App;
