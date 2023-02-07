import React from "react"

export default function Quiz(props) {

    const answersElement = props.showResult ?
        props.answerList.map((answer, currentPos) =>
            <div
                key={answer}
                className={`answer result-answer 
                ${currentPos === props.correctPos ? "correct-answer" : ""}
                ${props.selectedPos === -1 && currentPos === props.correctPos ? "wrong-answer" : ""}  
                ${currentPos === props.selectedPos && currentPos !== props.correctPos ? "wrong-answer" : ""}`}>
                {answer}
            </div>
        ) :
        props.answerList.map((answer, currentPos) =>
            <div
                key={answer}
                className={`answer 
            ${currentPos === props.selectedPos ? "selected-answer" : ""}`}
                onClick={() => props.handleAnswerSelection(currentPos, props.quizPos)}>
                {answer}
            </div>
        )


    return (
        <div className="quiz-container">
            <div className="question">{props.quizPos + 1}. {props.question}</div>
            <div className="answer-container">{answersElement}</div>
            <hr />
        </div>
    )
}