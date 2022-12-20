import logo from '../assets/logo.jpg'

const NavBarTop = () => {
    return (
        <div className="top-nav-bar container d-flex flex-row justify-content-between align-items-center mt-3">
            <img src={logo} alt="logo of Espresso Yourself" className="logo" />
            <ul className="top-nav-bar">
                <li>
                    <a href="#home">Home</a>
                </li>
                <li>
                    <a href="#menu">Menu</a>
                </li>
                <li>
                    <a href="#about">About us</a>
                </li>
                <li>
                    <a href="#story">Our Story</a>
                </li>
                <li>
                    <a href="#blog">Blog</a>
                </li>
                <li>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
        </div>
    )
}
export default NavBarTop
