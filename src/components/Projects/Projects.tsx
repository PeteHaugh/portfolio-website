import './Projects.scss'
import { useRef, useState } from 'react';
import { useTransition, animated } from 'react-spring';
import useOnScreen from '../../hooks/useOnScreen'

const Projects = () => {

    const ref: any = useRef();
    const onScreen = useOnScreen(ref, "-300px")
    const transition = useTransition(onScreen, {
        from: { x: -100, y: 800, opacity: 0 },
        enter: { x: 0, y: 0, opacity: 1},
        leave: { x: -100, y: 800, opacity: 0 },
    });

    

  return (
    <div className='app' >
        <h1>Projects</h1>

        <div className='projects' ref={ref}>
            {transition((style, item) => item ? <animated.div style={style} className='item' /> : '')}
        </div>
    </div>

  )
}

export default Projects