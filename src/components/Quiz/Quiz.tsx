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

interface IProps {
    done: (score: number, total: number) => void
}

const Quiz = ({ done }: IProps) => {
    const [index, setIndex] = React.useState(0)
    const scorer = useScorer()
    const question = questions[index]
    const nextQuestion = () => {
        if (index === questions.length - 1) {
            done(scorer.score, scorer.total)
        }
        setIndex(i => i + 1)
    }
    return <>
        <ProgressBar index={scorer.total} total={10} />
        <div style={{ height: 40 }} />
        <div style={{ position: 'absolute', left: 0, top: 0 }}><Score correct={scorer.score} total={scorer.total} /></div>
        <div style={{ position: 'absolute', top: '40%', left: '50%', transform: 'translate(-50%, -40%)' }}>
            <Question key={index} name={question.name} answer={question.answer} onAnswer={scorer.set} next={nextQuestion} />
        </div>
    </>
}



export default Quiz