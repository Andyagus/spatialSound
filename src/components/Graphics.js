import React from 'react'
import MusicNote from './MusicNote'

export default class Graphics extends React.Component{
	state = {
		musicNoteImage: process.env.PUBLIC_URL + 'music-note.png',
		dragging: null
	}

	componentDidMount(){
	
	}


	drag = (e) => {
		e.preventDefault()
		console.log(e.nativeEvent.style)
		const newValue = e.nativeEvent.y + 100
		this.setState({dragging: newValue})
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
				<MusicNote drag = {this.drag} />
			</div>
		)
	}
}