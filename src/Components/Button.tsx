import React from 'react'
import { ButtonType } from '../type'

const Button: React.FC <ButtonType>= ({children,varient,onClick}) => {
    if(varient==='primary'){
        return(
            <button className="border-2 h-12 rounded-2xl px-4 bg-red-600 text-white" onClick={onClick}>{children}</button>
   
        )
    }
    else{
        return(
            <button className="border-2 h-12 border-black rounded-2xl px-4 text-center " > {children}</button>

        )
    }
   
}

export default Button
