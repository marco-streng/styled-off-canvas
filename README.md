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
  <a href="https://www.styled-components.com/">
    <img alt="Built with Styled Components" src="https://img.shields.io/badge/built%20with-styled%20components-db7093.svg">
  </a>
</p>

## Description

styled-off-canvas is a customizable off-canvas menu built with [React](https://reactjs.org/) and [styled-components](https://www.styled-components.com/)

## Demo

A demo can be found here: <a href="https://styled-off-canvas.vercel.app/">Demo</a>

## Installation

```
# via npm
npm install styled-off-canvas

# via yarn
yarn install styled-off-canvas
```

## Implementation

### Hook

The `useOffCanvas()` hook provies the current state and all methods to contorl the menu.

```javascript
const { isOpen, toggle, close, open } = useOffCanvas();
``````

### Components

`styled-off-canvas` comes with three components: `<OffCanvasProvider />`, `<Menu />` and `<Overlay />`.

`<OffCanvasProvider />` is a wrapping component which provides the menus context.

`<Menu />` is the off-canvas menu itself. You can pass anything you want as children (e.g. styled list of router links)

`<Overlay />` is an optional component which renders a semi-transparent layer above your app content.

### Example

```javascript
import React, { useState } from 'react'
import { StyledOffCanvas, Menu, Overlay } from 'styled-off-canvas'

const Navigation = () => {
  const { close } = useOffCanvas();

  return (
    <Menu closeOnEsc>
      <CrossIcon onClick={() => close()} />
      <List />
    </Menu>
  );
};

const Burger = () => {
  const { isOpen, toggle } = useOffCanvas();

  return (
    <BurgerIcon onClick={() => toggle()} />
  );
};

const App = () => {
  return (
    <Container>
      <Burger />
      <Navigation />

      <div>this is some nice content!</div>

      <Overlay />
    </Container>
  );
};

export default App
```

### Properties

`<Menu />` component

* `background = '#fff'`: background color of the menu
* `duration = '500ms'`: duration of the css transition of the menu
* `closeOnEsc = true`: if the menu should close on esc keydown
* `position = 'right'`: position of the menu (`left` or `right`)
* `width = '300px'`: maximum width of the menu
* `onClose`: callback function if menu closes (e.g. by click on the overlay)

`<Overlay />` component

* `background = '#000'`: background color of the overlay
* `duration = '500ms'`: duration of the open/close animation of the overlay
* `opacity = 0.3`: css opacity of the overlay

Also `<Menu />` and `<Overlay />` can additionally be customized with styled-components

```jsx
// example

<Menu css={{ border: `1px solid ${theme.menu.borderColor}` }}>...</Menu>
```

## License

Copyright (c) 2024-present Marco Streng. See [LICENSE](./LICENSE.md) for details.
