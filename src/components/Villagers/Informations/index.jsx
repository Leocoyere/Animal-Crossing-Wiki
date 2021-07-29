import styled from 'styled-components'

const DataContainer = styled.article`
    @media screen and (min-width: 1200px) {
        display: flex;
        justify-content: space-around;
        align-items: center;
        position: relative;
        transition: transform ease-out 1s;
    }
`

const InfoContainer = styled.article`
    @media screen and (min-width: 1200px) {
        height: 70%;
        width: 50%;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr 0.5fr;
        grid-gap: 100px;
    }
`

const DataTitle = styled.h2`
    @media screen and (min-width: 1200px) {
        font-family: var(--CommonFont);
        text-transform: uppercase;
        color: inherit;
        position: relative;
        font-size: 48px;
        letter-spacing: -5%;
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

const QuoteContainer = styled.div`
    @media screen and (min-width: 1200px) {
        font-size: 24px;
        letter-spacing: -5%;
        grid-area: 3 / 1 / 4 / 3;
        font-family: var(--CommonFont);
        position: relative;
        color: inherit;
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
        }`}
    }
`

function Infos({ icons, data }) {
    return (
        <DataContainer style={{ transform: `translateY(${data.translate}%)` }}>
            <img
                src={icons.villager}
                alt={`${data.name} from Animal Crossing New Horizon`}
            />
            <InfoContainer>
                <DataTitle title={'species'}>{data.villager.species}</DataTitle>
                <DataTitle title={'personality'}>
                    {data.villager.personality}
                </DataTitle>
                <DataTitle title={'hobby'}>{data.villager.hobby}</DataTitle>
                <DataTitle title={'phrase'}>
                    {data.villager.catchphrase}
                </DataTitle>
                <QuoteContainer title={'quote'}>
                    {data.villager.quote}
                </QuoteContainer>
            </InfoContainer>
        </DataContainer>
    )
}

export default Infos
