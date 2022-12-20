import NavBarTop from '../components/NavBarTop'
import HeaderHome from '../components/HeaderHome'
import About from '../components/About'
import OfferGrid from '../components/OfferGrid'
import Footer from '../components/Footer'

const Home = () => {
    return (
        <div className="home">
            <NavBarTop />
            <HeaderHome />
            <About />
            <OfferGrid />
            <Footer />
        </div>
    )
}

export default Home
