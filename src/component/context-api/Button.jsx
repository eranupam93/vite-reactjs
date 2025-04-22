import React, { useContext } from 'react'
import { GlobalContext } from '../../context'

const Button = () => {
    const { theme, setTheme } = useContext(GlobalContext)



    return (
        <button onClick={() => theme == 'light' ? setTheme('dark') : setTheme('light')}>Toggle theme</button>
    )
}

export default Button