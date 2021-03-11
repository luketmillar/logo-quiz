import styled, { css } from 'styled-components'

export const ButtonCss = css`
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

const Button = styled.button`
    ${ButtonCss}
`

export default Button