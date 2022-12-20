import interior1 from '../assets/cafe-picture.png'
import interior2 from '../assets/cafe-picture-2.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTextLeft, faCoffee } from '@fortawesome/fontawesome-free-solid'

const About = () => {
    return (
        <div className="about container mt-5">
            <div className="row mt-2">
                <div className="col col-md-7">
                    <h2 className="d-inline">
                        LEARN MORE ABOUT US{' '}
                        <h2 className="d-inline p-2" aria-hidden="true">
                            ⸺
                        </h2>
                    </h2>

                    <h3 className="top-heading mt-3 mb-3">
                        We source sustainable &amp; line caught Foods
                    </h3>
                    <p>
                        Edit this text to make it your own. To edit, simply
                        click directly on the text to start adding your own
                        words. You can move the text by dragging and dropping
                        the text anywhere on the page.
                    </p>
                    <div className="facts container mt-4">
                        <div className="row mt-3">
                            <div className="col col-md-4 d-flex flex-column justify-content-center align-self-start">
                                <FontAwesomeIcon
                                    icon={faCoffee}
                                    className="mug mb-2"
                                />

                                <h4 className="fact-heading">10+ People</h4>
                                <p className="mt-3 fact-description">
                                    Through True Rich Attended does no end it
                                    his mother since favourable.
                                </p>
                            </div>

                            <div className="col col-md-4 d-flex flex-column justify-content-center align-self-start">
                                <FontAwesomeIcon
                                    icon="coffee"
                                    className="mug mb-2"
                                />
                                <h4 className="fact-heading">Since 2014</h4>
                                <p className="mt-3 fact-description">
                                    Through True Rich Attended does no end it
                                    his mother since favourable.
                                </p>
                            </div>

                            <div className="col col-md-4 d-flex flex-column justify-content-center align-self-start">
                                <FontAwesomeIcon
                                    icon={faCoffee}
                                    className="mug mb-2"
                                />

                                <h4 className="fact-heading">200K Clients</h4>
                                <p className="mt-3 fact-description">
                                    Through True Rich Attended does no end it
                                    his mother since favourable.
                                </p>
                            </div>
                        </div>
                    </div>
                    <a href="#" className="button mt-5 mb-4">
                        View Menu →
                    </a>
                </div>
                <div className="col col-md-5 container">
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
