
import './App.css';
import PlayClick from './PlayClick'
import React from 'react'


export default class App extends React.Component{
  
  state = {
    song: process.env.PUBLIC_URL + 'thedeli.mp3',
    audioContext: null,
    audioElement: null,
    playing: false
  }


  componentDidMount(){
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    const audioContext = new AudioContext();
    this.setState({audioContext: audioContext})
    const audioElement = document.querySelector('audio');
    this.setState({audioElement:audioElement})
    const track = audioContext.createMediaElementSource(audioElement);
    track.connect(audioContext.destination);    
  }

  playClickHandler = (e) => {
    this.setState({playing: e})
    this.state.audioContext.resume();
    if(this.state.playing === false){
      console.log("playing")
      this.state.audioElement.play()
    }else if(this.state.playing === true){
      console.log("notplaying")
      this.state.audioElement.pause()
    }

  }

  render(){
    console.log(this.state)
    return(
      <div> 
        <h1> Hello </h1> 
        <audio src={this.state.song}></audio>
        <PlayClick playClickHandler={this.playClickHandler}/>
      </div>

    )
  }
}