import React from 'react'

export default class PlayClick extends React.Component{

	state = {
		playing: false
	}


	render(){
		return(
				<button onClick={
					(e) => {
						this.setState({playing:!this.state.playing},
							this.props.playClickHandler(this.state.playing)
						)
					}
				}> {this.state.playing ? "Pause" : "Play"} </button> 
		)
	}
}