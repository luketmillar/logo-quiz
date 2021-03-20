import React from 'react'
import styled from 'styled-components'
import Button from '../Button'

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 60px;
    @media screen and (max-height: 500px) {
        display: none;
    }
`

const Message = styled.h3`
    margin: 0 20px;
    text-align: center;
`

const Form = styled.form`
    display: flex;
    align-items: center;
    @media screen and (max-width: 500px), screen and (max-height: 500px) {
        flex-direction: column;
    }
`

const Submit = styled(Button)`
    @media screen and (max-width: 500px), screen and (max-height: 500px) {
        width: 100%;
    }
`

const encode = (data: any) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&")
}

const Subscribe = () => {
    const [subscribed, setSubscribed] = React.useState(false)
    const emailRef = React.useRef<HTMLInputElement>(null)
    const handleSubmit = (e: React.FormEvent) => {
        e.stopPropagation()
        e.preventDefault()
        if (!emailRef.current?.value) {
            return false
        }
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({
                "form-name": 'subscribe',
                "email": emailRef.current?.value
            })
        }).then(() => setSubscribed(true), () => setSubscribed(true))
        return false
    }
    return <Container>
        {subscribed ? <Message>Thank you for subscribing!</Message> :
            <>
                <Message>Wanna hear about future quizes, games, and projects? Subscribe!</Message>
                <div style={{ height: 20 }} />
                <Form onSubmit={handleSubmit} method="POST" data-netlify="true">
                    <input type="hidden" name="form-name" value="subscribe" />
                    <input ref={emailRef} style={{ height: 58, width: 300, boxSizing: 'border-box', borderRadius: 0, border: '1px solid black', fontSize: 18, padding: '12px 18px' }} type="email" name="email" placeholder="email@address.com" />
                    <Submit type="submit">Subscribe</Submit>
                </Form>
            </>}
    </Container>
}

export default Subscribe