import React from 'react'
import ProgressBar from './Progress'
import Question from './Question'
import questions from './Questions'
import Score from './Score'

const useScorer = () => {
    const [score, setScore] = React.useState(0)
    const [total, setTotal] = React.useState(0)
    const set = (correct: boolean) => {
        if (correct) {
            setScore(s => s + 1)
        }
        setTotal(t => t + 1)
    }
    return { score, total, set }
}

const QuizController = () => {
    const [index, setIndex] = React.useState(0)
    const scorer = useScorer()
    const question = questions[index]
    return <div style={{ position: 'absolute', top: 0, left: 0, bottom: 0, right: 0 }}>
        {question ? <><ProgressBar index={scorer.total} total={10} />
            <div style={{ height: 40 }} />
            <div style={{ position: 'absolute', left: 0, top: 0 }}><Score correct={scorer.score} total={scorer.total} /></div>
            <div style={{ position: 'absolute', top: '40%', left: '50%', transform: 'translate(-50%, -40%)' }}>
                <Question key={index} name={question.name} answer={question.answer} onAnswer={scorer.set} next={() => setIndex(v => v + 1)} />
            </div></> : <div>
            You got {scorer.score} out of {scorer.total} right!
                </div>}
    </div>
}

export default QuizController