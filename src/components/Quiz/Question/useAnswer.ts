import React from 'react'
import { Option } from './types'

export const useAnswer = (answer: Option, onAnswer: (correct: boolean) => void) => {
    const [selected, setSelected] = React.useState<Option | undefined>()
    const select = (option: Option) => {
        if (selected !== undefined) {
            return
        }
        onAnswer(option === answer)
        setSelected(option)
    }
    return {
        a: () => select(Option.A),
        b: () => select(Option.B),
        selected,
        answered: selected !== undefined,
        correct: answer === selected
    }
}