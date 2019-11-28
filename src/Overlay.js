import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Context from './Context'

const Div = styled.div(({ background, opacity, duration, isOpen }) => `
  background: ${background};
  height: 100%;
  left: 0;
  opacity: ${isOpen ? opacity : 0};
  position: fixed;
  top: 0;
  transition: opacity ${duration} ease-in-out;
  width: 100%;
  z-index: ${isOpen ? 1 : -1};
`)

/**
 * Overlay component
 *
 * @param   {string}    className styled-components className for custom styling
 * @returns {component}           React component
 */
const Overlay = ({ className }) => {
  const { isOpen, onClose, overlayBackground, overlayDuration, overlayOpacity } = useContext(Context)

  return (
    <Div
      className={className}
      onClick={() => onClose()}
      isOpen={isOpen}
      background={overlayBackground}
      duration={overlayDuration}
      opacity={overlayOpacity}
    />
  )
}

Overlay.propTypes = {
  className: PropTypes.object
}

export default Overlay
