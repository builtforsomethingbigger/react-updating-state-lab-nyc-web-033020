// Code YouTubeDebugger Component Here
import React from 'react'

export default class YouTubeDebugger extends React.Component{

    state = {
        errors: [],
        user: null,
        settings: {
            bitrate: 8,
            video: {
            resolution: '1080p'
            }
        }
    }

    clickBitrate = event => {
        this.setState({
            settings: {
                ...this.state.settings,
                bitrate: 12
            }
        })
        // console.log(this.state.settings.bitrate)
    }

    clickResolution = event => {
        this.setState({
            settings: {
                ...this.state.settings,
                video: {
                    ...this.state.settings.video,
                    resolution:'720p'
                }
            }
        })
        console.log(this.state.settings.video.resolution)
    }

    render(){
        return(
            <div>
                <button className='bitrate' onClick={this.clickBitrate}>BitRate</button>
                <button className='resolution' onClick={this.clickResolution}>Resolution</button>
            </div>
        )
    }

}