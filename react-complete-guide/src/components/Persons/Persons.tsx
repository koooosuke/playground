import React, { FC } from 'react';
import Person from './Person/Person';

export type PersonAttr = {
    id: string,
    name: string,
    age: number
}

type Props = {
    persons: PersonAttr[],
    click: (index: number) => void,
    change: (event: React.ChangeEvent<HTMLInputElement>, id: string) => void,
}

const Persons: FC<Props> = ({ persons, click, change }) => {
    return (
        <>
            {persons.map((p, index)  => (
                <Person
                key={p.id}
                name={p.name}
                age={p.age}
                click={() => click(index)}
                change={(event) => change(event, p.id)}
                />
            ))}
        </>
    );
}

export default Persons