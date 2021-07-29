import { useFetch } from '../../../utils/hooks'
import { useParams } from 'react-router'
import { ErrorMessage } from '../../../utils/style/Atoms'
import React, { useState } from 'react'
import { getGenderIcon, getZodiacSign, getBirthDate } from './functions'
import Main from '../../../components/Villagers/Main'
import Birth from '../../../components/Villagers/Birth'
import Infos from '../../../components/Villagers/Informations'
import styled from 'styled-components'
import { MainContainer } from '../../../utils/style/Atoms'
import NavSide from '../../../components/NavSide'
import LoadingPage from '../../../components/Loading'

const VillagerName = styled.h1`
    @media screen and (min-width: 1200px) {
        font-size: 250px;
        top: calc(50% - 125px);
        position: absolute;
        left: 0;
        font-family: var(--TitleFont);
        opacity: 50%;
        width: 100%;
        color: inherit;
        transition: filter ease-out 1s;
        text-align: center;
    }
`

function VillagerPage() {
    const { id } = useParams()
    const [currentVillager, setVillager] = useState()
    const [translate, setTranslate] = useState(0)
    const [blur, setBlur] = useState(0)

    const { data, isLoading, error } = useFetch(
        'https://api.nookipedia.com/villagers?nhdetails=true'
    )

    return (
        <React.Fragment>
            {isLoading ? (
                <LoadingPage />
            ) : error ? (
                <ErrorMessage>404</ErrorMessage>
            ) : !currentVillager ? (
                data.map((villager) =>
                    id === villager.id ? setVillager(villager) : null
                )
            ) : (
                <MainContainer
                    background={currentVillager.title_color}
                    text={currentVillager.text_color}
                >
                    <VillagerName style={{ filter: `blur(${blur}px)` }}>
                        {currentVillager.name}
                    </VillagerName>
                    <NavSide
                        setTranslate={setTranslate}
                        setBlur={setBlur}
                        color={currentVillager.text_color}
                    />
                    <Main
                        data={currentVillager}
                        genderIcon={getGenderIcon(currentVillager)}
                        translate={translate}
                    />
                    <Birth
                        icons={{
                            zodiac: getZodiacSign(currentVillager),
                            villager: currentVillager.nh_details.icon_url,
                        }}
                        data={{
                            birth: getBirthDate(
                                currentVillager.birthday_month,
                                currentVillager.birthday_day
                            ),
                            name: currentVillager.name,
                            zodiac: currentVillager.sign,
                            translate: translate,
                            color: currentVillager.text_color,
                        }}
                    />
                    <Infos
                        icons={{
                            villager: currentVillager.nh_details.icon_url,
                        }}
                        data={{
                            translate: translate,
                            villager: {
                                species: currentVillager.species,
                                personality: currentVillager.personality,
                                hobby: currentVillager.nh_details.hobby,
                                catchphrase:
                                    currentVillager.nh_details.catchphrase,
                                quote: currentVillager.quote,
                            },
                        }}
                    />
                </MainContainer>
            )}
        </React.Fragment>
    )
}

export default VillagerPage
