import React from 'react'
import renderer from './helper/tests/jest'

import Provider from './Provider'
import Overlay from './Overlay'

describe('Overlay', () => {
  test('default', () => {
    const tree = renderer(<Provider onClose={() => {}} isOpen><Overlay /></Provider>).toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('custom color', () => {
    const tree = renderer(<Provider onClose={() => {}} isOpen overlayBackground='ccc'><Overlay /></Provider>).toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('custom opacity', () => {
    const tree = renderer(<Provider onClose={() => {}} isOpen overlayOpacity={0.5}><Overlay /></Provider>).toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('custom duration', () => {
    const tree = renderer(<Provider onClose={() => {}} isOpen overlayDuration='1s'><Overlay /></Provider>).toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('closed', () => {
    const tree = renderer(<Provider onClose={() => {}}><Overlay /></Provider>).toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('close on click', () => {
    const cb = jest.fn()
    const component = renderer(<Provider onClose={cb}><Overlay /></Provider>)

    component.root.children[0].children[0].props.onClick()

    expect(cb).toHaveBeenCalled()
  })
})
