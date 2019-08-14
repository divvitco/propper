# propper
![npm (scoped)](https://img.shields.io/npm/v/@overlaylabs/propper)
![Travis](https://img.shields.io/travis/overlay-labs/propper/master)
![Codecov branch](https://img.shields.io/codecov/c/github/overlay-labs/propper/master)
![David](https://img.shields.io/david/dev/overlay-labs/propper)
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
