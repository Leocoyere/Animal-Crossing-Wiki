import { FilterButton } from '../../../utils/style/Atoms'
import styled from 'styled-components'
import React, { useContext } from 'react'
import { ThemeContext } from '../../../utils/context'

const Container = styled.article`
    @media screen and (min-width: 1200px) {
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        position: relative;
        margin: 25px 0;
        &::before {
            ${(props) =>
                `content: '${props.content}'; opacity: ${
                    props.state ? '100%' : 'var(--opacity)'
                };`}
            letter-spacing: -5%;
            color: var(--color-tertiary);
            font-family: var(--TitleFont);
            font-size: 24px;
            position: absolute;
            top: -30px;
            left: 0;
        }
    }
`

const FiltersContainer = styled.section`
    @media screen and (min-width: 1200px) {
        display: flex;
        flex-direction: column;
        width: 100%;
        margin: 50px 0;
    }
`

function FiltersList({ allFilters }) {
    const { currentFilters, setFilters } = useContext(ThemeContext)

    function getFilterButton(filterMAJ, number) {
        const filterMIN = filterMAJ.toLowerCase()
        const isCurrentFilter =
            number === 1
                ? filterMIN === currentFilters.first
                    ? true
                    : false
                : number === 2
                ? filterMIN === currentFilters.second
                    ? true
                    : false
                : number === 3
                ? filterMIN === currentFilters.third
                    ? true
                    : false
                : null

        return isCurrentFilter ? (
            <FilterButton
                primaryColor={'#FFF'}
                secondaryColor={currentFilters.color}
                key={filterMIN}
                isCurrentFilter
                onClick={() =>
                    number === 1
                        ? setFilters({ ...currentFilters, first: false })
                        : number === 2
                        ? setFilters({ ...currentFilters, second: false })
                        : number === 3
                        ? setFilters({ ...currentFilters, third: false })
                        : null
                }
            >
                {filterMIN}
            </FilterButton>
        ) : (
            <FilterButton
                primaryColor={'#FFF'}
                secondaryColor={currentFilters.color}
                key={filterMIN}
                onClick={() =>
                    number === 1
                        ? setFilters({ ...currentFilters, first: filterMIN })
                        : number === 2
                        ? setFilters({ ...currentFilters, second: filterMIN })
                        : number === 3
                        ? setFilters({ ...currentFilters, third: filterMIN })
                        : null
                }
            >
                {filterMIN}
            </FilterButton>
        )
    }

    return (
        <React.Fragment>
            <FiltersContainer>
                <Container
                    content={allFilters[3][0]}
                    state={currentFilters.first}
                >
                    {allFilters[0].map((filterMAJ) =>
                        getFilterButton(filterMAJ, 1)
                    )}
                </Container>
                <Container
                    content={allFilters[3][1]}
                    state={currentFilters.second}
                >
                    {allFilters[1].map((filterMAJ) =>
                        getFilterButton(filterMAJ, 2)
                    )}
                </Container>
                <Container
                    content={allFilters[3][2]}
                    state={currentFilters.third}
                >
                    {allFilters[2].map((filterMAJ) =>
                        getFilterButton(filterMAJ, 3)
                    )}
                </Container>
            </FiltersContainer>
        </React.Fragment>
    )
}

export default FiltersList
