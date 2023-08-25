import React from 'react'
import GEOMETRIC from "../Assets/GEOMETRIC.png"
import illustration from "../Assets/Illustration.png"
 const Image:React.FC = () => {
    return (
        <>
            <div className=" flex justify-center items-center text-center lg:mt-0 ">
                <img className="hidden sm:block" src={GEOMETRIC} alt="" />
                <img className="sm:hidden block" src={illustration} alt="" />
            </div>
        </>
    )
}
export default Image

