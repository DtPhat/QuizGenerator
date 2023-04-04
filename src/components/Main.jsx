import React from "react";
import QuizListData from "./QuizListData"
export default function Main(props) {
    const [quizAgain, setQuizAgain] = React.useState(false)
    const [quizzes, setQuizzies] = React.useState([]);
    const [loading, setLoading] = React.useState(true)
    const formData = props.formData
    const url = `https://opentdb.com/api.php?amount=${+ formData.trivia_amount
        }${formData.trivia_category ? "&category=" + formData.trivia_category : ""
        }${formData.trivia_difficulty ? "&difficulty=" + formData.trivia_difficulty : ""
        }${formData.trivia_type ? "&type=" + formData.trivia_type : ""}`
    React.useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setQuizzies(data.results)
                setLoading(false)
            })

    }, [quizAgain])

    return loading ?
        <div className="loading">Loading...</div> :
        <div>
            <div className="quiz-info" data-hover={`QUIZ INFORMATION:
                Amount: ${formData.trivia_amount}
                Category: ${formData.trivia_category ? formData.trivia_category : "any category"} 
                Difficulty: ${formData.trivia_difficulty ? formData.trivia_difficulty : "any difficulty"} 
                Type: ${formData.trivia_type ? formData.trivia_type : "any type"}`}
            >?</div>

            <QuizListData
                quizzes={quizzes}
                setQuizAgain={setQuizAgain}
                setLoading={setLoading}
            />
        </div>
}

