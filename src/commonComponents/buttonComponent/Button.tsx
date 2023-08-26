import React from 'react'
import { ButtonType } from '../../utilities/type'
import { variants } from '../../utilities/constants/dummyData'
const Button: React.FC<ButtonType> = ({ children, variant, onClick }) => {
    if (variant === variants.primary) {
        return (
            <button className="border-2 h-12 w-[150px] rounded-3xl px-4 bg-red-600 text-white" onClick={onClick}>{children}</button>

        )
    }
    else {
        return (
            <button className="border-2 h-12 border-black rounded-3xl px-4 w-[250px] text-center " > {children}</button>

        )
    }

}

export default Button
