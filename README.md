# propper
[![npm (scoped)](https://img.shields.io/npm/v/@overlaylabs/propper)](https://www.npmjs.com/package/@overlaylabs/propper)
[![Travis](https://img.shields.io/travis/overlay-labs/propper/master)](https://travis-ci.org/overlay-labs/propper)
[![Codecov branch](https://img.shields.io/codecov/c/github/overlay-labs/propper/master)](https://codecov.io/gh/overlay-labs/propper)
[![David](https://img.shields.io/david/dev/overlay-labs/propper)](https://david-dm.org/overlay-labs/propper?type=dev)
[![GitHub issues](https://img.shields.io/github/issues-raw/overlay-labs/propper)](https://github.com/overlay-labs/propper/issues)
[![npm](https://img.shields.io/npm/dm/@overlaylabs/propper)](https://www.npmjs.com/package/@overlaylabs/propper)

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
