import React from 'react'

const StatusBar = ({current, length, score}) => {

    return (
        <div className='statusBar'>
            <div>Question <div key={current} className='pulse'>{current + 1}</div> / {length}</div>
            <div>Score: <div key={score} className='pulse'>{score}</div></div>
            {/* <span className='changeScore'></span> */}
        </div>
    )
}

export default StatusBar