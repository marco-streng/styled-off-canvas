import React from 'react'
import { fireEvent, render } from '@testing-library/react'

import Provider from './Provider'
import Overlay from './Overlay'

describe('Overlay', () => {
  test('default', () => {
    const { container } = render(<Provider onClose={() => {}} isOpen><Overlay /></Provider>)
    expect(container.firstChild).toMatchSnapshot()
  })

  test('custom color', () => {
    const { container } = render(<Provider onClose={() => {}} isOpen overlayBackground='ccc'><Overlay /></Provider>)
    expect(container.firstChild).toMatchSnapshot()
  })

  test('custom opacity', () => {
    const { container } = render(<Provider onClose={() => {}} isOpen overlayOpacity={0.5}><Overlay /></Provider>)
    expect(container.firstChild).toMatchSnapshot()
  })

  test('custom duration', () => {
    const { container } = render(<Provider onClose={() => {}} isOpen overlayDuration='1s'><Overlay /></Provider>)
    expect(container.firstChild).toMatchSnapshot()
  })

  test('closed', () => {
    const { container } = render(<Provider onClose={() => {}}><Overlay /></Provider>)
    expect(container.firstChild).toMatchSnapshot()
  })

  test('close on click', () => {
    const cb = jest.fn()
    const { container } = render(<Provider onClose={cb}><Overlay /></Provider>)

    fireEvent.click(container.firstChild)

    expect(cb).toHaveBeenCalled()
  })
})
