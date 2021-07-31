import React, {useState, useEffect} from 'react'
import questions from './questions'
import StatusBar from './StatusBar';
import Question from './Question';
import Answer from './Answer';
import Score from './Score';

const Quiz = ({history}) => {
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [score, setScore] = useState(0)
    const questionsBank = Object.values(questions)
    const [selectedAnswers, setSelectedAnswers] = useState({
        0: false,
        1: false,
        2: false,
        3: false,
        4: false,
        5: false
    })
    // const history = useHistory()
    
    const checkAnswer = (solution) => {
        console.log('solution', JSON.stringify(solution))
        const answers = []
        for(let key in selectedAnswers){
            if(selectedAnswers[key]){
                answers.push(parseInt(key))
            }
        }
        console.log(answers)
        console.log('solution', JSON.stringify(solution), '\nanswer' ,JSON.stringify(answers));
        return JSON.stringify(solution) === JSON.stringify(answers)
    }

    const selectAnswerHandler = (e) => {
        setSelectedAnswers({...selectedAnswers, [e.target.name]: e.target.checked})
    }
    
    const submitAnswerHandler = (e) => {
        e.preventDefault()
        console.log(selectedAnswers)
        console.log(questionsBank[currentQuestion].solutions)
        if (checkAnswer(questionsBank[currentQuestion].solutions)){
            setScore(score + 1)
        }
        if(currentQuestion === questionsBank.length){
            alert(`Congratulations!\n your score is: ${score}`)
        }
        setCurrentQuestion(currentQuestion+1)
    }

    useEffect(() => {
        setSelectedAnswers({
            0: false,
            1: false,
            2: false,
            3: false,
            4: false,
            5: false,
        })
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
