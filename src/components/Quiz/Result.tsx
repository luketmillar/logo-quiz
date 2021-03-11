import React from 'react'
import styled from 'styled-components'
import Attribution from '../Attribution'

const Container = styled.div`
    position: absolute;
    width: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    display: flex;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 900px) {
        flex-direction: column;
    }
    @media screen and (max-height: 500px) {
        flex-direction: row;
    }
`

const ScoreBlock = styled.div`
    width: 300px;
    height: 300px;
    background-color: #000;
    color: #fff;
    font-size: 120px;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 500px), screen and (max-height: 500px) {
        width: 200px;
        height: 200px;
        font-size: 80px;
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

const Text = styled.div`
    width: 100%;
    font-size: 24px;
    text-transform: uppercase;
    color: #333;
    @media screen and (max-width: 500px), screen and (max-height: 500px) {
        font-size: 18px;
    }
`

const Spacer = styled.div`
    width: 60px;
    height: 40px;
    @media screen and (max-width: 500px), screen and (max-height: 500px) {
        height: 0;
    }
`



const Result = ({ score, total }: { score: number, total: number }) => {
    return <>
        <Attribution />
        <Container>
            <div style={{ marginTop: -40, marginLeft: -40 }} />
            <Logo src={process.env.PUBLIC_URL + `/logo.png`} alt="" />
            <Spacer />
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                <Text style={{ marginBottom: 10, textAlign: 'left' }}>You scored</Text>
                <ScoreBlock>{score}</ScoreBlock>
                <Text style={{ marginTop: 10, textAlign: 'right' }}>out of {total}</Text>
            </div>
        </Container>
    </>
}

export default Result