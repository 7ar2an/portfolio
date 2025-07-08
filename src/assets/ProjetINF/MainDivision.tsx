import { useEffect, useState } from 'react';
import "./MainDivision.css"


function MainDivistion() {
    const mots_arinc429 = ['(85D3029A)', '(  3C90B0)', '(811C6268)',  '(840834C8)',   '(E68B4BC9)', '(8001ABAA)', '(811C9E68)', '(840834C8)', '(668D91C9)', '(800449AA)', '(811CDA68)', '(840834C8)', '(668F14C9)', '(   66EAA)', '( 11D1668)', '(840834C8)', '(66915AC9)', '(800893AA)', '( 11D5268)', '( 408F5C8)', '(E6939FC9)', '(   B50AA)', '(811D8E68)', '( 408F5C8)', '(669646C9)', '(811D8E68)', '( 408F5C8)', '(669646C9)', 'Fermeture UDP']
  
  const res_arinc429 = [
    '0x85D3029A    |              | Depart de l aeroport : CYUL',
    '0x3C90B0      |              | Date du vol          : 15/4/16',
    '              |              |',
    '0x811C6268    |              | Heure du vol         : 20h13m22s',
    '0x40834C8     |          oui | Latitude             : 45.449968',
    '0xE68B4BC9    |              | Longitude            : -73.766500',
    '0x8001ABAA    |              | Altitude             : 427.0',
    '              |              |',
    '0x811C9E68    |              | Heure du vol         : 20h14m22s',
    '0x840834C8    |              | Latitude             : 45.449968',
    '0x668D91C9    |              | Longitude            : -73.866604',
    '0x800449AA    |              | Altitude             : 1097.0',
    '              |              |',
    '0x811CDA68    |          oui | Heure du vol         : 20h15m22s',
    '0x840834C8    |              | Latitude             : 45.449968',
    '0x668F14C9    |              | Longitude            : -73.933168',
    '0x66EAA       |              | Altitude             : 1646.0',
    '              |              |',
    
    '0x811D8E68    |              | Heure du vol         : 20h18m22s',
    '0x408F5C8     |              | Latitude             : 45.483164',
    '0x669646C9    |              | Longitude            : -74.249992',
    '0xC62AA       |              | Altitude             : 3170.0',
    '0x81C5CAAD    |              | Arrive a l aeroport  : KORD',
    
    ];

    const [on, setOn] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

    const handleChange = () => {
        // si c'est déjà à true, on n'essaie plus de basculer
        if (on) return;
        setOn(true);
    };

  useEffect(() => {
  // only start the interval when the box is checked
  if (!on) return;

  const interval = setInterval(() => {
    setCurrentIndex(prev => {
      if (prev < mots_arinc429.length - 1) {
        return prev + 1;
      } else {
        clearInterval(interval);
        return prev;
      }
    });
  }, 200);

  // cleanup whenever `on` flips back to false (or on unmount)
  return () => clearInterval(interval);
}, [on, mots_arinc429]);

  return (
    <>
       <div className='INF_Division'>
            <div className='INF_Description'>
                J’ai conçu et implémenté une application console en C capable de recevoir, décoder et afficher des trames ARINC 429, le protocole de communication standard de l’aéronautique. Deux terminaux interviennent : l’un, fourni par l’enseignant, émet des données sur un port UDP ; l’autre, que j’ai développé, en assure la réception et le traitement.
                <br />
                <br />
                Ce projet m’a permis de mettre en pratique les opérations bit-à-bit, les décalages et l’utilisation de masques pour extraire, positionner et contrôler les bits d’un mot binaire encodé au format ARINC 429 (labels, données BCD/BNR, parité), tout en préservant l’intégrité et le formatage des valeurs.
                <br />
                <br />
                Voici une simulation qui montre le fonctionnement de l'application en cours d'execution.                     
            </div>

            <div className='INF_main'>
                <div className='LeftCol'>

                    <div className="FirstTerminal">
                        <div className="terminal-header">
                        <div className="terminal-tab">
                            <span>Transmetteur UDP</span>
                            <button className="terminal-tab-close">×</button>
                        </div>
                        <button className="terminal-new-tab">+</button>
                        <div className="window-controls">
                            <button className="window-btn">−</button>
                            <button className="window-btn">⧉</button>
                            <button className="window-btn close">×</button>
                        </div>
                        
                        </div>

                        <div className="terminal-content">

                            <div className="hexa"></div>
                            <div className="corruption"></div>
                            <div className="infos"></div>

                            {mots_arinc429.slice(0, currentIndex).map((mot, index) => (
                            
                            <div key={index} className="log-line">
                                Transmission UDP : {mot}
                            </div>
                            ))}
                            <div className="cursor">_</div>

                        </div>
                    </div>
                    <div className='FirstTerminalDescription'>
                        En premier, le simulateur fourni par le professeur qui génère en temps réel des données ARINC 429.
                        <br />
                        <br />
                        Et juste a côté, mon application qui capte les données, les interprète et en présente le contenu sous forme visuellement intuitive.
                    </div>
                    

                </div>

                <div className='MiddleCol'>
                    <input
                    type="checkbox"
                    id="checkbox"
                    checked={on}
                    onChange={handleChange}
                    style={{ display: 'none' }}
                    />

                    <label className="switch" htmlFor ="checkbox">
                        Start
                    </label>
                </div>
                
                <div className='RightCol'>
                    <div className="SecondTerminal">
                        <div className="terminal-header">
                        <div className="terminal-tab">
                            <span>Recepteur UDP</span>
                            <button className="terminal-tab-close">×</button>
                        </div>
                        <button className="terminal-new-tab">+</button>
                        <div className="window-controls">
                            <button className="window-btn">−</button>
                            <button className="window-btn">⧉</button>
                            <button className="window-btn close">×</button>
                        </div>
                        </div>

                        <div className="terminal-content">
                            Mot ARINC-429 | Est Corrompu | Donnee
                            -------------------------------------           

                            {res_arinc429.slice(0, currentIndex).map((mot, index) => (
                            
                            <div key={index} className="log-line" style={{ whiteSpace: 'pre' }}>
                                {mot}
                            </div>
                            ))}
                        <div className="cursor">_</div>
                        </div>

                    </div>


                </div>
            </div>
       </div>
    
    </>
  );
}

export default MainDivistion
