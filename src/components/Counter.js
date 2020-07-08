import React from 'react'
import PropTypes from 'prop-types'
import pure from 'recompose/pure'

function Counter({
  increment,
  incrementIfOdd,
  decrement,
  counter,
}) {
  return (
    <section>
        To get started, edit <code>src/routes/index.js </code>
        and save to reload.
      <p>
        Clicked: {counter} times
        {' '}
        <button onClick={increment}>+</button>
        {' '}
        <button onClick={decrement}>-</button>
        {' '}
        <button onClick={incrementIfOdd}>Increment if odd</button>
      </p>
    </section>
  )
}

Counter.propTypes = {
  increment: PropTypes.func.isRequired,
  incrementIfOdd: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  counter: PropTypes.number.isRequired,
}

export default pure(Counter)
