import React from 'react'
import ReactDOM from 'react-dom'

export default class MusicNote extends React.Component{

	state = {
		draggedElementX: 0,
		draggedElementY: 0
		}
	render(){
	return(
		<div>
			<img style ={{
				  position: "absolute",
				  top: this.state.draggedElementX,
				  left: this.state.draggedElementY,
					border: "3px solid #73AD21"

			}}src = {process.env.PUBLIC_URL + 'music-note.png'} draggable = "true" 
				onDragOver = {(e) => {
					e.stopPropagation();
					e.preventDefault();
					this.setState({draggedElementX:e.pageX})
					this.setState({draggedElementY:e.pageY})
				}}
					/>
				
		</div>
		)
	}

}