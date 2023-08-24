import Logo from "./Logo"
import Button from "./Button"
import {Title} from "./Title"
import {subtitle} from '../dummyData'
import Menu from "./Menu"
export const NavBar:React.FC = () => {
    return (
        <>
        <div className="flex justify-between px-10 mt-6 w-full">
           
            <Logo />
            <div className="flex gap-[100px]">
            <Title titles={subtitle}/>
            <div className="hidden lg:flex gap-[1vw]">
            <Button varient="secondary" >create a resume</Button>
            <Button varient="primary" >Sign In</Button>
            </div>
             <Menu/>
            </div>
        </div>
          
        </>
    )
}

