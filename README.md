# propper
![npm (scoped)](https://img.shields.io/npm/v/@overlaylabs/propper)
![Travis](https://img.shields.io/travis/overlay-labs/propper/master)
[![Coverage Status](https://coveralls.io/repos/github/overlay-labs/propper/badge.svg?branch=master)](https://coveralls.io/github/overlay-labs/propper?branch=master)
![NPM](https://img.shields.io/npm/l/@overlaylabs/propper)
![GitHub issues](https://img.shields.io/github/issues-raw/overlay-labs/propper)
![npm](https://img.shields.io/npm/dm/@overlaylabs/propper)

Reduce React props on the fly without redux

## Example
```javascript
import { propper } from '@overlaylabs/propper'

// standard React components
class MyComponent extends React.Component {}

// function (much like mapStateToProps) which reduces props
reduceProps ({ items }) {
  return {
    visibleItems: items.filter(item => item.visbile)
  }
}

// wrap the component
export default propper(reduceProps)(MyComponent)
```
