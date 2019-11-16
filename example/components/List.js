import React from 'react'
import styled from 'styled-components'

const Ul = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`

const Li = styled.li`
  display: block;
  margin: 0;
  padding: 0;
`

const A = styled.a`
  border-bottom: 1px solid #efefef;
  color: ${props => props.active ? 'rgba(218, 135, 196)' : '#333'};
  display: block;
  font-family: Helvetica, Arial, sans-serif;
  font-size: 16px;
  font-weight: 700;
  margin-left: 18px;
  padding: 18px 18px 18px 5px;
  text-decoration: none;
  text-transform: uppercase;
  transition: background 200ms ease-in-out;

  &:hover {
    color: rgba(218, 135, 196);
  }
`

const List = () => (
  <>
    <Ul>
      <Li>
        <A active href='#'>Home</A>
      </Li>
      <Li>
        <A href='#'>About</A>
      </Li>
      <Li>
        <A href='#'>Work</A>
      </Li>
      <Li>
        <A href='#'>Contact</A>
      </Li>
    </Ul>
  </>
)

export default List
