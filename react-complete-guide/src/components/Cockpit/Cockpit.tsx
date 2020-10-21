import React, { FC, useEffect } from 'react';
import styled from 'styled-components';
import { PersonAttr } from 'components/Persons/Persons';
import './Cockpit.css';

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

type Props = {
    title: string,
    persons: PersonAttr[],
    showPersons: boolean,
    click: () => void 
}

const Cockpit: FC<Props> = ({ title, persons, showPersons, click }) => {
    const classes = [];

    if(persons.length <= 2) {
        classes.push('red');
    }
    if(persons.length <= 1) {
        classes.push('bold');
    }

    useEffect(() => {
        console.log('[Cockpit.tsx]  useEffect');

        setTimeout(() => {
            alert('Saved date to cloud');
        }, 1000);

        return () => {
            console.log('[Cockpit.tsx] Clean up work useEffect');
        }
    }, [persons]);

    return (
        <>
            <h1>{title}</h1>
            <p className={classes.join(' ')}>this is really wordking!</p>
            <StyledButton showPersons={showPersons} onClick={click}>
                Toggle Persons 
            </StyledButton> 
        </>
    );
}

export default Cockpit