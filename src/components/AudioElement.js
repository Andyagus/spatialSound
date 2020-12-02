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

    // const AudioContext = window.AudioContext || window.webkitAudioContext;
    // const audioContext = new AudioContext();
    // const audioElement = document.querySelector('audio')
    // const track = audioContext.createMediaElementSource(audioElement)
    // track.connect(audioContext.destination)
    // const playButton = document.querySelector('button')