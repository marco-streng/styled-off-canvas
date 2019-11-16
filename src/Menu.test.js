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
