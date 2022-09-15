import { StyledProjects } from '../../styles';
import { useRef, useState } from 'react';
import { useTransition, animated } from 'react-spring';
import useOnScreen from '../../hooks/useOnScreen'
import styled from 'styled-components';

const StyledProjectsSection = styled.section`
    margin: 0 auto;
    padding: 0 100px;
    display: flex;
    height: auto;
    max-width: 900px;
`;

const Projects = () => {

    const ref: any = useRef();
    const onScreen = useOnScreen(ref, "-300px")

    // const items = onScreen ? [
    //     { x: -100, y: -100, delay: 200 },
    //     { x: 100, y: 0, delay: 400 },
    //     { x: -100, y: 100, delay: 600 },
    // ] : []

    // const transition = useTransition(items, {
    //     from: { x: -100, y: 0, opacity: 0 },
    //     enter: item => async (next) => {
    //         await next({ y: item.y, opacity: 1, delay: item.delay});
    //         await next({ x: item.x});
    //     },
    //     leave: { x: -100, y: 0, opacity: 0 },
    // });

    

  return (
    <div className='app' >
        <h1>Projects</h1>

        <div className='projects' ref={ref}>
            {/* {transition((style, item) => item ? <animated.div style={style} className='item' >number 1</animated.div> : '')} */}

        </div>
    </div>

  )
}

export default Projects