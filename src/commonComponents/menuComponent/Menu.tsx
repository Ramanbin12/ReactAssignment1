import React from 'react'

const Menu:React.FC = () => {
    return (
        <>
            <div className="inline-flex  gap-[2vw] items-center  lg:hidden ">
                <p>Menu</p>
                <div className="flex flex-col gap-[1vw] items-center">
                    <span className=" flex h-[2px] w-[17px] bg-black "></span>
                    <span className=" flex h-[2px] w-[17px] bg-black "></span>
                    <span className=" flex h-[2px] w-[17px] bg-black "></span>
                </div>

            </div>
        </>
    )
}

export default Menu
