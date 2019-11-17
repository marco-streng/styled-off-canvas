import React from 'react'
import renderer from './helper/tests/jest'

import Menu from './Menu'

describe('Menu', () => {
  test('default', () => {
    const tree = renderer(<Menu isOpen><div>content</div></Menu>).toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('closed', () => {
    const tree = renderer(<Menu isOpen={false}><div>content</div></Menu>).toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('custom color', () => {
    const tree = renderer(<Menu isOpen color='#000'><div>content</div></Menu>).toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('custom duration', () => {
    const tree = renderer(<Menu isOpen duration='1s'><div>content</div></Menu>).toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('position left', () => {
    const tree = renderer(<Menu isOpen position='left'><div>content</div></Menu>).toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('position left closed', () => {
    const tree = renderer(<Menu isOpen={false} position='left'><div>content</div></Menu>).toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('onEsc callback', () => {
    const cb = jest.fn()
    const component = renderer(<Menu onEsc={cb} isOpen><div>content</div></Menu>)
    component.update()

    const escKeyDown = new window.KeyboardEvent('keydown', { keyCode: 27 })
    document.dispatchEvent(escKeyDown)

    expect(cb).toHaveBeenCalled()
  })

  test('onEsc callback when closed', () => {
    const cb = jest.fn()
    const component = renderer(<Menu onEsc={cb}><div>content</div></Menu>)
    component.update()

    const escKeyDown = new window.KeyboardEvent('keydown', { keyCode: 27 })
    document.dispatchEvent(escKeyDown)

    expect(cb).not.toHaveBeenCalled()
  })

  test('onEsc callback with another key', () => {
    const cb = jest.fn()
    const component = renderer(<Menu onEsc={cb} isOpen><div>content</div></Menu>)
    component.update()

    const escKeyDown = new window.KeyboardEvent('keydown', { keyCode: 99 })
    document.dispatchEvent(escKeyDown)

    expect(cb).not.toHaveBeenCalled()
  })

  test('body styling', () => {
    const component = renderer(<Menu isOpen><div>content</div></Menu>)

    component.update()
    expect(document.body.style._values).toEqual({
      'max-height': '100%',
      overflow: 'hidden'
    })

    component.update(<Menu><div>content</div></Menu>)
    component.update()
    expect(document.body.style._values).toEqual({})
  })
})
