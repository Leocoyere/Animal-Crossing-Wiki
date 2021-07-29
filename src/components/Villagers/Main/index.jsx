import styled from 'styled-components'

function Main({ data, genderIcon, translate }) {
    return (
        <PrincipalContainer style={{ transform: `translateY(${translate}%)` }}>
            <div style={{ width: 200 }}></div>
            <ImageContainer>
                <VillagerImage
                    src={data.image_url}
                    alt={`${data.name} from Animal Crossing New Horizon`}
                />
            </ImageContainer>
            <SideContainer>
                <IdContainer>{data.name}</IdContainer>
                {genderIcon}
            </SideContainer>
        </PrincipalContainer>
    )
}

export default Main

const PrincipalContainer = styled.article`
    @media screen and (min-width: 1200px) {
        flex-direction: row;
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: relative;
        transition: transform ease-out 1s;
    }
`

const VillagerImage = styled.img`
    height: 50%;
`

const ImageContainer = styled.figure`
    @media screen and (min-width: 1200px) {
        align-items: center;
        height: 100%;
        display: flex;
        justify-content: center;
        overflow: hidden;
    }
`

const SideContainer = styled.aside`
    @media screen and (min-width: 1200px) {
        width: 200px;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    }
`

const IdContainer = styled.span`
    @media screen and (min-width: 1200px) {
        color: inherit;
        text-transform: Uppercase;
        font-family: var(--CommonFont);
        font-size: 24px;
    }
`
