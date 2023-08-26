import {Button,Title,Menu,Logo} from "../../pages/Home"
import { subtitle } from '../../utilities/constants/dummyData'
const NavBar: React.FC = () => {
    return (
        <>
        
            <div className="flex fixed w-full justify-between lg:gap-[100px] px-10 py-6 bg-white ">

                <Logo />
                <div className="flex  w-full  lg:justify-between  ">
                    <Title titles={subtitle} />
                    <div className=" hidden items-center lg:flex gap-[1vw]">
                        <Button variant="secondary" >create a resume</Button>
                        <Button variant="primary" >Sign In</Button>
                    </div>
                    <div className="flex-1 lg:hidden"></div>
                    <Menu/>
                </div>
            </div>

        </>
    )
}

export default NavBar