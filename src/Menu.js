import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Context from './Context'

const Container = styled.div(({
  background,
  duration,
  isOpen,
  position,
  width
}) => `
  background-color: ${background};
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

const isCSR = typeof window !== 'undefined'

const initalBodyStyle = {
  maxHeight: isCSR ? window.document.body.style.maxHeight : 'none',
  overflow: isCSR ? window.document.body.style.overflow : 'visbile'
}

/**
 * Menu component
 *
 * @param   {string}    className styled-components className for custom styling
 * @returns {component}           React component
 */
const Menu = ({
  children,
  className
}) => {
  const { isOpen, menuBackground, menuDuration, closeOnEsc, onClose, position, width } = React.useContext(Context)
  // Avoid scrolling on content when the navigation is open
  React.useEffect(() => {
    const bodyElStyle = window.document.body.style

    if (isOpen) {
      bodyElStyle.maxHeight = '100%'
      bodyElStyle.overflow = 'hidden'
    } else {
      bodyElStyle.maxHeight = initalBodyStyle.maxHeight
      bodyElStyle.overflow = initalBodyStyle.overflow
    }
  }, [isOpen])

  if (closeOnEsc) {
    React.useEffect(() => {
      const handleKeyDown = ({ keyCode }) => {
        if (keyCode === 27) onClose()
      }

      isOpen
        ? window.document.addEventListener('keydown', handleKeyDown)
        : window.document.removeEventListener('keydown', handleKeyDown)
    }, [isOpen])
  }

  return (
    <Container
      className={className}
      background={menuBackground}
      duration={menuDuration}
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
  className: PropTypes.object
}

export default Menu
