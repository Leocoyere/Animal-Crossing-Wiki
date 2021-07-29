import aquarius from '../../../assets/zodiacs/aquarius.jsx'
import aries from '../../../assets/zodiacs/aries.jsx'
import cancer from '../../../assets/zodiacs/cancer.jsx'
import capricorn from '../../../assets/zodiacs/capricorn.jsx'
import gemini from '../../../assets/zodiacs/gemini.jsx'
import leo from '../../../assets/zodiacs/leo.jsx'
import libra from '../../../assets/zodiacs/libra.jsx'
import pisces from '../../../assets/zodiacs/pisces.jsx'
import sagittarius from '../../../assets/zodiacs/sagittarius.jsx'
import scorpio from '../../../assets/zodiacs/scorpio.jsx'
import taurus from '../../../assets/zodiacs/taurus.jsx'
import virgo from '../../../assets/zodiacs/virgo.jsx'

export function getZodiacSign(data) {
    switch (data.sign.toLowerCase()) {
        case 'aquarius':
            return aquarius
        case 'aries':
            return aries
        case 'cancer':
            return cancer
        case 'capricorn':
            return capricorn
        case 'gemini':
            return gemini
        case 'leo':
            return leo
        case 'libra':
            return libra
        case 'pisces':
            return pisces
        case 'sagittarius':
            return sagittarius
        case 'scorpio':
            return scorpio
        case 'taurus':
            return taurus
        case 'virgo':
            return virgo
        default:
            return null
    }
}

export function getGenderIcon(data) {
    if (data.gender.toLowerCase() === 'male') {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                viewBox="0 0 30 30"
                style={{
                    fill: `#${data.text_color}`,
                    opacity: '50%',
                    width: 100,
                    height: 100,
                }}
            >
                <title>male</title>
                <path d="M25,7H21a1,1,0,0,0,0,2h1.586L19.9,11.685A8.016,8.016,0,1,0,21.315,13.1L24,10.414V12a1,1,0,0,0,2,0V8A1,1,0,0,0,25,7ZM19.243,22.243A6,6,0,1,1,21,18,5.961,5.961,0,0,1,19.243,22.243Z" />
            </svg>
        )
    } else if (data.gender.toLowerCase() === 'female') {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 45 55"
                x="0px"
                y="0px"
                style={{
                    fill: `#${data.text_color}`,
                    opacity: '50%',
                    width: 100,
                    height: 100,
                }}
            >
                <title>Female</title>
                <path d="M26,7A15,15,0,0,0,14.31,31.39l-2.68,2.75L9.56,32.08A1.5,1.5,0,0,0,7.44,34.2l2.09,2.09-2.1,2.16a1.5,1.5,0,0,0,0,2.12,1.5,1.5,0,0,0,2.12,0l2.09-2.14,2.14,2.15a1.5,1.5,0,0,0,2.12-2.12l-2.17-2.17,2.67-2.73A15,15,0,1,0,26,7Zm0,27a12,12,0,0,1-8.49-3.53l-.08-.12-.07,0A12,12,0,1,1,26,34Z" />
            </svg>
        )
    }
}

export function getBirthDate(birthMonth, birthDay) {
    switch (birthMonth.toLowerCase()) {
        case 'january':
            return `${birthDay}/01`
        case 'february':
            return `${birthDay}/02`
        case 'march':
            return `${birthDay}/03`
        case 'april':
            return `${birthDay}/04`
        case 'may':
            return `${birthDay}/05`
        case 'june':
            return `${birthDay}/06`
        case 'july':
            return `${birthDay}/07`
        case 'august':
            return `${birthDay}/08`
        case 'september':
            return `${birthDay}/09`
        case 'october':
            return `${birthDay}/10`
        case 'november':
            return `${birthDay}/11`
        case 'december':
            return `${birthDay}/12`
        default:
            return ''
    }
}
