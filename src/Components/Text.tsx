import React, { useState } from 'react'
import Button from './Button'
const Text = () => {
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
            <div className=" w-full mt-6  justify-center px-10  flex lg:flex lg:w-1/2 flex-col gap-4">
                <h1 className=' text-5xl lg:text-9xl'>Head Hunter</h1>
                <p className="teact-6xl">Job for everyone</p>

                <div className="flex gap-2">
                    <div className="flex w-fit border-2 h-12 border-black rounded-0.5xl">
                        <input className=' px-4 outline-none text-center' placeholder="Profession, position or company" type='text' value={input} onChange={handleChange} />
                        <div className="flex items-center px-1">
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
