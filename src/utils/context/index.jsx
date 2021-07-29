import { createContext, useState } from 'react'

export const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
    const [currentFilters, setFilters] = useState({
        first: false,
        second: false,
        third: false,
        name: '',
        color: '',
    })

    return (
        <ThemeContext.Provider value={{ currentFilters, setFilters }}>
            {children}
        </ThemeContext.Provider>
    )
}
