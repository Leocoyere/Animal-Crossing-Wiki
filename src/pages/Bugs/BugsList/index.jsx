import { useFetch } from '../../../utils/hooks'
import * as Atoms from '../../../utils/style/Atoms'
import SearchContainer from '../../../components/Filters/SearchContainer'
import ResultsContainer from '../../../components/Filters/ResultsContainer'
import React, { useContext, useEffect } from 'react'
import { ThemeContext } from '../../../utils/context'
import Overview from '../../../components/Overview'
import LoadingPage from '../../../components/Loading'

function BugsList() {
    const { data, isLoading, error } = useFetch(
        'https://api.nookipedia.com/nh/bugs'
    )

    const { currentFilters, setFilters } = useContext(ThemeContext)

    useEffect(() => {
        setFilters({
            first: false,
            second: false,
            third: false,
            name: '',
            color: 'var(--color-primary)',
        })
    }, [setFilters])

    function MatchFilters(bug) {
        if (
            (bug.rarity.toLowerCase() === currentFilters.first ||
                !currentFilters.first) &&
            (bug.location.toLowerCase() === currentFilters.second ||
                !currentFilters.second) &&
            (bug.name.toLowerCase() === currentFilters.name.toLowerCase() ||
                currentFilters.name === '' ||
                bug.name.toLowerCase().includes(currentFilters.name))
        ) {
            return (
                <Overview
                    key={bug.number}
                    icon={bug.image_url}
                    backgroundColor={'#fff'}
                    link={`bugs/${bug.name}`}
                />
            )
        }
    }

    function getFilters(data) {
        const allRarities = data.reduce(
            (acc, value) =>
                acc.includes(value.rarity.toLowerCase())
                    ? acc
                    : acc.concat(value.rarity.toLowerCase()),
            []
        )
        const allLocations = data.reduce(
            (acc, value) =>
                acc.includes(value.location.toLowerCase())
                    ? acc
                    : acc.concat(value.location.toLowerCase()),
            []
        )

        return [allRarities, allLocations, [], ['rarity', 'location', '']]
    }

    return (
        <Atoms.PageContainer color={currentFilters.color}>
            {isLoading ? (
                <LoadingPage />
            ) : error ? (
                <Atoms.ErrorMessage>404</Atoms.ErrorMessage>
            ) : (
                <React.Fragment>
                    <SearchContainer data={data} getFilters={getFilters} />
                    <ResultsContainer
                        data={data}
                        matchFunction={MatchFilters}
                    />
                </React.Fragment>
            )}
        </Atoms.PageContainer>
    )
}

export default BugsList
