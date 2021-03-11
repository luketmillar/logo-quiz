import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
    outline: none;
    background-color: #000;
    border: none;
    color: #fff;
    padding: 18px 32px;
    cursor: pointer;
    font-size: 1.2rem;
    :hover {
        background-color: #333;
    }
    :active {
        background-color: #111;
    }
`

const Next = ({ onClick }: { onClick: React.MouseEventHandler }) => {
    return <Button onClick={onClick}>Next</Button>
}

export default Next