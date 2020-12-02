import React from 'react'
import ReactDOM from 'react-dom'

export default class MusicNote extends React.Component{

	state = {
		draggedElementY: 100+100,
		draggedElementX: 100+100
		}
	render(){
		console.log(this.props)
	return(
		<div>
			<img style ={{
				  position: "absolute",
				  top: this.state.draggedElementY,
				  // left: this.state.draggedElementX,
					border: "3px solid #73AD21"

			}}src = {process.env.PUBLIC_URL + 'music-note.png'} draggable = "true" 
				onDragOver = {(e) => {
					e.stopPropagation();
					e.preventDefault();
					this.setState({draggedElementX:e.pageX})
					this.setState({draggedElementY:e.pageY},
					this.props.graphicAudioPosition(this.state.draggedElementY))
				}} onDrag = {(e) => {
					console.log("drag smag")
				}}/>
				
		</div>
		)
	}

}