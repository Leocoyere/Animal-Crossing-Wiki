import { ErrorMessage } from '../../utils/style/Atoms'
import styled from 'styled-components'
import React from 'react'
import { Link } from 'react-router-dom'

const Container = styled.section`
    width: 100%;
    height: 100vh;
    background-color: var(--color-primary);
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
`

const ErrorInfo = styled.p`
    width: 40%;
    text-align: center;
    color: var(--color-tertiary);
    opacity: var(--opacity);
    font-size: 24px;
    font-family: var(--CommonFont);
`

const LinkToHome = styled(Link)`
    padding: 10px 20px;
    margin: 2px;
    border-radius: 5px;
    font-size: 20px;
    font-family: var(--CommonFont);
    color: var(--color-primary);
    background-color: var(--color-tertiary);
    border: none;
    opacity: var(--opacity);
    &:hover {
        opacity: 100%;
    }
    text-decoration: none;
`

function Error() {
    return (
        <Container>
            <ErrorMessage>404</ErrorMessage>
            <ErrorInfo>
                The page you were looking for could not be found. It might have
                been removed, renamed, or did not exist in the first place. You
                can try to reload the page.
            </ErrorInfo>
            <LinkToHome to="/">GO BACK HOME</LinkToHome>
        </Container>
    )
}

export default Error
