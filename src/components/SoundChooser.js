import React from 'react'
import Sounds from './Sounds'
export default class SoundChooser extends React.Component{
	state = {
		visible: false
	}

	render(){
		return(
			<div>
				<button onClick={() => {
					this.setState({visible: !this.state.visible})
				}}> 
					 Add Sounds
				</button>
{/*				{this.state.visible ? <div className="popup-banner"> <h1> Choose Your Sounds </h1></div> : null}
*/}				{this.state.visible ? <Sounds/> : null }
			</div>
		)
	}
}