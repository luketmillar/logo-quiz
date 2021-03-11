import React from 'react'
import styled, { css } from 'styled-components'
import { Option } from './types'


const Img = styled.img`
    width: 200px;
    height: 200px;
    border-radius: 10px;
    object-fit: contain;
    @media screen and (max-width: 500px), screen and (max-height: 500px) {
        width: 150px;
        height: 150px;
    }
`
const OptionImg = ({ filename }: { filename: string }) => <Img src={process.env.PUBLIC_URL + `/logos/${filename}`} alt="" />

const correctCss = css`
    border: 1px solid #A6E1A0;
    background-color: #EEFFEC;
    :hover {
        border: 1px solid #A6E1A0;
        background-color: #EEFFEC;
    }
`
const incorrectCss = css`
    border: 1px solid #E99191;
    background-color: #FFECEC;
    :hover {
        border: 1px solid #E99191;
        background-color: #FFECEC;
    }
`
const Button = styled.div<{ correct: boolean | undefined }>`
    user-select: none;
    display: inline-block;
    padding: 40px;
    border: 1px solid transparent;
    border-radius: 10px;
    :hover {
        border: 1px solid #9FE5FF;
        background-color: #ECFAFF;
    }

    @media screen and (max-width: 500px), screen and (max-height: 500px) {
        padding: 20px;
    }

    ${props => props.correct !== undefined && (props.correct ? correctCss : incorrectCss)}
`

interface IProps {
    name: string
    option: Option
    selected: Option | undefined
    answer: Option
    onClick?: React.MouseEventHandler
}
const OptionButton = ({ name, option, selected, answer, onClick }: IProps) => {
    const isSelected = option === selected
    const isCorrect = selected === undefined ? undefined : answer === option
    return <Button correct={isSelected ? isCorrect : undefined} onClick={onClick}><OptionImg filename={`${name} - ${option}.png`} /></Button>
}

export default OptionButton