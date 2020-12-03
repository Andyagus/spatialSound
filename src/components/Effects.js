import React from 'react'

export default class Effects extends React.Component{
	
	state = {
		gainLevel: null,
		panLevel: null
	}	

	render(){
		return(
			<div> 
				<p> Volume </p> 
				<input onChange={(e)=> {
					this.setState({gainLevel: e.target.value},
						this.props.effectHandler(e.target.value)
					)
				}} type="range" min="-1" max="1" value={this.state.gainLevel} step="0.01"/>
				<p> Panner </p>
				
				<input onChange={(e)=> {
					this.setState({pan: e.target.value},
						this.props.panHandler(e.target.value)
					)
				}} type="range"  min="-1" max="1" value={this.state.panLevel} step="0.01"/>
			</div>
		)
	}
}