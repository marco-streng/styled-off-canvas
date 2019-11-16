<p align="center">
  <img src="https://raw.githubusercontent.com/marco-streng/styled-off-canvas/master/logo.png" width="220" alt="styled-off-canvas">
</p>

<h1 align="center">
   💅 styled-off-canvas
</h1>

<p align="center">
  A simple off canvas menu built with <a href="https://www.styled-components.com/" target="_blank">styled-components</a>
</p>

<p align="center">
  <a href="https://standardjs.com">
    <img alt="JavaScript Standard Style" src="https://img.shields.io/badge/code_style-standard-brightgreen.svg">
  </a>
  <a href="https://www.styled-components.com/">
    <img alt="Built with Styled Components" src="https://img.shields.io/badge/built%20with-styled%20components-db7093.svg">
  </a>
</p>

## Description

styled-off-canvas is a customizable off-canvas menu built with [React](https://reactjs.org/) and [styled-components](https://www.styled-components.com/)

## Demo

A demo can be found here: <a href="http://marcostreng.com/styled-off-canvas">Demo</a>


## Implementation

For more flexibility you will keep the menu state (open or closed) in your application. The example below shows a very simple implementation.

### Components

`styled-off-canvas` comes with two components: `<Menu />` and `<Overlay />`.

`<Menu />` is the off-canvas menu itself. You can pass anything you want as children (e.g. styled list of react-router links)

`<Overlay />` is an optional component which renders a semi-transparent layer above your app content.

### Example

```javascript
import React, { useState } from 'react'
import { Menu, Overlay } from 'marco-streng/styled-off-canvas'

const App = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Styled>
      <button onClick={() => setIsOpen(!isOpen)}>Toggle menu</button>

      <Menu isOpen={isOpen}>
        <ul>
          <li>
            <a onClick={() => setIsOpen(false)}>close</a>
          </li>
          <li>
            <a href='/about'>About</a>
          </li>
          <li>
            <a href='/contact'>Contact</a>
          </li>
        </ul>
      </Menu>

      <Overlay
        onClick={() => setIsOpen(false)}
        isOpen={isOpen}
      />

      <Center>this is some nice content!</Center>
    </Styled>
  )
}

export default hot(App)
```

### Properties

`<Menu />` component

* `isOpen = false`: if the menu should be visible or not
* `color = #fff`: background color
* `duration = 500ms`: duration of the css transition
* `position = right`: position of the menu (`left` or `right`)
* `width = 300px`: maximum width of the menu

`<Overlay />` component

* `isOpen = false`: if the overlay should be visible or not
* `color = #000`: color of the overlay
* `opacity = 0.2`: opacity of the overlay
* `duration = 500ms`: duration of the css transition

Both components can additionally be customized with styled-components

```jsx
// example

<Menu css={{ border: `1px solid ${theme.menu.borderColor}` }}>...</Menu>
```

## Local development

Install dependencies and start the development server

```
yarn
yarn dev
```

or via npm

```
npm install
npm run dev
```

Open [`localhost:8080`](http://localhost:8080) in your browser.

## Resources

* https://reactjs.org/
* https://www.styled-components.com/
* https://jestjs.io/
* https://webpack.js.org/
* https://standardjs.com/
* https://stylelint.io/

## License

Copyright (c) 2019-present Marco Streng. See [LICENSE](./LICENSE.md) for details.
