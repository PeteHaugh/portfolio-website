import './Projects.scss'
import { useState } from 'react';
import { useTransition, animated } from 'react-spring';

const Projects = () => {

    const [isVisible, setIsVisible] = useState(false);
    const transition = useTransition(isVisible, {
        from: { x: -100, y: 800, opacity: 0 },
        enter: { x: 0, y: 0, opacity: 1},
        leave: { x: -100, y: 800, opacity: 0 },
    });

  return (
    <div className='app'>
        <button onClick={() => {
            setIsVisible(v => !v);
            //
        }}>{isVisible ? 'unmount' : 'mounth'}</button>
        <div className='projects'>
            {transition((style, item) => item ? <animated.div style={style} className='item' /> : '')}
        </div>
    </div>

  )
}

export default Projects