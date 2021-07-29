import styled from 'styled-components'

const PatternBackground = styled.article`
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(3, 1fr);
    width: 100%;
    height: 100%;
    transition: transform ease-out 1s;
`
const Icon = styled.img`
    width: 150px;
    margin: auto;
    &:nth-child(1) {
        grid-area: 1 / 1;
    }
    &:nth-child(2) {
        grid-area: 2 / 2;
    }
    &:nth-child(3) {
        grid-area: 3 / 3;
    }
    &:nth-child(4) {
        grid-area: 1 / 3;
    }
    &:nth-child(5) {
        grid-area: 2 / 4;
    }
    &:nth-child(6) {
        grid-area: 3 / 5;
    }
    &:nth-child(7) {
        grid-area: 1 / 5;
    }
    &:nth-child(8) {
        grid-area: 2 / 6;
    }
    &:nth-child(9) {
        grid-area: 3 / 7;
    }
    &:nth-child(10) {
        grid-area: 1 / 7;
    }
    &:nth-child(11) {
        grid-area: 3 / 1;
    }
    &:nth-child(12) {
        grid-area: 1 / 6;
    }
`
function Pattern({ icon, data }) {
    const keysList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

    return (
        <PatternBackground
            style={{ transform: `translateY(${data.translate}%)` }}
        >
            {keysList.map((number) => (
                <Icon
                    key={number}
                    src={icon}
                    alt={`${data.name} from Animal Crossing New Horizons`}
                />
            ))}
        </PatternBackground>
    )
}

export default Pattern
