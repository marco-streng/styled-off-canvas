import React from 'react'
import PropTypes from 'prop-types'

import Context from './Context'

const Provider = ({ isOpen, onEsc, position = 'right', children }) => (
  <Context.Provider
    value={{
      isOpen,
      onEsc,
      position
    }}
  >
    {children}
  </Context.Provider>
)

Provider.propTypes = {
  isOpen: PropTypes.bool,
  onEsc: PropTypes.func,
  position: PropTypes.oneOf(['left', 'right'])
}

export default Provider
