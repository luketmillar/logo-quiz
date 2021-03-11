import React from 'react'
import styled from 'styled-components'

const ScoreContainer = styled.div`
    margin-top: 60px;
    margin-left: 30px;
    width: 100px;
    height: 100px;
    background-color: #000;
    transition: background-color 100ms ease;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    font-size: 24px;
`

const Score = ({ correct, total }: { correct: number, total: number }) => {
    const [color, setColor] = React.useState<string>('#000')
    const previousCorrect = React.useRef(correct)
    React.useEffect(() => {
        if (correct > previousCorrect.current) {
            setColor('#A6E1A0')
        } else {
            setColor('#E99191')
        }
        previousCorrect.current = correct
        setTimeout(() => {
            setColor('#000')
        }, 250)
    }, [correct, total])
    return total > 0 ? <ScoreContainer style={{ backgroundColor: color }}>{correct} / {total}</ScoreContainer> : null
}

export default Score