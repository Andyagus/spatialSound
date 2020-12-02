import React from 'react'
import MusicNote from './MusicNote'

export default class Graphics extends React.Component{
	state = {
		musicNoteImage: process.env.PUBLIC_URL + 'music-note.png',
		dragging: null
	}

	componentDidMount(){
	
	}


	render(){

		
		return(

			<div>

				<h1> Graphics </h1>
				<div style={{
					border:"1px solid red",
					width:"200px",
					height: "200px"

				}}> 
				</div>
				<MusicNote graphicAudioPosition={this.props.graphicAudioPosition}/>
			</div>
		)
	}
}