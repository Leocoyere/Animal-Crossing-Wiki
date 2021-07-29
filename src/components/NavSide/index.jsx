import styled from 'styled-components'

function NavSide({ setTranslate, setBlur, color }) {
    const navData = [
        {
            translate: 0,
            blur: 0,
        },
        {
            translate: -100,
            blur: 100,
        },
        {
            translate: -200,
            blur: 100,
        },
    ]

    return (
        <NavContainer>
            {navData.map((element) => (
                <NavBlock
                    onClick={() => {
                        setTranslate(element.translate)
                        setBlur(element.blur)
                    }}
                    background={color}
                ></NavBlock>
            ))}
        </NavContainer>
    )
}

export default NavSide

const NavBlock = styled.a`
    @media screen and (min-width: 1200px) {
        height: 7px;
        width: 50px;
        opacity: 20%;
        transition: opacity ease-out 0.5s;
        ${(props) => `background-color: #${props.background};`}
        &:hover {
            opacity: 100%;
        }
    }
`
const NavContainer = styled.nav`
    @media screen and (min-width: 1200px) {
        width: 200px;
        height: 25%;
        display: flex;
        position: fixed;
        z-index: 10;
        top: calc(50% - 12.5%);
        left: 50px;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: left;
    }
`
