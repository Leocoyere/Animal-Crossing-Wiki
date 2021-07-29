import { useContext } from 'react'
import { ThemeContext } from '../../../utils/context'
import FiltersList from '../FiltersList'
import styled from 'styled-components'

const Container = styled.aside`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    height: 100vh;
    width: 100%;
`

const Title = styled.input`
    width: 100%;
    font-family: var(--TitleFont);
    margin: 50px 0;
    border: none;
    background-color: transparent;
    display: block;
    color: var(--color-tertiary);
    &::placeholder {
        color: inherit;
        opacity: var(--opacity);
    }
    &:focus {
        outline: none;
    }
    @media screen and (min-width: 1200px) {
        font-size: 72px;
    }
    @media screen and (min-width: 768px) and (max-width: 1199px) {
        font-size: 60px;
    }
    @media screen and (max-width: 767px) {
        font-size: 48px;
    }
`

function SearchContainer({ data, getFilters }) {
    const { currentFilters, setFilters } = useContext(ThemeContext)
    const allFilters = getFilters(data)

    return (
        <Container>
            <Title
                type="text"
                placeholder="search..."
                onChange={(e) =>
                    setFilters({ ...currentFilters, name: e.target.value })
                }
            />
            {<FiltersList allFilters={allFilters} />}
        </Container>
    )
}

export default SearchContainer
