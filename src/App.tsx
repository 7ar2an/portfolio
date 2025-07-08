
import MainTitle from "./assets/MainTitle/MainTitle";
import ProgressBar from "./assets/ProgressBar/ProgressBar";

import "./App.css"
import MainDivision from "./assets/ProjetINF/MainDivision";
import { useRef, useState } from "react";

//import { faPowerOff } from '@fortawesome/free-solid-svg-icons'
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



function App() {

  // Mode Attente/Pret
  const [ready, setGeneralState] = useState(false);
  
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hasClicked, setHasClicked] = useState(false);
  const [on, setOn] = useState(false);

  const handleChange = () => {
    // si c'est déjà à true, on n'essaie plus de basculer
    if (on) return;
    setOn(true);
  };

  const handlePlayPause = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleFunctions = () => {
    if (on) return;
    setHasClicked(true)
    handleChange();
    handlePlayPause();
  }
  
  return (
    <div className="mainContainer">
      
      <div className="video-wrapper">
        <video ref={videoRef} className="video-background" autoPlay  muted>
          <source src="/bg.mp4" type="video/mp4" />
          Votre navigateur ne supporte pas les vidéos HTML5.
        </video>
        
        {/* <div className="button">
        <input type="checkbox" id="checkbox1" checked={on} onChange={handleFunctions} style={{ display: 'none' }} />
        
          <FontAwesomeIcon icon={faPowerOff} onClick={handleFunctions} className={`btnStart${hasClicked ? ' clicked' : ''}`} />
        
        </div>
        */}
      </div>

      <MainTitle />
      
      {ready && 
        (<div>
          
          <ProgressBar />
          <MainDivision />
        </div>)
      }
      
    </div>
  );
}

export default App
