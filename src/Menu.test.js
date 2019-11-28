import React from 'react'
import renderer from './helper/tests/jest'

import Provider from './Provider'
import Menu from './Menu'

describe('Menu', () => {
  test('default', () => {
    const tree = renderer(<Provider onClose={() => {}} isOpen><Menu><div>content</div></Menu></Provider>).toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('closed', () => {
    const tree = renderer(<Provider onClose={() => {}}><Menu><div>content</div></Menu></Provider>).toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('custom color', () => {
    const tree = renderer(<Provider onClose={() => {}} isOpen menuBackground='#000'><Menu><div>content</div></Menu></Provider>).toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('custom duration', () => {
    const tree = renderer(<Provider onClose={() => {}} isOpen duration='1s'><Menu><div>content</div></Menu></Provider>).toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('position left', () => {
    const tree = renderer(<Provider onClose={() => {}} isOpen position='left'><Menu><div>content</div></Menu></Provider>).toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('position left closed', () => {
    const tree = renderer(<Provider onClose={() => {}} position='left'><Menu><div>content</div></Menu></Provider>).toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('closeOnEsc callback', () => {
    const cb = jest.fn()
    const component = renderer(<Provider isOpen onClose={cb}><Menu><div>content</div></Menu></Provider>)
    component.update()

    const escKeyDown = new window.KeyboardEvent('keydown', { keyCode: 27 })
    document.dispatchEvent(escKeyDown)

    expect(cb).toHaveBeenCalled()
  })

  test('closeOnEsc callback when closed', () => {
    const cb = jest.fn()
    const component = renderer(<Provider onClose={cb}><Menu><div>content</div></Menu></Provider>)
    component.update()

    const escKeyDown = new window.KeyboardEvent('keydown', { keyCode: 27 })
    document.dispatchEvent(escKeyDown)

    expect(cb).not.toHaveBeenCalled()
  })

  test('closeOnEsc callback with another key', () => {
    const cb = jest.fn()
    const component = renderer(<Provider isOpen onClose={cb}><Menu><div>content</div></Menu></Provider>)
    component.update()

    const escKeyDown = new window.KeyboardEvent('keydown', { keyCode: 99 })
    document.dispatchEvent(escKeyDown)

    expect(cb).not.toHaveBeenCalled()
  })

  test('without closeOnEsc', () => {
    const cb = jest.fn()
    const component = renderer(<Provider closeOnEsc={false} isOpen onClose={cb}><Menu><div>content</div></Menu></Provider>)
    component.update()

    const escKeyDown = new window.KeyboardEvent('keydown', { keyCode: 27 })
    document.dispatchEvent(escKeyDown)

    expect(cb).not.toHaveBeenCalled()
  })

  test('body styling', () => {
    const component = renderer(<Provider onClose={() => {}} isOpen><Menu><div>content</div></Menu></Provider>)

    component.update()
    expect(document.body.style._values).toEqual({
      'max-height': '100%',
      overflow: 'hidden'
    })

    component.update(<Provider onClose={() => {}}><Menu><div>content</div></Menu></Provider>)
    component.update()
    expect(document.body.style._values).toEqual({})
  })
})
