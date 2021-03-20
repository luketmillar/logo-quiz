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
    @media screen and (max-width: 500px), screen and (max-height: 500px) {
        display: none;
    }
`

const Attribution = ({ position = 'bottom' }: { position?: 'top' | 'bottom' }) => {
    return <Att style={{ position: 'fixed', ...(position === 'bottom' ? { bottom: 0 } : { top: 0 }), left: 0 }} href="https://twitter.com/ltm" target="_blank"> by @ltm</Att >
}

export default Attribution