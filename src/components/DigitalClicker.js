// Code DigitalClicker Component Here
import React from 'react'

class DigitalClicker extends React.Component {

  state = {
    timesClicked: 0
  }

  clickHandler = () => {
    let newValue = this.state.timesClicked + 1
    this.setState({
      timesClicked: newValue
    })
  }

  render (){
  return (
    <button onClick={this.clickHandler}>{this.state.timesClicked}</button>
  
  )}
}


export default DigitalClicker