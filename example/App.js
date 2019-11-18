import { hot } from 'react-hot-loader/root'
import React, { useState } from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import { Menu as BurgerIcon } from 'styled-icons/remix-fill/Menu'

import { Menu, Overlay, StyledOffCanvas } from '../src/'

import List from './components/List'
import Close from './components/Close'
import GitHub from './components/GitHub'

const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
  }

  body {
    background: linear-gradient(150deg, rgba(218, 135, 196, 1) 0%, rgba(125, 50, 108, 1) 100%);
    margin: 0;
    min-height: 100%;
  }
`

const Container = styled.div`
  padding: 40px;
`

const App = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Container>
      <GlobalStyle />
      <StyledOffCanvas
        isOpen={isOpen}
        onEsc={() => setIsOpen(false)}
      >
        <BurgerIcon
          size={48}
          css={{
            background: '#fff',
            borderRadius: '6px',
            padding: '8px',
            cursor: 'pointer'
          }}
          onClick={() => setIsOpen(!isOpen)}
        />

        <GitHub />

        <Menu>
          <>
            <Close onClose={() => setIsOpen(false)} />
            <List />
          </>
        </Menu>

        <Overlay onClick={() => setIsOpen(false)} />
      </StyledOffCanvas>
    </Container>
  )
}

export default hot(App)
