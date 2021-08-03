import React from 'react'
import { pulse } from 'react-animations'
import styled, { keyframes } from 'styled-components'

const StatusBar = ({current, length, score}) => {

    const Pulse = styled.span`
        animation: 1s ${keyframes`${pulse}`} infinite
    `;

    return (
        <div className='statusBar'>
            <div>Question <div key={current} className='pulse'>{current + 1}</div> / {length}</div>
            <div>Score: <div key={score} className='pulse'>{score}</div></div>
            {/* <span className='changeScore'></span> */}
        </div>
    )
}

export default StatusBar