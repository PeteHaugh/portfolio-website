import { SkipBack } from 'phosphor-react';
import React from 'react'
import { Link } from 'react-router-dom';
import { Synthesizer } from '../components/index';


type Props = {}

const SynthesizerPage = (props: Props) => {
  return (
    <>
      <h1>Synthesizer!</h1>
      <Synthesizer />
      <Link to="/"><SkipBack size={100} /></Link>
    </>
  )
}

export default SynthesizerPage