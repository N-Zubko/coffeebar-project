import logo from '../assets/logo.jpg'

const NavBarTop = () => {
    return (
        <div className="top-nav-bar d-flex flex-row justify-content-between align-items-center">
            <img src={logo} alt="logo of Espresso Yourself" className="logo" />
            <ul className="top-nav-bar">
                <li>
                    <a href="">Home</a>
                </li>
                <li>
                    <a href="">Menu</a>
                </li>
                <li>
                    <a href="">About us</a>
                </li>
                <li>
                    <a href="">Our Story</a>
                </li>
                <li>
                    <a href="">Blog</a>
                </li>
                <li>
                    <a href="">Contact</a>
                </li>
            </ul>
        </div>
    )
}
export default NavBarTop
