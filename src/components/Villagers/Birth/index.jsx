import styled from 'styled-components'

const DataContainer = styled.article`
    @media screen and (min-width: 1200px) {
        flex-direction: row;
        display: flex;
        justify-content: space-around;
        align-items: center;
        position: relative;
        transition: transform ease-out 1s;
    }
`

const BirthDate = styled.h2`
    font-family: var(--CommonFont);
    text-transform: uppercase;
    color: inherit;
    position: relative;
    @media screen and (min-width: 1200px) {
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
            &::after {
                content: '${props.data ? props.data : ''}';
                position: absolute;
                bottom: -20px;
                font-size: 24px;
                width: 100%;
                text-align: left;
                text-transform: uppercase;
                left: 0;
            }
        `}
    }
`
function Birth({ icons, data }) {
    return (
        <DataContainer style={{ transform: `translateY(${data.translate}%)` }}>
            <img
                src={icons.villager}
                alt={`${data.name} from Animal Crossing New Horizon`}
            />
            <div>
                <BirthDate title={'birthday'} data={data.zodiac}>
                    {data.birth}
                </BirthDate>
            </div>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 100 125"
                x="0px"
                y="0px"
                style={{
                    width: 300,
                    height: 300,
                    fill: `#${data.color}`,
                }}
            >
                {icons.zodiac}
            </svg>
        </DataContainer>
    )
}

export default Birth
