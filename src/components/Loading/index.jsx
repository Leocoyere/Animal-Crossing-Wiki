import TomIcon from '../../assets/img/tom_nook.png'
import TimmyIcon from '../../assets/img/timmy_nook.png'
import TommyIcon from '../../assets/img/tommy_nook.png'
import styled, { keyframes } from 'styled-components'

const jump = keyframes`
    from {
        transform: translateX(0);
    }
    to {
        transform: translateY(-50%);
    }
`
const LoadingContainer = styled.section`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: var(--color-primary);
`

const IconContainer = styled.article`
    width: 50%;
    height: 100px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`

const Icon = styled.img`
    height: 100%;
    animation: ${jump} ease-out 0.5s infinite alternate;
`

const Title = styled.h1`
    font-family: var(--TitleFont);
    color: var(--color-tertiary);
    font-size: 72px;
    opacity: var(--opacity);
`

function LoadingPage() {
    return (
        <LoadingContainer>
            <IconContainer>
                <Icon
                    src={TomIcon}
                    alt="Tom Nook from Animal Crossing New Horizons"
                />
                <Icon
                    style={{ animationDelay: '0.5s' }}
                    src={TimmyIcon}
                    alt="Timmy from Animal Crossing New Horizons"
                />
                <Icon
                    src={TommyIcon}
                    alt="Tommy from Animal Crossing New Horizons"
                />
            </IconContainer>
            <Title>Loading</Title>
        </LoadingContainer>
    )
}

export default LoadingPage
