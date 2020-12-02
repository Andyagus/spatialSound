import React from 'react'

export default class PlayButton extends React.Component{
	state = {
		playing: false,
		song: process.env.PUBLIC_URL + 'thedeli.mp3',

	}
	

	changeHandler = () => {
		this.setState({playing: !this.state.playing})
		this.props.playClickHandler(this.state.playing)
		
	}



	render(){ 

		return(
			
			<div> 
				<button onClick={() => {this.changeHandler()}}> {this.state.playing ? "Pause" : "Play"} </button> 
				 <audio src={this.state.song}></audio>
			</div>
		)
	}
}