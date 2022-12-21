import interior1 from '../assets/cafe-picture.png'
import interior2 from '../assets/cafe-picture-2.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStarHalf } from '@fortawesome/free-solid-svg-icons'

const About = () => {
    return (
        <div className="about container" id="about">
            <div className="row mt-2">
                <h2 className="d-inline">
                    LEARN MORE ABOUT US{' '}
                    <h2 className="d-inline p-2 line" aria-hidden="true">
                        ⸺
                    </h2>
                </h2>
                <div className="col col-md-7 col-sm-10">
                    <h3 className="top-heading mt-3 mb-3">
                        We use top-quality &amp; expertly crafted recipes
                    </h3>
                    <p>
                        We pride ourselves on our excellent customer service and
                        strive to make every visit a memorable one. Coffee
                        Espresso Yourself has been serving the community for
                        almost 10 years, offering a welcoming atmosphere and a
                        variety of delicious food and drinks.
                    </p>
                    <div className="facts container mt-4">
                        <div className="row mt-3">
                            <div className="col col-md-4 col-sm-10 d-flex flex-column">
                                <h4 className="fact-heading">
                                    <FontAwesomeIcon
                                        icon={faStarHalf}
                                        className="icon mb-1"
                                    />
                                    10+ People
                                </h4>
                                <p className="mt-3 fact-description">
                                    We are a small team dedicated to our
                                    customers and keeping high standard of
                                    operation.
                                </p>
                            </div>

                            <div className="col col-md-4 col-sm-10 d-flex flex-column">
                                <h4 className="fact-heading">
                                    <FontAwesomeIcon
                                        icon={faStarHalf}
                                        className="icon mb-1"
                                    />
                                    Since 2014
                                </h4>
                                <p className="mt-3 fact-description">
                                    Operating successfully since that year
                                    thanks to the dedicated team and beloved
                                    clients.
                                </p>
                            </div>

                            <div className="col col-md-4 col-sm-10 d-flex flex-column">
                                <h4 className="fact-heading">
                                    <FontAwesomeIcon
                                        icon={faStarHalf}
                                        className="icon mb-1"
                                    />
                                    200K+
                                </h4>
                                <p className="mt-3 fact-description">
                                    Clients satisfied thanks to the top-quality
                                    service and a welcoming atmosphere for all.
                                </p>
                            </div>
                        </div>
                    </div>
                    <a href="#menu" className="button mt-5 mb-4">
                        View Menu →
                    </a>
                </div>
                <div className="col col-md-5 col-sm-12 container">
                    <div className="row">
                        <div className="col col-md-6 mt-5 ">
                            <img
                                src={interior1}
                                alt="cafe interior bar view"
                                className="mt-5"
                            />
                        </div>
                        <div className="col col-md-6">
                            <img
                                src={interior2}
                                alt="cafe interior hall view"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
