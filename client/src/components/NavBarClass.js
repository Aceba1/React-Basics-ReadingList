import React, { Component } from 'react' 
//import PropTypes from 'prop-types'
// Any time we use JSX we need to import React
// Component is a class within React, which we will derive our custom component from


export default class NavBarClass extends Component {
  constructor(props) {
    super()

    // this.propTypes = {

    // }

    this.state = {
      counter: 0,
      ...props.state
    }


    this.counterUp = this.counterUp.bind(this);
    this.counterDown = this.counterDown.bind(this);
    this.counterReset = this.counterReset.bind(this);
  }

  counterUp() {
    this.setState(state => ({
      counter: state.counter + 1
    }));
  }
  counterDown() {
    this.setState(state => ({
      counter: state.counter - 1
    }));

  }
  counterReset() {
    this.setState(state => ({
      counter: 0
    }));
  }
  
  render() {
    return (
      <div>
        <h1>{`The Count is ${this.state.counter}`}</h1>
        <button onClick={this.counterDown}>-1</button>
        <button onClick={this.counterReset}>R</button>
        <button onClick={this.counterUp}>+1</button>
      </div>
    )
  }
}
