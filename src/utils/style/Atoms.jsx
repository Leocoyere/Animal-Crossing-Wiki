import styled, { keyframes } from 'styled-components'

export const ErrorIcon = styled.span`
    font-family: var(--CommonFont);
    font-size: 24px;
    position: absolute;
    top: calc(50% - 12px);
    width: 100%;
    text-align: center;
    color: #fff;
`

export const ErrorMessage = styled.span`
    position: relative;
    grid-area: 1 / 1 / 2 / 6;
    font-family: var(--CommonFont);
    font-size: 108px;
    margin: 50px 0;
    text-align: center;
    opacity: var(--opacity);
    color: var(--color-tertiary);
    &::after {
        width: 100%;
        content: 'NOT FOUND';
        text-align: center;
        position: absolute;
        bottom: -18px;
        letter-spacing: -2px;
        left: 0;
        font-size: 36px;
    }
`

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

export const Loader = styled.div`
    position: absolute;
    top: calc(50vh - 56px);
    opacity: var(--opacity);
    left: calc(50% - 56px);
    padding: 50px;
    border: 6px solid var(--color-primary);
    border-bottom-color: transparent;
    border-radius: 100%;
    animation: ${rotate} 1s infinite linear;
    height: 0;
    width: 0;
`

export const PageContainer = styled.main`
    position: relative;
    width: 100%;
    padding: 0 100px;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    ${(props) => `background-color: ${props.color};`}
`

export const ListContainer = styled.section`
    display: grid;
    width: 100%;
    position: relative;
    margin: 50px 0;
    grid-gap: 5px;
    @media screen and (min-width: 1200px) {
        grid-template-columns: repeat(5, 1fr);
    }
    @media screen and (min-width: 768px) and (max-width: 1199px) {
        grid-template-columns: repeat(3, 1fr);
    }
    @media screen and (max-width: 767px) {
        grid-template-columns: repeat(2, 1fr);
    }
`

export const FilterButton = styled.button`
    padding: 5px 20px;
    margin: 2px;
    border-radius: 5px;
    font-size: 20px;
    font-family: var(--CommonFont);
    ${(props) =>
        props.isCurrentFilter
            ? `color: ${props.secondaryColor}; background-color: ${props.primaryColor}; border: none;`
            : props.isBack
            ? `color: ${props.primaryColor}; background-color: ${props.secondaryColor}; border: ${props.primaryColor} 1px solid; &:hover { background-color: ${props.primaryColor}; color: ${props.secondaryColor}; }`
            : `color: ${props.secondaryColor}; background-color: ${props.primaryColor}; border: none; opacity: var(--opacity); &:hover { opacity: 100%; }`}
`

export const MainContainer = styled.section`
    @media screen and (min-width: 1200px) {
        width: 100%;
        ${(props) =>
            `background-color: #${props.background}; color: #${props.text};`}
        height: 100vh;
        overflow: hidden;
    }
    & > article {
        width: 100%;
        height: 100%;
        padding: 50px;
        box-sizing: border-box;
    }
`
export const IconContainer = styled.img``

export const DataTitle = styled.h2`
    @media screen and (min-width: 1200px) {
        font-size: 48px;
        letter-spacing: -5%;
        font-family: var(--CommonFont);
        text-transform: uppercase;
        color: inherit;
        position: relative;
        ${(props) => `
            &::before {
                position: absolute;
                top: -30px;
                left: -20px;
                content: '${props.title}';
                opacity: 50%;
                font-family: var(--CommonFont);
                font-size: 24px;
                letter-spacing: -5%;
                text-transform: lowercase;

            }
        `}
    }
`

export const Name = styled.h1`
    max-width: 80%;
    text-align: center;
    color: #fff;
    font-family: var(--TitleFont);
    font-size: 96px;
    transition: filter ease-out 1s;
`

export const NameContainer = styled.aside`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`
