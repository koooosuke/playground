import React, { FC } from 'react';

type Props = {
    name: string,
    age: number,
    click: () => void,
    change: (event: React.ChangeEvent<HTMLInputElement>) => void,
};

const Person: FC<Props> = ({ name, age, children, click, change }) => (
  <div>
    <p onClick={click}>I'm a {name}! I'm {age} years old!</p>
    {children && <p>{children}</p>}
    <input type="input" onChange={change} />
  </div>
);

export default Person;
