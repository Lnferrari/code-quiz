import React from 'react'
import { useHistory } from 'react-router'

const Score = ({score}) =>  {
    const history = useHistory()

    const startAgain = () => {
        history.push('/')
    }

    return (
        <div>
            <h2>You have completed the quiz!</h2>
            <h4>Your score is: {score}</h4>
            <button onClick={startAgain}>Start Again!</button>
        </div>
    )
}

export default Score
