import React from 'react'

const Answer = ({options, onChange, onSubmit, answers}) => {

    let answer = options.answers.map((opt, i) => (
        <div className="option" key={i}>
            <input type="checkbox" name={i} checked={answers[i]} onChange={(e) => onChange(e)}/>
            <label>{opt.text}</label> 
        </div>
    ))

    return (
        <form onSubmit={(e) => onSubmit(e)} className='options-container'>
            {answer}
            <button type='submit'>Submit</button>
        </form>
    )
}

export default Answer