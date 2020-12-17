import React from 'react'

export default class AudioElement extends React.Component{
	
		state = {
    	song: process.env.PUBLIC_URL + 'thedeli.mp3',

		}

		componentDidMount(){
			this.passAudioElement()
		}

		passAudioElement = () => {
			var audio = '<audio>  </audio>'
			this.props.accessAudioElement(audio)
		}



		render(){
		// console.log(this.props)
			return(
				<div> 
				</div>
			)
			
		}
}
