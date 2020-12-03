import React from 'react'
import ReactDOM from 'react-dom'

export default class MusicNote extends React.Component{

	state = {
		draggedElementY: 100,
		draggedElementX: 100
		}
	render(){
		console.log(this.props)
	return(
		<div>
			<img style ={{
				  position: "absolute",
				  top: this.state.draggedElementY + 'px',
				  left: this.state.draggedElementX + 'px',
					border: "3px solid #73AD21"

			}}src = {process.env.PUBLIC_URL + 'music-note.png'} draggable = "true" 
				onDragOver = {(e) => {

					e.stopPropagation();
					e.preventDefault();
					
					const upYAxis = e.pageY 
					const rightXAxis = e.pageX
					this.setState({draggedElementX:rightXAxis - 100})
					this.setState({draggedElementY:upYAxis - 100},
					this.props.graphicAudioPosition(this.state.draggedElementY, this.state.draggedElementX))
					console.log(e.pageY)
				}}/>
				
		</div>
		)
	}

}