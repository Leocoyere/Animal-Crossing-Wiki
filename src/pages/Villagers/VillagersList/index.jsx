import { useFetch } from '../../../utils/hooks'
import * as Atoms from '../../../utils/style/Atoms'
import SearchContainer from '../../../components/Filters/SearchContainer'
import ResultsContainer from '../../../components/Filters/ResultsContainer'
import React, { useContext, useEffect } from 'react'
import { ThemeContext } from '../../../utils/context'
import Overview from '../../../components/Overview'
import LoadingPage from '../../../components/Loading'

function VillagersList() {
    const { data, isLoading, error } = useFetch(
        'https://api.nookipedia.com/villagers?nhdetails=true'
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

    function MatchFilters(villager) {
        if (
            villager.appearances.includes('NH') &&
            (villager.species.toLowerCase() === currentFilters.first ||
                !currentFilters.first) &&
            (villager.gender.toLowerCase() === currentFilters.second ||
                !currentFilters.second) &&
            (villager.personality.toLowerCase() === currentFilters.third ||
                !currentFilters.third) &&
            (villager.name.toLowerCase() ===
                currentFilters.name.toLowerCase() ||
                currentFilters.name === '' ||
                villager.name.toLowerCase().includes(currentFilters.name))
        ) {
            return (
                <Overview
                    key={villager.id}
                    icon={villager.nh_details.icon_url}
                    backgroundColor={villager.title_color}
                    link={`villagers/${villager.id}`}
                />
            )
        }
    }

    function getFilters(data) {
        const allGenders = data.reduce(
            (acc, value) =>
                acc.includes(value.gender.toLowerCase())
                    ? acc
                    : acc.concat(value.gender.toLowerCase()),
            []
        )
        const allSpecies = data.reduce(
            (acc, value) =>
                acc.includes(value.species.toLowerCase())
                    ? acc
                    : acc.concat(value.species.toLowerCase()),
            []
        )
        const allPersonalities = data.reduce(
            (acc, value) =>
                acc.includes(value.personality.toLowerCase())
                    ? acc
                    : acc.concat(value.personality.toLowerCase()),
            []
        )
        return [
            allSpecies,
            allGenders,
            allPersonalities,
            ['species', 'gender', 'personnality'],
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

export default VillagersList
