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

				<div style={{
					width:"200px",
					height: "200px"

				}}> 
				</div>
				<MusicNote graphicAudioPosition={this.props.graphicAudioPosition}/>
			</div>
		)
	}
}