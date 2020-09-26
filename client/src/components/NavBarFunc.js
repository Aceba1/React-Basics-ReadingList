import React, { useState, /*useEffect*/ } from 'react'
import PropTypes from 'prop-types'

function NavBarFunc(props) {

  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>{`The Count is ${count}`}</h1>
      <button onClick={() => {setCount(count - 1)}}>-1</button>
      <button onClick={() => {setCount(0)}}>R</button>
      <button onClick={() => {setCount(count + 1)}}>+1</button>
    </div>
  )
}

NavBarFunc.propTypes = {
}

export default NavBarFunc

