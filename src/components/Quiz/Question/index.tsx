import React from 'react'
import styled from 'styled-components'
import { useAnswer } from './useAnswer'
import OptionButton from './Option'
import { Option } from './types'
import Next from './Next'


const Title = styled.h1`
    text-align: center;
    @media screen and (max-width: 500px), screen and (max-height: 500px) {
        font-size: 24px;        
    }
`

const Options = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    @media screen and (max-width: 900px) {
        flex-direction: column;
    }
    @media screen and (max-height: 500px) {
        flex-direction: row;
    }
`

interface IProps {
    name: string
    answer: Option
    onAnswer: (correct: boolean) => void
    next: () => void
}
const Question = ({ name, answer, onAnswer, next }: IProps) => {
    const controller = useAnswer(answer, onAnswer)
    return <>
        <div style={{ position: 'absolute', top: '40%', left: '50%', transform: 'translate(-50%, -40%)' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 20 }}>
                <Title>Which is the real {name} logo?</Title>
                <div style={{ marginTop: 10 }}>
                    <Options>
                        <OptionButton onClick={controller.a} name={name} option={Option.A} selected={controller.selected} answer={answer} />
                        <div style={{ width: 20, height: 10 }} />
                        <OptionButton onClick={controller.b} name={name} option={Option.B} selected={controller.selected} answer={answer} />
                    </Options>
                </div>
                <div style={{ marginTop: 20, fontSize: 20, height: 40 }}>{controller.answered ? controller.correct ? 'Correct!' : 'Womp womp' : null}</div>
            </div>
        </div>
        {controller.answered &&
            <div style={{ position: 'fixed', right: 0, bottom: 0 }}>
                <div style={{ display: 'flex', justifyContent: 'flex-end' }}><Next onClick={next} /></div>
            </div>
        }
    </>
}


export { Option }
export default Question