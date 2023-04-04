import React, { useReducer } from "react";
import { formReducer, INITIAL_FORM_STATE, ActionKind } from "./formReducer";
export default function Home({ setFormData }) {
    const [state, dispatch] = useReducer(formReducer, INITIAL_FORM_STATE);
    function handleSubmit(event) {
        event.preventDefault()
        setFormData(state)
    }

    function handleTextChange(event) {
        const { name, value } = event.target
        dispatch({ type: ActionKind.changeText, payload: { name: name, value: value } })
    }

    function handleNumberChange(amount) {
        dispatch({ type: ActionKind.changeAmount, payload: { increment: amount } })
    }

    const formElement =
        <form onSubmit={handleSubmit} className="from-data">
            <label>Number of Questions:</label>
            <div className="trivia_amount">
                <div className="increment" onClick={() => handleNumberChange(-1)}>-</div>
                <div>{state.trivia_amount}</div>
                <div onClick={() => handleNumberChange(1)} className="increment">+</div>
            </div>
            <br />

            <label htmlFor="trivia_category">Select Category: </label>
            <select onChange={handleTextChange} name="trivia_category" className="form-control" id="form-category">
                <option value="any">Any Category</option>
                <option value="9">General Knowledge</option>
                <option value="10">Entertainment: Books</option>
                <option value="11">Entertainment: Film</option>
                <option value="12">Entertainment: Music</option>
                <option value="13">Entertainment: Musicals &amp; Theatres</option>
                <option value="14">Entertainment: Television</option>
                <option value="15">Entertainment: Video Games</option>
                <option value="16">Entertainment: Board Games</option>
                <option value="17">Science &amp; Nature</option>
                <option value="18">Science: Computers</option>
                <option value="19">Science: Mathematics</option>
                <option value="20">Mythology</option>
                <option value="21">Sports</option>
                <option value="22">Geography</option>
                <option value="23">History</option>
                <option value="24">Politics</option>
                <option value="25">Art</option>
                <option value="26">Celebrities</option>
                <option value="27">Animals</option>
                <option value="28">Vehicles</option>
                <option value="29">Entertainment: Comics</option>
                <option value="30">Science: Gadgets</option>
                <option value="31">Entertainment: Japanese Anime &amp; Manga</option>
                <option value="32">Entertainment: Cartoon &amp; Animations</option>
            </select>

            <br />

            <label htmlFor="trivia_difficulty">Select Difficulty: </label>
            <select onChange={handleTextChange} defaultValue={state.trivia_difficulty} name="trivia_difficulty" className="form-control">
                <option value="any">Any Difficulty</option>
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
            </select>

            <br />

            <label htmlFor="trivia_type">Select Type: </label>
            <select onChange={handleTextChange} defaultValue={state.trivia_type} name="trivia_type" className="form-control">&gt;
                <option value="any">Any Type</option>
                <option value="multiple">Multiple Choice</option>
                <option value="boolean">True / False</option>
            </select>
            <br />
            <button className="start-button">Start quiz</button>
        </form>

    return (
        <div className="home">
            <h1 className="home-title"><span>Quiz</span>Generator</h1>
            <p className="home-description">Test your trivia knowledge with questions from up to 25 categories</p>
            {formElement}
            <img src={process.env.PUBLIC_URL + "/images/blue-creep.jpg"} alt="" className="info-avatar"></img>
            <div className="decoration">
                <img src={process.env.PUBLIC_URL + "/images/blob-blue.png"} alt="" className="blob-blue"></img>
                <img src={process.env.PUBLIC_URL + "/images/blob-yellow.png"} alt="" className="blob-yellow"></img>
            </div>
        </div>

    )
}