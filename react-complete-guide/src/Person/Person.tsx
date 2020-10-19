import React, { FC } from 'react';
import './Person.css'

type Props = {
    name: string,
    age: number,
    click: () => void,
    change: (event: React.ChangeEvent<HTMLInputElement>) => void,
};

const Person: FC<Props> = ({ name, age, children, click, change }) => (
  <div className="person">
    <p onClick={click}>I'm a {name}! I'm {age} years old!</p>
    {children && <p>{children}</p>}
    <input type="input" onChange={change} value={name} />
  </div>
);

export default Person;
