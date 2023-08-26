import React, { useState } from 'react'
import {Button,Search} from "../../pages/Home"
const Text:React.FC = () => {
    const [input, setInput] = useState("")
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value)
    }
    const handleClick = () => {
        setInput('')
    }
    return (
        <>
            <div className=" w-full mt-[150px] pl-3 justify-center lg:px-10  flex lg:flex lg:w-1/2 flex-col gap-4">
                <h1 className='font-montserrat font-bold text-5xl lg:text-8xl'>Head Hunter</h1>
                <p className=" font-montserrat font-normal teact-6xl">Job for everyone</p>

                <div className="flex gap-2">
                    <div className="flex w-fit border-2 h-12 border-black rounded-3xl">
                        <input className='flex outline-none ml-5 text-center text-xs flex-wrap' placeholder="Profession, position or company" type='text' value={input} onChange={handleChange} />
                        <div className="px-1 flex items-center">
                          <Search/>
                        </div>
                    </div>
                    <Button onClick={handleClick} variant="primary">Find a job</Button>
                </div>
            </div>
        </>
    )
}

export default Text
