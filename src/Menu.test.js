import React from 'react'
import { render, fireEvent } from '@testing-library/react'

import Provider from './Provider'
import Menu from './Menu'

describe('Menu', () => {
  test('default', () => {
    const { container } = render(<Provider onClose={() => {}} isOpen><Menu><div>content</div></Menu></Provider>)
    expect(container.firstChild).toMatchSnapshot()
  })

  test('closed', () => {
    const { container } = render(<Provider onClose={() => {}}><Menu><div>content</div></Menu></Provider>)
    expect(container.firstChild).toMatchSnapshot()
  })

  test('custom color', () => {
    const { container } = render(<Provider onClose={() => {}} isOpen menuBackground='#000'><Menu><div>content</div></Menu></Provider>)
    expect(container.firstChild).toMatchSnapshot()
  })

  test('custom duration', () => {
    const { container } = render(<Provider onClose={() => {}} isOpen duration='1s'><Menu><div>content</div></Menu></Provider>)
    expect(container.firstChild).toMatchSnapshot()
  })

  test('position left', () => {
    const { container } = render(<Provider onClose={() => {}} isOpen position='left'><Menu><div>content</div></Menu></Provider>)
    expect(container.firstChild).toMatchSnapshot()
  })

  test('position left closed', () => {
    const { container } = render(<Provider onClose={() => {}} position='left'><Menu><div>content</div></Menu></Provider>)
    expect(container.firstChild).toMatchSnapshot()
  })

  test('closeOnEsc callback', () => {
    const cb = jest.fn()
    const { container } = render(<Provider isOpen onClose={cb}><Menu><div>content</div></Menu></Provider>)

    fireEvent.keyDown(container, {
      key: 'Escape',
      code: 'Escape',
      keyCode: 27,
      charCode: 27
    })

    expect(cb).toHaveBeenCalled()
  })

  test('closeOnEsc callback when closed', () => {
    const cb = jest.fn()
    const { container } = render(<Provider onClose={cb}><Menu><div>content</div></Menu></Provider>)

    fireEvent.keyDown(container, {
      key: 'Escape',
      code: 'Escape',
      keyCode: 27,
      charCode: 27
    })

    expect(cb).not.toHaveBeenCalled()
  })

  test('closeOnEsc callback with another key', () => {
    const cb = jest.fn()
    const { container } = render(<Provider isOpen onClose={cb}><Menu><div>content</div></Menu></Provider>)

    fireEvent.keyDown(container, {
      key: 'a',
      code: 'KeyA',
      keyCode: 65,
      charCode: 65
    })

    expect(cb).not.toHaveBeenCalled()
  })

  test('without closeOnEsc', () => {
    const cb = jest.fn()
    const { container } = render(<Provider closeOnEsc={false} isOpen onClose={cb}><Menu><div>content</div></Menu></Provider>)

    fireEvent.keyDown(container, {
      key: 'Escape',
      code: 'Escape',
      keyCode: 27,
      charCode: 27
    })

    expect(cb).not.toHaveBeenCalled()
  })

  test('body styling', () => {
    const { rerender } = render(<Provider onClose={() => {}} isOpen><Menu><div>content</div></Menu></Provider>)

    expect(document.body.style._values).toEqual({
      'max-height': '100%',
      overflow: 'hidden'
    })

    rerender(<Provider onClose={() => {}}><Menu><div>content</div></Menu></Provider>)
    expect(document.body.style._values).toEqual({})
  })
})
