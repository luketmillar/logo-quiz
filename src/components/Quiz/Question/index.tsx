import React from 'react'
import styled from 'styled-components'
import { useAnswer } from './useAnswer'
import OptionButton from './Option'
import { Option } from './types'
import Result from './Result'
import Next from './Next'


const Title = styled.h1``

interface IProps {
    name: string
    answer: Option
    onAnswer: (correct: boolean) => void
    next: () => void
}
const Question = ({ name, answer, onAnswer, next }: IProps) => {
    const controller = useAnswer(answer, onAnswer)
    return <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Title>Which is the real {name} logo?</Title>
        <div style={{ marginTop: 30 }}>
            <div style={{ display: 'flex' }}>
                <OptionButton onClick={controller.a} name={name} option={Option.A} selected={controller.selected} answer={answer} />
                <div style={{ width: 20 }} />
                <OptionButton onClick={controller.b} name={name} option={Option.B} selected={controller.selected} answer={answer} />
            </div>
            {controller.answered ? <>
                <Result correct={controller.answered ? controller.correct : undefined} />
                <div style={{ display: 'flex', justifyContent: 'flex-end' }}><Next onClick={next} /></div>
            </> : <div style={{ height: 146 }} />
            }

        </div>
    </div>
}


export { Option }
export default Question