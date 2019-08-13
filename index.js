import React, { useState } from 'react'

function initForceUpdate() {
  const [value, set] = useState(true)
  return () => set(!value)
}

function propper (transformProps) {
  return Comp => props => {
    const forceUpdate = initForceUpdate()

    return <Comp forceUpdate={forceUpdate} {...props} {...transformProps(props)} />
  }
}

export { propper }
