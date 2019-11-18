import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Context from './Context'

const Div = styled.div(({ color, opacity, duration, isOpen }) => `
  background: ${color || '#000'};
  height: 100%;
  left: 0;
  opacity: ${isOpen ? opacity || 0.2 : 0};
  position: fixed;
  top: 0;
  transition: opacity ${duration || '500ms'} ease-in-out;
  width: 100%;
  z-index: ${isOpen ? 1 : -1};
`)

const Overlay = (props) => {
  const { isOpen } = useContext(Context)

  return <Div {...props} isOpen={isOpen} />
}

Overlay.propTypes = {
  color: PropTypes.string,
  duration: PropTypes.string,
  opacity: PropTypes.number
}

export default Overlay
