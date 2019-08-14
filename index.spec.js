import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { mount } from 'enzyme'

import { propper } from './index.js'

class ClassComp extends Component {
  render () {
    const { counter } = this.props

    return <>{counter}</>
  }
}

const FuncComp = ({ counter }) => {
  return <div></div>
}

test('the propper export is a function', () => {
  expect(propper).toBeInstanceOf(Function)
})

test('the propper export is a callable function which returns a function', () => {
  const reduceProps = () => ({})

  expect(propper(reduceProps)).toBeInstanceOf(Function)
})

test('the reduceProps function is called', () => {
  const mockReduceProps = jest.fn(ownProps => ({
    truthyCount: ownProps.items.filter(a => a).length
  }))
  const ProppedComp = propper(mockReduceProps)(ClassComp)

  const component =  mount(<ProppedComp items={[true, true, false]} />)

  expect(component).toMatchSnapshot()
  //console.log(component.instance().props);
  // expect(component.childAt(0).props()).toEqual({ truthyCount: 2, forceUpdate: () => {} })
  expect(Object.keys(component.childAt(0).props()).length).toEqual(2)
  expect(component.childAt(0).props().forceUpdate).toBeInstanceOf( Function )
  expect(component.childAt(0).props().truthyCount).toEqual(2)
  expect(mockReduceProps.mock.calls.length).toBe(1)
})

/*
const component = renderer.create(
  <Link page="http://www.facebook.com">Facebook</Link>,
);
let tree = component.toJSON();
expect(tree).toMatchSnapshot();

// manually trigger the callback
tree.props.onMouseEnter();
// re-rendering
tree = component.toJSON();
expect(tree).toMatchSnapshot();

// manually trigger the callback
tree.props.onMouseLeave();
// re-rendering
tree = component.toJSON();
expect(tree).toMatchSnapshot();*/
