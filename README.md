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
  <a href="https://github.com/marco-streng/styled-off-canvas/actions">
    <img alt="Node CI build status" src="https://github.com/marco-streng/styled-off-canvas/workflows/Node%20CI/badge.svg">
  </a>
  <a href="https://app.netlify.com/sites/styled-off-canvas/deploys">
    <img alt="Netlify Status" src="https://api.netlify.com/api/v1/badges/383a1372-df7f-4f8a-b270-585aea41f0d2/deploy-status">
  </a>
  <a href="https://standardjs.com">
    <img alt="JavaScript Standard Style" src="https://img.shields.io/badge/code_style-standard-brightgreen.svg">
  </a>
  <a href="https://www.styled-components.com/">
    <img alt="Built with Styled Components" src="https://img.shields.io/badge/built%20with-styled%20components-db7093.svg">
  </a>
  <a href="https://dependabot.com">
    <img alt="Dependabot Status" src="https://api.dependabot.com/badges/status?host=github&repo=marco-streng/styled-off-canvas">
  </a>
</p>

## Description

styled-off-canvas is a customizable off-canvas menu built with [React](https://reactjs.org/) and [styled-components](https://www.styled-components.com/)

## Demo

A demo can be found here: <a href="https://styled-off-canvas.netlify.com/">Demo</a>

## Installation

```
yarn install styled-off-canvas
# or via npm
npm install styled-off-canvas
```

## Implementation

For more flexibility you will keep the menu state (open or closed) in your application. The example below shows a very simple implementation.

### Components

`styled-off-canvas` comes with three components: `<StyledOffCanvas />`, `<Menu />` and `<Overlay />`.

`<StyledOffCanvas />` is a wrapping component which provides all settings/properties.

`<Menu />` is the off-canvas menu itself. You can pass anything you want as children (e.g. styled list of react-router links)

`<Overlay />` is an optional component which renders a semi-transparent layer above your app content.

### Example

```javascript
import React, { useState } from 'react'
import { StyledOffCanvas, Menu, Overlay } from 'styled-off-canvas'

const App = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <StyledOffCanvas
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
    >

      <button onClick={() => setIsOpen(!isOpen)}>Toggle menu</button>

      <Menu>
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

      <Overlay />

      <div>this is some nice content!</div>
    </StyledOffCanvas>
  )
}

export default App
```

### Properties

`<StyledOffCanvas />` component

* `isOpen = false`:  if the menu should be visible or not
* `menuBackground = '#fff'`: background color of the menu
* `menuDuration = '500ms'`: duration of the css transition of the menu
* `onClose`: callback function if menu closes (e.g. by click on the overlay)
* `closeOnEsc = true`: if the menu should close on esc keydown
* `overlayBackground = '#000'`: background color of the overlay
* `overlayDuration = '500ms'`: duration of the open/close animation of the overlay
* `overlayOpacity = 0.2`: css opacity of the overlay
* `position = 'right'`: position of the menu (`left` or `right`)
* `width = '300px'`: maximum width of the menu

Also `<Menu />` and `<Overlay />` can additionally be customized with styled-components

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
