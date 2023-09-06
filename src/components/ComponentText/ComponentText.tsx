import React, { useState } from 'react'
import { Button, Search } from "../../pages/Home"
const Text: React.FC = () => {
    const [input, setInput] = useState("")
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value)
    }
    const handleClick = () => {
        setInput('')
    }
    return (
        <>
            <div className="textComponent_outerdiv">
                <h1 className='textComponent_title'>Head Hunter</h1>
                <p className=" textComponent_subTitle">Job for everyone</p>

                <div className="textComponent_innerContainer">
                    <div className="textComponent_inputDiv">
                        <input className='textComponent_input' placeholder="Profession, position or company" type='text' value={input} onChange={handleChange} />
                        <div className="textComponent_searchContainer">
                            <Search />
                        </div>
                    </div>
                    <Button onClick={handleClick} variant="primary">Find a job</Button>
                </div>
            </div>
        </>
    )
}

export default Text
