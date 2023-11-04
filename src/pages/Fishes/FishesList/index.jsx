import { useFetch } from '../../../utils/hooks'
import * as Atoms from '../../../utils/style/Atoms'
import SearchContainer from '../../../components/Filters/SearchContainer'
import ResultsContainer from '../../../components/Filters/ResultsContainer'
import React, { useContext, useEffect } from 'react'
import { ThemeContext } from '../../../utils/context'
import Overview from '../../../components/Overview'
import LoadingPage from '../../../components/Loading'

function FishesList() {
    const { data, isLoading, error } = useFetch(
        'https://api.nookipedia.com/nh/fish'
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

    function MatchFilters(fish) {
        if (
            (fish.rarity.toLowerCase() === currentFilters.first ||
                !currentFilters.first) &&
            (fish.shadow_size.toLowerCase() === currentFilters.second ||
                !currentFilters.second) &&
            (fish.location.toLowerCase() === currentFilters.third ||
                !currentFilters.third) &&
            (fish.name.toLowerCase() === currentFilters.name.toLowerCase() ||
                currentFilters.name === '' ||
                fish.name.toLowerCase().includes(currentFilters.name))
        ) {
            return (
                <Overview
                    key={fish.number}
                    icon={fish.image_url}
                    backgroundColor={'#fff'}
                    link={`fishes/${fish.name}`}
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
        const allShadows = data.reduce(
            (acc, value) =>
                acc.includes(value.shadow_size.toLowerCase())
                    ? acc
                    : acc.concat(value.shadow_size.toLowerCase()),
            []
        )
        const allLocations = data.reduce(
            (acc, value) =>
                acc.includes(value.location.toLowerCase())
                    ? acc
                    : acc.concat(value.location.toLowerCase()),
            []
        )

        return [
            allRarities,
            allShadows,
            allLocations,
            ['rarity', 'shadow size', 'location'],
        ]
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

export default FishesList
