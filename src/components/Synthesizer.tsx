// @ts-nocheck
import '../utils/webaudio-controls';
import { useRef, useEffect, useState } from 'react'

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

  return (
    <div className="App">
      <webaudio-knob ref={knob1} id="knob1"></webaudio-knob>
      <webaudio-keyboard ref={kdb1} d="kbd"></webaudio-keyboard>
      <br/>
      {volume}
      <br/>
      {note}
    </div>
  );
}

export default Synthesizer;
