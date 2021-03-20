import React from 'react'
import styled from 'styled-components'
import Attribution from '../Attribution'
import Subscribe from './Subscribe'

const Container = styled.div`
    minHeight: 100%;
    position: relative;
    top: 20%;
    @media screen and (max-width: 900px) {
        top: 50px;
    }
    @media screen and (max-height: 400px) {
        top: 10px;
    }
`
const ResultsContainer = styled.div`
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
    width: 250px;
    height: 250px;
    background-color: #000;
    color: #fff;
    font-size: 120px;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 500px), screen and (max-height: 500px) {
        width: 150px;
        height: 150px;
        font-size: 80px;
    }
`

const Logo = styled.img`
    width: 400px;
    object-fit: contain;
    @media screen and (max-width: 500px), screen and (max-height: 500px) {
        width: 250px;
        height: 250px;
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
        <Attribution position="top" />
        <Container>
            <ResultsContainer>
                <div style={{ marginTop: -40, marginLeft: -40 }} />
                <Logo src={process.env.PUBLIC_URL + `/logo.png`} alt="" />
                <Spacer />
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                    <Text style={{ marginBottom: 10, textAlign: 'left' }}>You scored</Text>
                    <ScoreBlock>{score}</ScoreBlock>
                    <Text style={{ marginTop: 10, textAlign: 'right' }}>out of {total}</Text>
                </div>
            </ResultsContainer>
            <Subscribe />
            <div style={{ height: 50 }} />
        </Container>
    </>
}

export default Result