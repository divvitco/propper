# propper
Reduce React props on the fly without redux

## Example
```
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
