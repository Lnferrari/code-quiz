import React, {useState, useEffect} from 'react'
import questions from './questions'
import StatusBar from './StatusBar';
import Question from './Question';
import Answer from './Answer';
import Score from './Score';

const initialState = {
    0: false,
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
}

const Quiz = ({history}) => {
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [score, setScore] = useState(0)
    const questionsBank = Object.values(questions)
    const [selectedAnswers, setSelectedAnswers] = useState(initialState)
    
    const checkAnswer = (solution) => {
        const answers = []
        for(let key in selectedAnswers){
            if(selectedAnswers[key]){
                answers.push(parseInt(key))
            }
        }
        return JSON.stringify(solution) === JSON.stringify(answers)
    }

    const selectAnswerHandler = (e) => {
        setSelectedAnswers({...selectedAnswers, [e.target.name]: e.target.checked})
    }
    
    const submitAnswerHandler = (e) => {
        e.preventDefault()
        if (checkAnswer(questionsBank[currentQuestion].solutions)){
            setScore(score + 1)
        }
        setCurrentQuestion(currentQuestion + 1)
    }

    useEffect(() => {
        setSelectedAnswers(initialState)
    }, [currentQuestion])
    
    return (
        <div className='Quiz'>
            {currentQuestion < questionsBank.length ? (
                <>
                    <StatusBar current={currentQuestion} length={questionsBank.length} score={score} />
                    <Question question={questionsBank[currentQuestion]} />
                    <Answer options={questionsBank[currentQuestion]} onChange={selectAnswerHandler} onSubmit={submitAnswerHandler} answers={selectedAnswers} />
                </>
            ) : <Score score={score} history={history} />}
            
        </div>
    )
}

export default Quiz
