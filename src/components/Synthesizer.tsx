// @ts-nocheck
import '../utils/webaudio-controls';
import { useRef, useEffect, useState } from 'react'
import styled from 'styled-components';

const StyledSynthesizer = styled.div`
  min-width: 720px;
  max-width: 900px;
  margin: auto;
`;

const StyledColumnDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  border: 2px black solid;
  flex-direction: row;
  justify-content: center;
`;

const StyledRowDiv = styled.div`
  height: 200px;
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 2px black solid;
  justify-content: center;
`;




const Synthesizer = () => {

  const knob1 = useRef(null)
  const kdb1 = useRef(null)
  const [volume, setVolume] = useState(null)
  const [note, setNote] = useState(null)
  
  const handleChange = (event) => {
    setVolume(event.target.value)
  }

useEffect(() => {
  const knob = knob1.current
  const kdb = kdb1.current
  knob.addEventListener('input', handleChange)
  kdb.addEventListener('change', (event)=>{
    setNote(event.note)
  })
},[])

const GenericSlider = ({ label, belowLabel, ...options }) => {
  return (
    <label className="generic-slider">
      {label && <span className="sidelabel">{label}</span>}
      <div>
        <input type="range" min="0" max="1" step="0.01" {...options} />
        {belowLabel && <span className="sublabel">{belowLabel}</span>}
      </div>
    </label>
  );
};

  return (
    <StyledSynthesizer>
        <StyledRowDiv>
          <StyledColumnDiv>
            <webaudio-knob ref={knob1} id="knob1"></webaudio-knob>
            <br/>
            {volume}
          </StyledColumnDiv>
          <StyledColumnDiv>
            {note}
          </StyledColumnDiv>
          <StyledColumnDiv>
            <GenericSlider label={'test'} belowLabel={'test'}/>
          </StyledColumnDiv>
          
        </StyledRowDiv>

        <StyledRowDiv>
          <webaudio-keyboard height="200" ref={kdb1} d="kbd"></webaudio-keyboard>
        </StyledRowDiv>
    </StyledSynthesizer>
  );
}

export default Synthesizer;
