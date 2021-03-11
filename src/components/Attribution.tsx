import React from 'react'
import styled from 'styled-components'
import { ButtonCss } from './Button'

const Att = styled.a`
    ${ButtonCss}
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    :hover {
        background-color: #BC00B4;
    }
`

const Attribution = () => {
    return <Att style={{ position: 'fixed', bottom: 0, left: 0 }} href="https://twitter.com/ltm" target="_blank"> by @ltm</Att >
}

export default Attribution