// import React from 'react'
import renderer from 'react-test-renderer'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
// import { ThemeProvider } from 'styled-components'

// import theme from '../../theme'

Enzyme.configure({ adapter: new Adapter() })

export default (component) => (
  renderer.create(component)
)
