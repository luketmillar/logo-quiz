import React from 'react'
import styled from 'styled-components'
import Quiz from './Quiz'
import Result from './Result'
import Start from './Start'

const Page = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
`

enum State {
    Start,
    Play,
    End
}

const QuizController = () => {
    const [state, setState] = React.useState<State>(State.Play)
    const [score, setScore] = React.useState<{ score: number, total: number }>()

    const handleDone = (score: number, total: number) => {
        setScore({ score, total })
        setState(State.End)
    }
    switch (state) {
        case State.Start:
            return <Page><Start onStart={() => setState(State.Play)} /></Page>
        case State.Play:
            return <Page><Quiz done={handleDone} /></Page>
        case State.End:
            return <Page><Result score={score!.score} total={score!.total} /></Page>
    }
}



export default QuizController