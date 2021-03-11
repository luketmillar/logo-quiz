import React from 'react'
import styled from 'styled-components'

const ScoreContainer = styled.div`
    width: 100px;
    height: 100px;
    border-radius: 50px;
    background-color: #000;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    font-size: 24px;
`

const Score = ({ correct, total }: { correct: number, total: number }) => {
    return total > 0 ? <ScoreContainer>{correct} / {total}</ScoreContainer> : null
}

export default Score