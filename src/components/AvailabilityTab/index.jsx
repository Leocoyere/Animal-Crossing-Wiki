import { useState } from 'react'
import styled from 'styled-components'
import { FilterButton } from '../../utils/style/Atoms'

const Container = styled.section`
    width: 100%;
    height: 100%;
    padding: 100px 200px;
    box-sizing: border-box;
    display: grid;
    grid-template-columns: 1fr 1fr;
    position: relative;
    transition: transform ease-out 1s;
`

const MonthsContainer = styled.article`
    width: auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(4, 55px);
    grid-gap: 10px;
`

const TimeContainer = styled.article`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: left;
`

const DataTitle = styled.h2`
    font-family: var(--CommonFont);
    margin: auto;
    text-transform: uppercase;
    color: #fff;
    position: relative;
    @media screen and (min-width: 1200px) {
        font-size: 48px;
        letter-spacing: -5%;
        ${(props) => `
            &::before {
                width: 200%;
                position: absolute;
                top: -30px;
                left: -20px;
                content: '${props.title}';
                opacity: 50%;
                font-family: var(--CommonFont);
                font-size: 24px;
                letter-spacing: -5%;
            }
        `}
    }
`
const HoursContainer = styled.article`
    width: auto;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(3, 55px);
    grid-gap: 10px;
`
const ToggleContainer = styled.aside`
    &:nth-of-type(1) {
        grid-area: 3 / 1 / 4 / 4;
    }
    &:nth-of-type(2) {
        grid-area: 3 / 4 / 4 / 7;
    }
    background-color: transparent;
    position: relative;
    border: #fff 1px solid;
    display: flex;
    justify-content: center;
    border-radius: 5px;
    align-items: center;
    ${(props) => `&::before {
        transition: opacity 0.5s ease-out;
        opacity: ${props.opacityST}%;
        content: '${props.firstInfo}';
        left: 10px;
        position: absolute;
        color: #fff;
        font-size: 14px;
        font-family: var(--CommonFont);
        top: calc(50% - 7px);
    }
    &::after {
        transition: opacity 0.5s ease-out;
        opacity: ${props.opacityND}%;
        content: '${props.secondInfo}';
        right: 10px;
        position: absolute;
        color: #fff;
        font-size: 14px;
        font-family: var(--CommonFont);
        top: calc(50% - 7px);
    }`}
`

const Toggle = styled.div`
    width: 40px;
    height: 40%;
    border-radius: 20px;
    border: 1px solid #fff;
    position: relative;
    ${(props) =>
        `&::before {
            transition: transform ease-out 0.5s;
            content: '';
            border-radius: 100%;
            position: absolute;
            left: 0;
            transform: translateX(${props.transform}%);
            top: calc(50% - 10px);
            width: 20px;
            height: 20px;
            background-color: #fff;
        }`}
`

function AvailabilityTab({
    AvailabilityTime,
    currentPosition,
    setCurrentPosition,
    data,
}) {
    const [dayTime, setDayTime] = useState(false)
    const [currentMonth, setCurrentMonth] = useState(5)
    const [currentHour, setCurrentHour] = useState(1)

    const allMonths = {
        1: 'JANUARY',
        2: 'FEBRUARY',
        3: 'MARCH',
        4: 'APRIL',
        5: 'MAY',
        6: 'JUNE',
        7: 'JULY',
        8: 'AUGUST',
        9: 'SEPTEMBER',
        10: 'OCTOBER',
        11: 'NOVEMBER',
        12: 'DECEMBER',
    }
    const allHours = [
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '10',
        '11',
        '12',
    ]
    return (
        <Container style={{ transform: `translateY(${data.translate}%)` }}>
            <TimeContainer>
                <MonthsContainer>
                    {Object.entries(allMonths).map((month) =>
                        currentMonth === month[0] ? (
                            <FilterButton
                                key={month[1]}
                                isCurrentFilter
                                primaryColor={'#fff'}
                                secondaryColor={'#b2ebf2'}
                            >
                                {month[1]}
                            </FilterButton>
                        ) : (
                            <FilterButton
                                key={month[1]}
                                primaryColor={'#fff'}
                                secondaryColor={'#b2ebf2'}
                                onClick={() => setCurrentMonth(month[0])}
                            >
                                {month[1]}
                            </FilterButton>
                        )
                    )}
                </MonthsContainer>
                <HoursContainer>
                    {allHours.map((hour) =>
                        currentHour === hour ? (
                            <FilterButton
                                key={hour}
                                isCurrentFilter
                                primaryColor={'#fff'}
                                secondaryColor={'#b2ebf2'}
                            >
                                {hour}
                            </FilterButton>
                        ) : (
                            <FilterButton
                                key={hour}
                                primaryColor={'#fff'}
                                secondaryColor={'#b2ebf2'}
                                onClick={() => setCurrentHour(hour)}
                            >
                                {hour}
                            </FilterButton>
                        )
                    )}
                    <ToggleContainer
                        opacityST={dayTime ? 100 : 50}
                        opacityND={dayTime ? 50 : 100}
                        firstInfo={'PM'}
                        secondInfo={'AM'}
                    >
                        <Toggle
                            transform={dayTime ? 0 : 100}
                            onClick={() =>
                                dayTime ? setDayTime(false) : setDayTime(true)
                            }
                        ></Toggle>
                    </ToggleContainer>
                    <ToggleContainer
                        opacityST={currentPosition === 'north' ? 100 : 50}
                        opacityND={currentPosition === 'north' ? 50 : 100}
                        firstInfo={'NORTH'}
                        secondInfo={'SOUTH'}
                    >
                        <Toggle
                            transform={currentPosition === 'north' ? 0 : 100}
                            onClick={() =>
                                currentPosition === 'north'
                                    ? setCurrentPosition('south')
                                    : setCurrentPosition('north')
                            }
                        ></Toggle>
                    </ToggleContainer>
                </HoursContainer>
            </TimeContainer>
            <DataTitle title={'status'}>
                {dayTime
                    ? AvailabilityTime[`${currentPosition}`][`${currentMonth}`][
                          `${currentHour}`
                      ]
                        ? 'AVAILABLE'
                        : 'UNAVAILABLE'
                    : AvailabilityTime[`${currentPosition}`][`${currentMonth}`][
                          `${parseInt(currentHour) + 12}`
                      ]
                    ? 'AVAILABLE'
                    : 'UNAVAILABLE'}
            </DataTitle>
        </Container>
    )
}

export default AvailabilityTab
