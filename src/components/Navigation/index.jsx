import styled from 'styled-components'
import bug from '../../assets/img/bug_icon.png'
import creature from '../../assets/img/creature_icon.png'
import fish from '../../assets/img/fish_icon.png'
import villager from '../../assets/img/villager_icon.png'
import { Link } from 'react-router-dom'
import React, { useState } from 'react'

const MenuContainer = styled.section`
    z-index: 50;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    background-color: var(--color-primary);
    align-items: center;
    width: 100%;
    height: 100vh;
    transition: transform 0.5s ease-out;
    ${(props) => `transform: translateY(${props.menuState ? '0%' : '-100%'});`}
`

const MenuNav = styled.nav`
    width: 70%;
    display: flex;
    flex-wrap: wrap;
`

const LinkContainer = styled.article`
    opacity: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    & > a {
        font-family: var(--CommonFont);
        color: #fff;
        font-size: 64px;
        text-decoration: none;
        text-transform: uppercase;
    }
    & > img {
        height: 60px;
    }
    &:hover {
        opacity: 100%;
    }
`
const MenuToggle = styled.div`
    cursor: pointer;
    width: 35px;
    z-index: 100;
    height: 5px;
    position: fixed;
    top: 50px;
    right: 50px;
    opacity: var(--opacity);
    ${(props) => `
        &::before {
            position: absolute;
            transition: all ease-out 0.5s;
            content: '';
            background-color: var(--color-tertiary);
            width: 100%;
            height: 5px;
            top: -5px;
            left: ${props.menuState ? '10px' : '-10px'};
        }
        &::after {
            position: absolute;
            transition: all ease-out 0.5s;
            content: '';
            background-color: var(--color-tertiary);
            width: 100%;
            height: 5px;
            bottom: -5px;
            left: ${props.menuState ? '-10px' : '10px'};
        }`}
`

function Navigation({ isHome }) {
    const [menuIsOpen, setMenu] = useState(isHome ? true : false)

    const NavLinks = [
        { title: 'home', img: 'none', alt: '' },
        {
            title: 'villagers',
            img: villager,
            alt: 'Villager icon from Animal Crossing New Horizons',
        },
        {
            title: 'fishes',
            img: fish,
            alt: 'Fish icon from Animal Crossing New Horizons',
        },
        {
            title: 'bugs',
            img: bug,
            alt: 'Bug icon from Animal Crossing New Horizons',
        },
        {
            title: 'sea creatures',
            img: creature,
            alt: 'Creature icon from Animal Crossing New Horizons',
        },
    ]

    return (
        <React.Fragment>
            {isHome ? null : (
                <MenuToggle
                    onClick={() => setMenu(menuIsOpen ? false : true)}
                    menuState={menuIsOpen}
                ></MenuToggle>
            )}
            <MenuContainer menuState={menuIsOpen}>
                <MenuNav>
                    {NavLinks.map((data) => (
                        <LinkContainer>
                            <img src={data.img} alt={data.alt} />
                            <Link
                                to={`/${data.title}`}
                                onClick={() => setMenu(false)}
                            >
                                {data.title}
                            </Link>
                        </LinkContainer>
                    ))}
                </MenuNav>
            </MenuContainer>
        </React.Fragment>
    )
}

export default Navigation
