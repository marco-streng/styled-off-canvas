import React from 'react'
import PropTypes from 'prop-types'

import Context from './Context'

/**
 * Provider component
 *
 * @param   {boolean}   closeOnEsc        if the menu should close on esc keydown
 * @param   {boolean}   isOpen            if the menu should be visible or not
 * @param   {string}    menuBackground    background color of the menu
 * @param   {string}    menuDuration      duration of the open/close animation for the menu
 * @param   {function}  onClose           callback function if menu closes
 * @param   {string}    overlayBackground background color of the menu
 * @param   {string}    overlayDuration   duration of the open/close animation for the overlay
 * @param   {string}    overlayOpacity    opacity of the overlay
 * @param   {string}    position          position of the menu (left or right)
 * @param   {string}    width             maximum width of the menu
 * @returns {component}                   React component
 */
const Provider = ({
  children,
  closeOnEsc = true,
  isOpen = false,
  menuBackground = '#fff',
  menuDuration = '500ms',
  onClose,
  overlayBackground = '#000',
  overlayDuration = '500ms',
  overlayOpacity = 0.2,
  position = 'right',
  width = '300px'
}) => (
  <Context.Provider
    value={{
      closeOnEsc,
      isOpen,
      menuBackground,
      menuDuration,
      onClose,
      overlayBackground,
      overlayDuration,
      overlayOpacity,
      position,
      width
    }}
  >
    {children}
  </Context.Provider>
)

Provider.propTypes = {
  closeOnEsc: PropTypes.bool,
  isOpen: PropTypes.bool,
  menuBackground: PropTypes.string,
  menuDuration: PropTypes.string,
  onClose: PropTypes.func.isRequired,
  overlayBackground: PropTypes.string,
  overlayDuration: PropTypes.string,
  overlayOpacity: PropTypes.number,
  position: PropTypes.oneOf(['left', 'right']),
  width: PropTypes.string
}

export default Provider
