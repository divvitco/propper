import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { mount } from 'enzyme'

import { propper } from './index.js'

class ClassComp extends Component {
  render () {
    const { truthyCount } = this.props

    return <>You have {truthyCount} items available</>
  }
}

const FuncComp = ({ truthyCount }) => {
  return <>You have {truthyCount} items available</>
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

  const wrapped =  mount(<ProppedComp items={[true, true, false]} />)

  // the reduceProp func should have been called once
  expect(mockReduceProps.mock.calls.length).toBe(1)
})

test('class components properly pass through dynamic props', () => {
  const mockReduceProps = jest.fn(ownProps => ({
    truthyCount: ownProps.items.filter(a => a).length
  }))
  const ProppedComp = propper(mockReduceProps)(ClassComp)

  const wrapped =  mount(<ProppedComp items={[true, true, false]} />)
  const comp = wrapped.childAt(0)

  // ensure the wrapped tree is correct
  expect(wrapped).toMatchSnapshot()

  // ensre only two keys are present in resulting object
  expect(Object.keys(comp.props()).length).toEqual(2)

  // forceUpdate is auto-added & should be a function while truthyCount is dynamically added
  expect(comp.props().forceUpdate).toBeInstanceOf(Function)
  expect(comp.props().truthyCount).toEqual(2)

  // the reduceProp func should have been called once
  expect(mockReduceProps.mock.calls.length).toBe(1)
})

test('functional components properly pass through dynamic props', () => {
  const mockReduceProps = jest.fn(ownProps => ({
    truthyCount: ownProps.items.filter(a => a).length
  }))
  const ProppedComp = propper(mockReduceProps)(FuncComp)

  const wrapped =  mount(<ProppedComp items={[true, true, false]} />)
  const comp = wrapped.childAt(0)

  // ensure the wrapped tree is correct
  expect(wrapped).toMatchSnapshot()

  // ensre only two keys are present in resulting object
  expect(Object.keys(comp.props()).length).toEqual(2)

  // forceUpdate is auto-added & should be a function while truthyCount is dynamically added
  expect(comp.props().forceUpdate).toBeInstanceOf(Function)
  expect(comp.props().truthyCount).toEqual(2)

  // the reduceProp func should have been called once
  expect(mockReduceProps.mock.calls.length).toBe(1)
})
