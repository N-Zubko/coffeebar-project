import NavBarTop from '../components/NavBarTop'
import HeaderHome from '../components/HeaderHome'
import About from '../components/About'
import OfferGrid from '../components/Footer'

const Home = () => {
    return (
        <div className="home">
            <NavBarTop />
            <HeaderHome />
            <About />
            <OfferGrid />
        </div>
    )
}

export default Home
