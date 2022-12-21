import NavBarTop from '../components/NavBarTop'
import HeaderHome from '../components/HeaderHome'
import About from '../components/About'
import OfferGrid from '../components/OfferGrid'
import Footer from '../components/Footer'
import SmallMenu from '../components/SmallMenu'
import VideoBlock from '../components/VideoBlock'
import VideoModal from '../components/VideoModal'

import { useState } from 'react'

const Home = () => {
    const [showVideoModal, setShowVideoModal] = useState(false)
    function changeVideoModalVisibility(e) {
        e.preventDefault()
        console.log('CLICKED')
        setShowVideoModal(!showVideoModal)
    }

    return (
        <div className="home">
            <NavBarTop />
            <HeaderHome />
            <About />
            <OfferGrid />
            <SmallMenu />
            <VideoBlock
                changeVideoModalVisibility={changeVideoModalVisibility}
            />
            {showVideoModal && (
                <VideoModal
                    changeVideoModalVisibility={changeVideoModalVisibility}
                />
            )}
            <Footer />
        </div>
    )
}

export default Home
