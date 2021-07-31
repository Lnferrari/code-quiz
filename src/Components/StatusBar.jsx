import React from 'react'

const StatusBar = ({current, length, score}) => {
    return (
        <div className='statusBar'>
            <div>Question {current + 1} / {length}</div>
            <div>Score: {score}</div>
        </div>
    )
}

export default StatusBar