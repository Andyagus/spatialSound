import './App.css';
import PlayButton from './components/PlayButton'
import Effects from './components/Effects'
import Graphics from './components/Graphics'
import React from 'react'

export default class App extends React.Component{

  state = {
    playing: false,
    song: process.env.PUBLIC_URL + 'thedeli.mp3',
    audioElement: null,
    audioContext: null,
    gainNode: null,
    gainValue: null,
    panner: null,
    pan: 0,
    musicLogoVolume: 0
  }

  componentDidMount(){
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    const audioContext = new AudioContext();
    this.setState({audioContext: audioContext})
    const audioElement = document.querySelector('audio');
    this.setState({audioElement:audioElement})
    const track = audioContext.createMediaElementSource(audioElement);
    track.connect(audioContext.destination);
    const gainNode = audioContext.createGain();
    track.connect(gainNode).connect(audioContext.destination);
    this.setState({gainNode: gainNode})
    const pannerOptions = { pan: this.state.pan };
    const panner = new StereoPannerNode(audioContext);
    track.connect(gainNode).connect(panner).connect(audioContext.destination);
    this.setState({panner: panner})

  }

  playClickHandler = (e) => {
    console.log(e)
    console.log(this.state.gain, "gainnn")
    this.setState({playing: !this.state.playing})
    this.state.audioContext.resume();
    if(this.state.playing === false){
      console.log("playing")
      this.state.audioElement.play()
    }else if(this.state.playing === true){
      console.log("notplaying")
      this.state.audioElement.pause()
    }
  }

  effectHandler = (e) => {
    this.setState({gainValue: e},
    console.log(this.state.gainValue),
    this.state.gainNode.gain.value = this.state.gainValue
    )
  }

  panHandler = (e) => {
    this.setState({pan: e})
    console.log(this.state.pan)

    this.state.panner.pan.value = this.state.pan
  }

  graphicAudioPosition = (elementY) => {
      console.log(elementY)
      this.setState({gainValue: elementY/100},
      console.log(this.state.gainValue),
      this.state.gainNode.gain.value = this.state.gainValue 
    )
  }

  render(){
    return(
      <div> 
      <h1> Tone Handler </h1>
      <audio src={this.state.song}></audio>
      <PlayButton playClickHandler={this.playClickHandler} />
      <Effects effectHandler={this.effectHandler} panHandler={this.panHandler} />
      <Graphics graphicAudioPosition={this.graphicAudioPosition}/>
      </div>
    )
  }
  
}

