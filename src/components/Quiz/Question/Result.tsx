import React from 'react'
import styled from 'styled-components'

const correctMessages = ['Nailed it', 'Yup', 'Got it!', 'You rocked that one', 'Nice job', "I'm super impressed"]
const incorrectMessages = ['Uh... no', 'Sorry, wrong', 'Wrong wrong wrong', 'Nice try (but not that nice)', "Womp womp"]

const getRandom = (messages: string[]) => {
    const index = Math.floor(Math.random() * messages.length)
    return messages[index]
}

const ResultContainer = styled.div`
    text-align: center;
    font-size: 2rem;
`

const Result = ({ correct }: { correct: boolean | undefined }) => {
    const message = React.useMemo(() => {
        if (correct === undefined) {
            return null
        }
        return getRandom(correct ? correctMessages : incorrectMessages)
    }, [correct])
    if (correct === undefined) {
        return <ResultContainer>&nbsp;</ResultContainer>
    }
    return <ResultContainer>{message}</ResultContainer>
}

export default Result