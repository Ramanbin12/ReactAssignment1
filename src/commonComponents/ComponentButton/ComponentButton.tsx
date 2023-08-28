import React from 'react'
import { ButtonType } from '../../utilities/type'
import { variants } from '../../utilities/constants/dummyData'
const Button: React.FC<ButtonType> = ({ children, variant, onClick }) => {
    if (variant === variants.primary) {
        return (
            <button className="buttonComponent_primaryButton" onClick={onClick}>{children}</button>

        )
    }
    else {
        return (
            <button className="buttonComponent_secondaryButton" > {children}</button>

        )
    }

}

export default Button
