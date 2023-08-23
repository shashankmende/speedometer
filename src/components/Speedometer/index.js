import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  render() {
    const {speed} = this.state
    return (
      <div className="bg_container">
        <h1 className="heading">SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          className="image"
          alt="speedometer"
        />
        <h1 className="heading">Speed is {speed}mph</h1>
        <p className="heading">Min Limit is 0mph,Max Limit is 200mph</p>
        <div className="buttons-container">
          <button
            type="button"
            className="Accelerate"
            onClick={this.onIncrement}
          >
            Accelerate
          </button>
          <button type="button" className="Break" onClick={this.onDecrement}>
            Break
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer