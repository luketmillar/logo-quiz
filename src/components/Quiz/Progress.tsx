import React from 'react'
import styled from 'styled-components'

const Background = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    height: 30px;
    background-color: #EDEDED;
`

const Progress = styled.div<{ progress: number }>`
    position: fixed;
    left: 0;
    top: 0;
    height: 30px;
    width: ${props => props.progress}%;
    background-color: #BC00B4;
    transition: width 200ms ease;
`

const ProgressBar = ({ index, total, score }: { index: number, total: number, score: number }) => {
    return <>
        <Background />
        <Progress progress={100 * index / total}>
            {index > 0 && <div style={{ height: 26, marginLeft: 10, fontWeight: 600, whiteSpace: 'nowrap', display: 'flex', alignItems: 'center', color: '#fff' }}>{score} / {index}</div>}
        </Progress>
    </>
}

export default ProgressBar