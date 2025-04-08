import React, { useState } from 'react';
import './App.css';

// Sample audio clips for drum pads
const audioClips = [
  { key: 'Q', id: 'heater-1', sound: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3', label: 'Heater 1' },
  { key: 'W', id: 'heater-2', sound: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3', label: 'Heater 2' },
  { key: 'E', id: 'heater-3', sound: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3', label: 'Heater 3' },
  { key: 'A', id: 'heater-4', sound: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3', label: 'Heater 4' },
  { key: 'S', id: 'clap', sound: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3', label: 'Clap' },
  { key: 'D', id: 'open-hh', sound: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3', label: 'Open-HH' },
  { key: 'Z', id: 'kick-n-hat', sound: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3', label: 'Kick-n-Hat' },
  { key: 'X', id: 'kick', sound: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3', label: 'Kick' },
  { key: 'C', id: 'closed-hh', sound: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3', label: 'Closed-HH' }
];

function App() {
  const [display, setDisplay] = useState('');

  // Function to handle the button click
  const playSound = (id, label) => {
    const audio = document.getElementById(id);
    audio.play();
    setDisplay(label);
  };

  // Function to handle keyboard press
  const handleKeyPress = (event) => {
    const key = event.key.toUpperCase();
    const drumPad = audioClips.find((clip) => clip.key === key);
    if (drumPad) {
      playSound(drumPad.id, drumPad.label);
    }
  };

  // Use useEffect to add event listener for keyboard press
  React.useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  return (
    <div id="drum-machine">
      <div id="display">{display}</div>
      <div className="drum-pads">
        {audioClips.map((clip) => (
          <div
            key={clip.key}
            className="drum-pad"
            id={clip.key}
            onClick={() => playSound(clip.id, clip.label)}
          >
            <audio className="clip" id={clip.id} src={clip.sound}></audio>
            {clip.key}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
