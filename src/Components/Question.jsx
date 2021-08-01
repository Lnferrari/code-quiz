import React from 'react'

const Question = ({question}) => {

    const questionCode = (
        <pre className='code'>
            <code>{question.code}</code>
        </pre>
    )

    return (
        <div className='question-container'>
            <h2>{question.question}</h2>
            {
                question.code && questionCode
            }
        </div>
    )
}

export default Question
