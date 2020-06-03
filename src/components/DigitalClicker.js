// Code DigitalClicker Component Here
import React from 'react'

export default class DigitalClicker extends React.Component{
    constructor(){
        super()
    }
    state = {
        timesClicked: 0
    }

    handleClick = event => {
        let newCount = this.state.timesClicked + 1
        this.setState({
            timesClicked: newCount
        })
    }

    render(){
        return(
            <button onClick={this.handleClick}>{this.state.timesClicked}</button>
        )
    }

}