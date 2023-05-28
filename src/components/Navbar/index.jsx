import { NavLink } from "react-router-dom";

const Navbar = () =>{
    const routes = [
        {
            to: '/',
            text: 'Home'
        },
        {
            to: '/pokedex',
            text: 'Pokedex'
        }
    ]
    return(
        <nav>
            <ul className='navbar'>
                {routes.map(route =>(
                    <NavLink
                        key={route.text}
                        to={route.to}
                        className={({ isActive }) =>
                        isActive ? "nav-item--active" : "nav-item"
                    }
                    >
                        {route.text}
                    </NavLink>
                ))}
            </ul>
        </nav>
    )
}

export default Navbar