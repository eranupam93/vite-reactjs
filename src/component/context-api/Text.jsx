import React, { useContext } from 'react'
import { GlobalContext } from '../../context'

const Text = () => {

    const { theme } = useContext(GlobalContext)

    return (
        <div>
            <p style={{
                fontSize: theme == 'light' ? "100px" : "20px",
                backgroundColor: theme === 'light' ? "Red" : "Blue"
            }}>Hello i am Genius</p>
        </div>
    )
}

export default Text