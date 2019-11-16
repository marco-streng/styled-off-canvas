import React from 'react'
import renderer from './helper/tests/jest'

import Overlay from './Overlay'

describe('Overlay', () => {
  test('default', () => {
    const tree = renderer(<Overlay isOpen />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('custom color', () => {
    const tree = renderer(<Overlay isOpen color='#ccc' />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('custom opacity', () => {
    const tree = renderer(<Overlay isOpen opacity={0.5} />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('custom duration', () => {
    const tree = renderer(<Overlay isOpen duration='1s' />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('closed', () => {
    const tree = renderer(<Overlay />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
