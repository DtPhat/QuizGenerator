import React from "react";
import Quiz from "./Quiz.jsx"
import { nanoid } from "nanoid"
export default function QuizList(props) {
    const [correctAnswerCounter, setcorrectAnswerCounter] = React.useState(-1)
    const [selectedAnswers, setSelectedAnswers] = React.useState(genDefaultAnsersArr())

    function genDefaultAnsersArr() {
        const defaultAnswersArr = new Array(props.quizList.length)
        defaultAnswersArr.fill(-1)
        return defaultAnswersArr
    }

    function handleAnswerSelection(selectedPos, answerIndex) {
        const newArray = selectedAnswers.slice()
        selectedAnswers[answerIndex] !== selectedPos ? newArray.splice(answerIndex, 1, selectedPos) : newArray.splice(answerIndex, 1, -1)
        setSelectedAnswers(newArray)
    }   


    const quizElement = props.quizList.map((quizItem, index) => {
        return (<Quiz
            key={nanoid()}
            showResult={correctAnswerCounter >= 0}
            quizPos={index}
            question={quizItem.question}
            answerList={quizItem.answerList}
            selectedPos={selectedAnswers[index]}
            handleAnswerSelection={handleAnswerSelection}
            correctPos={quizItem.correctPos}
        />)
    })


    function handleSubmission() {
        const countingArr = selectedAnswers.filter((answer, i) => answer === props.quizList[i].correctPos)
        setcorrectAnswerCounter(countingArr.length)
    }


    function handleQuizData() {
        props.setQuizAgain(prevState => !prevState)
        props.setLoading(true)
        setcorrectAnswerCounter(-1);
        setSelectedAnswers(genDefaultAnsersArr())
    }
    return (
        <div className="quiz-list">
            {quizElement}
            {correctAnswerCounter >= 0 ?
                <div>
                    <span className="result-text">You scored {correctAnswerCounter} / {props.quizList.length} correct answer{correctAnswerCounter > 1 ? "s" : ""}. </span>
                    <button className="playAgain-button" onClick={handleQuizData}>Play Again</button>
                </div>
                : <div>
                    <button className="checkAnswer-button" onClick={handleSubmission}>Check answer</button>
                </div>
            }
        </div>
    )
}


