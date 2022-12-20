import NavBarTop from '../components/NavBarTop'
import HeaderHome from '../components/HeaderHome'
import About from '../components/About'
import OfferGrid from '../components/OfferGrid'
import Footer from '../components/Footer'
import SmallMenu from '../components/SmallMenu'

const Home = () => {
    return (
        <div className="home">
            <NavBarTop />
            <HeaderHome />
            <About />
            <OfferGrid />
            <SmallMenu />
            <Footer />
        </div>
    )
}

export default Home
