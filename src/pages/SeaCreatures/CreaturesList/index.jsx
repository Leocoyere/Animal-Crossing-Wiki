import { useFetch } from '../../../utils/hooks'
import * as Atoms from '../../../utils/style/Atoms'
import SearchContainer from '../../../components/Filters/SearchContainer'
import ResultsContainer from '../../../components/Filters/ResultsContainer'
import React, { useContext, useEffect } from 'react'
import { ThemeContext } from '../../../utils/context'
import Overview from '../../../components/Overview'
import LoadingPage from '../../../components/Loading'

function CreaturesList() {
    const { data, isLoading, error } = useFetch(
        'https://api.nookipedia.com/nh/sea'
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
    }, [])

    function MatchFilters(creature) {
        if (
            (creature.rarity.toLowerCase() === currentFilters.first ||
                !currentFilters.first) &&
            (creature.shadow_size.toLowerCase() === currentFilters.second ||
                !currentFilters.second) &&
            (creature.shadow_movement.toLowerCase() === currentFilters.third ||
                !currentFilters.third) &&
            (creature.name.toLowerCase() ===
                currentFilters.name.toLowerCase() ||
                currentFilters.name === '' ||
                creature.name.toLowerCase().includes(currentFilters.name))
        ) {
            return (
                <Overview
                    key={creature.number}
                    icon={creature.image_url}
                    backgroundColor={'#fff'}
                    link={`sea creatures/${creature.name}`}
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
        const allSpeeds = data.reduce(
            (acc, value) =>
                acc.includes(value.shadow_movement.toLowerCase())
                    ? acc
                    : acc.concat(value.shadow_movement.toLowerCase()),
            []
        )

        return [
            allRarities,
            allShadows,
            allSpeeds,
            ['rarity', 'shadow size', 'speed'],
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

export default CreaturesList
