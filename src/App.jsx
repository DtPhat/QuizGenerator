import React from "react"
import './style.css'
import Home from "./components/Home"
import Main from "./components/Main"

export default function App() {
    const [formData, setFormData] = React.useState(null)
    const startQuiz = formData !== null
    return (
        <main>
            {startQuiz ?
                <Main formData={formData} /> :
                <Home setFormData={setFormData} />}
            <h1 className="home-title logo" onClick={() => setFormData(null)}>
                <span>Quiz</span>Generator
            </h1>
        </main >
    )
}




