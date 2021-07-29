import styled from 'styled-components'

const Unities = styled.em`
    font-size: 24px;
    color: var(--color-tertiary);
    text-transform: lowercase;
    font-family: var(--CommonFont);
`
const InfoContainer = styled.section`
    width: 100%;
    height: 100%;
    transition: transform ease-out 1s;
    display: grid;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr 1fr 1fr;
    padding: 100px;
    box-sizing: border-box;
    position: relative;
`
const DataTitle = styled.h2`
    font-family: var(--CommonFont);
    margin: auto;
    text-transform: uppercase;
    color: var(--color-tertiary);
    position: relative;
    @media screen and (min-width: 1200px) {
        font-size: 36px;
        letter-spacing: -5%;
        ${(props) => `
            &::before {
                width: 200%;
                position: absolute;
                top: -30px;
                left: -20px;
                content: '${props.title}';
                opacity: var(--opacity);
                font-family: var(--CommonFont);
                font-size: 24px;
                letter-spacing: inherit;
            }
        `}
    }
`

const Image = styled.img`
    width: auto;
    margin: auto;
    max-height: 200px;
    max-width: 250px;
    grid-area: 2 / 3 / 3 / 4;
`

function Infos({ data, image, translate }) {
    return (
        <InfoContainer style={{ transform: `translateY(${translate}%)` }}>
            {data.map((item) =>
                item.resize ? (
                    <DataTitle
                        title={item.title}
                        style={{ gridColumn: '1 / 3' }}
                    >
                        {item.value}
                        {item.isPrice ? <Unities>bells</Unities> : null}
                    </DataTitle>
                ) : (
                    <DataTitle title={item.title}>
                        {item.value}
                        {item.isPrice ? <Unities>bells</Unities> : null}
                    </DataTitle>
                )
            )}
            <Image src={image} />
        </InfoContainer>
    )
}

export default Infos
