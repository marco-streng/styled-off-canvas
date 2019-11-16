import PropTypes from 'prop-types'
import styled from 'styled-components'

const Overlay = styled.div(({ color, opacity, duration, isOpen }) => `
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

Overlay.propTypes = {
  color: PropTypes.string,
  duration: PropTypes.string,
  isOpen: PropTypes.bool,
  opacity: PropTypes.number
}

export default Overlay
