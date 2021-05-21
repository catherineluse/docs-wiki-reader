import React from 'react'

const Docs = (props) => {
  const children = props.children

  return (
    <div id="doc">
      <h1>A title displays</h1>
      {children}
    </div>
  )
}
export default Docs