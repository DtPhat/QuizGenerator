import React from "react";
import QuizList from "./QuizList"
import he from "he"
export default function (props) {                
    const quizArray = []
    props.quizzes.forEach(quiz => {
        const radomPos = quiz.type === "multiple" ? Math.floor(Math.random() * (quiz.incorrect_answers.length + 1)) : Math.floor(Math.random() * 2)
        const question = he.decode(quiz.question)
        const answers = quiz.incorrect_answers.map(answer => he.decode(answer))
        answers.splice(radomPos, 0, he.decode(quiz.correct_answer))

        quizArray.push({
            correctPos: radomPos,
            question: question,
            answerList: answers
        })
    })


    return (
        <QuizList
            quizList={quizArray}
            setQuizAgain={props.setQuizAgain}
            setLoading={props.setLoading}
        />
    )
}
