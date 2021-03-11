import React from 'react'
import styled from 'styled-components'

const Background = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    height: 30px;
    background-color: #EDEDED;
`

const Progress = styled.div<{ progress: number }>`
    position: absolute;
    left: 0;
    top: 0;
    height: 30px;
    width: ${props => props.progress}%;
    background-color: #BC00B4;
    transition: width 200ms ease;
`

const ProgressBar = ({ index, total }: { index: number, total: number }) => {
    return <>
        <Background />
        <Progress progress={100 * index / total} />
    </>
}

export default ProgressBar