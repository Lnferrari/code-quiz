import React from 'react'

const Question = ({question}) => {

    return (
        <div className='question-container'>
            <h2>{question.question}</h2>
            {question.code && (
                <div className='code'>{question.code}</div>
            )}
            <div className='answers-container'>

            </div>
        </div>
    )
}

export default Question
