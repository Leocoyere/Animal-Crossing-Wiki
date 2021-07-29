import { useParams } from 'react-router'
import { useFetch } from '../../../utils/hooks'
import {
    ErrorMessage,
    MainContainer,
    NameContainer,
    Name,
} from '../../../utils/style/Atoms'
import AvailabilityTab from '../../../components/AvailabilityTab'
import React, { useState } from 'react'
import Pattern from '../../../components/Items/Main'
import Infos from '../../../components/Items/Informations'
import { getAvailabilityTime } from '../../../components/AvailabilityTab/functions'
import NavSide from '../../../components/NavSide'
import LoadingPage from '../../../components/Loading'

function FishPage() {
    const { name } = useParams()

    const [translate, setTranslate] = useState(0)
    const [blur, setBlur] = useState(0)
    const [AvailabilityTime, setAvailabilityTime] = useState({})
    const [currentPosition, setCurrentPosition] = useState('north')

    const { data, isLoading, error } = useFetch(
        `https://api.nookipedia.com/nh/fish/${name}`
    )

    const rarity = data.rarity === '' ? 'common' : data.rarity

    return (
        <React.Fragment>
            {isLoading ? (
                <LoadingPage />
            ) : error ? (
                <ErrorMessage>404</ErrorMessage>
            ) : data ? (
                !AvailabilityTime.north ? (
                    getAvailabilityTime(data, setAvailabilityTime)
                ) : (
                    <MainContainer background={'b2ebf2'}>
                        <NameContainer>
                            <Name
                                style={{
                                    filter: `blur(${blur}px)`,
                                    zIndex: blur === 0 ? 1 : 0,
                                }}
                            >
                                {data.name}
                            </Name>
                        </NameContainer>
                        <NavSide
                            setBlur={setBlur}
                            setTranslate={setTranslate}
                            color={'fff'}
                        />
                        <Pattern
                            icon={data.image_url}
                            data={{
                                name: data.name,
                                translate: translate,
                            }}
                        />
                        <Infos
                            data={[
                                {
                                    title: 'rarity',
                                    value: rarity,
                                },
                                {
                                    title: 'shadow',
                                    value: data.shadow_size,
                                },
                                {
                                    title: 'location',
                                    value: data.location,
                                },

                                {
                                    title: 'tom nook',
                                    value: data.sell_nook,
                                    isPrice: true,
                                },
                                {
                                    title: 'C.J.',
                                    value: data.sell_cj,
                                    isPrice: true,
                                },
                            ]}
                            image={data.render_url}
                            translate={translate}
                        />
                        <AvailabilityTab
                            AvailabilityTime={AvailabilityTime}
                            currentPosition={currentPosition}
                            setCurrentPosition={setCurrentPosition}
                            data={{ translate: translate }}
                        ></AvailabilityTab>
                    </MainContainer>
                )
            ) : null}
        </React.Fragment>
    )
}

export default FishPage
