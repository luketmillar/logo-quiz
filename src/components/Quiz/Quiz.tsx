import React from 'react'
import Attribution from '../Attribution'
import ProgressBar from './Progress'
import Question from './Question'
import questions from './Questions'

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
        <Attribution />
        <ProgressBar index={scorer.total} total={10} score={scorer.score} />
        <div style={{ height: 40 }} />
        <Question key={index} name={question.name} answer={question.answer} onAnswer={scorer.set} next={nextQuestion} />
    </>
}



export default Quiz