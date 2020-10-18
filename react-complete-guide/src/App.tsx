import React, { FC } from 'react';
import './App.css';
import Person from './Person/Person'

const App: FC = () => (
  <div className="App">
    <h1>Hi, I'm React App</h1>
    <p>this is really wordking!</p>
    <Person name="Max" age={28} />
    <Person name="Manu" age={29} >
      My Hobbies: Racing
    </Person>
    <Person name="Stephanie" age={26} />
  </div>
)

export default App;
