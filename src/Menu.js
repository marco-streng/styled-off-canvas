import React, { useEffect, useContext } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Context from './Context'

const Container = styled.div(({
  color,
  duration,
  isOpen,
  position,
  width
}) => `
  background-color: ${color}
  height: 100%;
  left: ${position === 'left' ? isOpen ? 0 : '-100%' : 'inherit'};
  max-width: ${width};
  overflow-y: auto;
  position: fixed;
  right: ${position === 'right' ? isOpen ? 0 : '-100%' : 'inherit'};
  top: 0;
  transition: ${position} ${duration} ease-in-out;
  width: 100%;
  z-index: 10;
`)

const initalBodyStyle = {
  maxHeight: document.body.style.maxHeight,
  overflow: document.body.style.overflow
}

/**
 * Menu component
 *
 * @param   {string}    className styled-components className for custom styling
 * @param   {string}    color     background color of the menu
 * @param   {string}    duration  duration of the open/close animation
 * @param   {string}    width     maximum width of the menu
 * @returns {component}           React component
 */
const Menu = ({
  children,
  className,
  color = '#fff',
  duration = '500ms',
  width = '300px'
}) => {
  const { isOpen, onEsc, position } = useContext(Context)

  // Avoid scrolling on content when the navigation is open
  useEffect(() => {
    const bodyElStyle = document.body.style

    if (isOpen) {
      bodyElStyle.maxHeight = '100%'
      bodyElStyle.overflow = 'hidden'
    } else {
      bodyElStyle.maxHeight = initalBodyStyle.maxHeight
      bodyElStyle.overflow = initalBodyStyle.overflow
    }
  }, [isOpen])

  if (onEsc) {
    useEffect(() => {
      const handleKeyDown = ({ keyCode }) => {
        if (keyCode === 27) onEsc()
      }

      isOpen
        ? document.addEventListener('keydown', handleKeyDown)
        : document.removeEventListener('keydown', handleKeyDown)
    }, [isOpen])
  }

  return (
    <Container
      className={className}
      color={color}
      duration={duration}
      isOpen={isOpen}
      position={position}
      width={width}
    >
      {children}
    </Container>
  )
}

Menu.propTypes = {
  children: PropTypes.element.isRequired,
  className: PropTypes.object,
  duration: PropTypes.string,
  width: PropTypes.string
}

export default Menu
