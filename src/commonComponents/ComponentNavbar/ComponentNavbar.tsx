import {Button,Title,Menu,Logo} from "../../pages/Home"
import { subtitle } from '../../utilities/constants/dummyData'
const NavBar: React.FC = () => {
    return (
        <>
        
            <div className="navbarComcponent_outerDiv ">

                <Logo />
                <div className="navbarContainer_innerDiv">
                    <Title titles={subtitle} />
                    <div className=" navbarComponent_buttonComponent">
                        <Button variant="secondary" >create a resume</Button>
                        <Button variant="primary" >Sign In</Button>
                    </div>
                    <div className="navbarComponent_menuComponent"></div>
                    <Menu/>
                </div>
            </div>

        </>
    )
}

export default NavBar