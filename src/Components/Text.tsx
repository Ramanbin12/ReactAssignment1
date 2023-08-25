import React, { useState } from 'react'
import Button from './Button'
const Text:React.FC = () => {
    const [input, setInput] = useState("")
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value)
    }
    const handleClick = () => {
        console.log('button clicked')
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
                            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="16" viewBox="0 0 23 16" fill="none">
                                <path d="M8.27274 12.3636H21.3636" stroke="#767676" stroke-width="2" stroke-linecap="round" />
                                <path d="M1.72726 3.63635L21.3636 3.63635" stroke="#767676" stroke-width="2" stroke-linecap="round" />
                                <circle cx="12.6364" cy="3.63636" r="2.63636" fill="white" stroke="#767676" stroke-width="2" />
                                <circle cx="4.63636" cy="12.3637" r="2.63636" fill="white" stroke="#767676" stroke-width="2" />
                            </svg>

                        </div>
                    </div>
                    <Button onClick={handleClick} varient="primary">Find a job</Button>
                </div>
            </div>
        </>
    )
}

export default Text
