import GithubIcon from '../../components/GithubIcon'
import LinkedinIcon from '../../components/LinkedinIcon'
import Logo from '../../components/Logo'
import Navbar from '../../components/Navbar'
import Search from '../../components/Search'

const Header = () =>{
    return(
        <header className='header'>
            <Logo />
            <Navbar/>
            <div className='social-container'>
                <GithubIcon/>
                <LinkedinIcon/>
            </div>
        </header>
    )
}

export default Header