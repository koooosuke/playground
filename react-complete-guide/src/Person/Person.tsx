import React, { FC } from 'react';
import styled from 'styled-components';

type Props = {
    name: string,
    age: number,
    click: () => void,
    change: (event: React.ChangeEvent<HTMLInputElement>) => void,
};

const StyledDiv = styled.div`
  width: 60%;
  margin: 16px auto;
  border: 1px solid #eee;
  box-shadow: 0 2px 3px #ccc;
  padding: 16px;
  text-align: center;
  @media (min-width: 500px): {
    width: 450px;
  }
`

const Person: FC<Props> = ({ name, age, children, click, change }) => {
  return(
    <StyledDiv>
      <p onClick={click}>I'm a {name}! I'm {age} years old!</p>
      {children && <p>{children}</p>}
      <input type="input" onChange={change} value={name} />
    </StyledDiv>
  );
}

export default Person;
