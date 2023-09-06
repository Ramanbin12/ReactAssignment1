import React from 'react'
import GEOMETRIC from "../../Assets/Images/GEOMETRIC.png"
import illustration from "../../Assets/Images/Illustration.png"
 const Image:React.FC = () => {
    return (
        <>
            <div className="imageComponent_outerConatiner ">
                <img className="imageComponent_img1" src={GEOMETRIC} alt="" />
                <img className=" imageComponent_img2" src={illustration} alt="" />
            </div>
        </>
    )
}
export default Image

