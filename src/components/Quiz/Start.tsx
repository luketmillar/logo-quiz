import React from 'react'
import styled from 'styled-components'
import Attribution from '../Attribution'
import Button from '../Button'

const Container = styled.div`
    position: absolute;
    width: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    margin-left: -30px;
    text-align: right;
    @media screen and (max-width: 900px) {
        margin-left: 0px;
        flex-direction: column;
        text-align: left;
    }
    @media screen and (max-height: 500px) {
        margin-left: -30px;
        flex-direction: row;
        text-align: right;
    }
`

const Logo = styled.img`
    width: 500px;
    object-fit: contain;
    @media screen and (max-width: 500px), screen and (max-height: 500px) {
        width: 300px;
        height: 300px;
    }
`

const MessageContainer = styled.div`
    display: flex;
    flex-direction: column;
`

const Message = styled.div`
    font-size: 24px;
    @media screen and (max-width: 500px), screen and (max-height: 500px) {
        font-size: 20px;
    }
`

const Start = ({ onStart }: { onStart: () => void }) => {
    return <>
        <Attribution />
        <Container>
            <Logo src={process.env.PUBLIC_URL + `/logo.png`} alt="" />
            <div style={{ height: 20 }} />
            <MessageContainer>
                <Message style={{ maxWidth: 300 }}>See how well you know your tech company logos</Message>
                <div style={{ height: 20 }} />
                <div style={{ textAlign: 'right' }}><Button onClick={onStart}>Let's go</Button></div>
            </MessageContainer>
        </Container>
    </>
}

export default Start