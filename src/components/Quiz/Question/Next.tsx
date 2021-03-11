import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
    outline: none;
    border-radius: 3px;
    border: 1px solid #9FE5FF;
    background-color: #ECFAFF;
    padding: 12px 16px;
    cursor: pointer;
    font-size: 1.2rem;
    :hover {
        background-color: #DDF5FF;
    }
    :active {
        background-color: #D6F3FF;
    }
`

const Next = ({ onClick }: { onClick: React.MouseEventHandler }) => {
    return <Button onClick={onClick}>Next</Button>
}

export default Next