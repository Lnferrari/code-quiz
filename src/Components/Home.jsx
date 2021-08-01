import React from 'react'
import { useHistory } from 'react-router'
import {FaArrowRight} from 'react-icons/fa'

const Home = () => {
    const history = useHistory()

    return (
        <div className='home'>
            <p>This is a quiz about HTML, CSS and JavaSCript, that can be used to repeat all the basics that are needed in everyday's life of a web developer.</p>
            <p>Find out if you know all the details!</p>
            <button className='start' onClick={()=> history.push('/quiz')}>
                <span>Let's have fun!</span>
                <FaArrowRight />
            </button>
        </div>
    )
}

export default Home
