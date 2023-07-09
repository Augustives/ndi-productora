import Logo from '../components/logo';
import Nav from "../components/navlinks";

export default function Navbar1() {
    return (
        <header className="bg-gradient-to-r to-darkBlue from-softBlue sticky top-0  flex-wrap
                           z-20 mx-auto flex w-full items-center justify-between border-b border-gray-500
                           p-4">
            <Logo/>
            <Nav/>
        </header>
    )
}