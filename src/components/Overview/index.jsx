import PropTypes from 'prop-types'
import styled from 'styled-components'
import { ErrorIcon } from '../../utils/style/Atoms'
import { Link } from 'react-router-dom'

const Card = styled(Link)`
    width: 100%;
    padding-top: 100%;
    display: flex;
    justify-content: center;
    position: relative;
    align-items: center;
    transition: background-color ease-out 0.5s;
    &:hover {
        ${({ background }) =>
            Array.isArray(background)
                ? background.map(
                      (color) =>
                          `&:nth-child(10n + ${background.indexOf(
                              color
                          )}) { background-color: #${color}; }`
                  )
                : `background-color: #${background};`}
    }
`

const Icon = styled.img`
    position: absolute;
    top: calc(50% - 64px);
    left: calc(50% - 64px);
`

function Overview({ icon, backgroundColor, link }) {
    return (
        <Card background={backgroundColor} to={link}>
            {icon ? (
                <Icon src={icon} alt="" />
            ) : (
                <ErrorIcon>NO ICON FOUND</ErrorIcon>
            )}
        </Card>
    )
}

Overview.propTypes = {
    icon: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
}

export default Overview
