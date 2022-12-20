import interior1 from '../assets/cafe-picture.png'
import interior2 from '../assets/cafe-picture-2.png'

const About = () => {
    return (
        <div className="about container mt-5">
            <div className="row">
                <div className="col-md-7">
                    <h2>LEARN MORE ABOUT US</h2>

                    <span>We source sustainable &amp; line caught Foods</span>
                    <span class="">
                        Edit this text to make it your own. To edit, simply
                        click directly on the text to start adding your own
                        words. You can move the text by dragging and dropping
                        the text anywhere on the page.
                    </span>
                    <div className="facts container">
                        <div className="row">
                            <div className="col d-flex flex-column">
                                <span class="">10+ People</span>
                                <span class="">We are Small Team</span>
                                <span>
                                    Through True Rich Attended does no end it
                                    his mother since favourable.
                                </span>
                            </div>

                            <div className="col d-flex flex-column">
                                <span class="">2014</span>
                                <span class="">Open almost 10 years</span>
                                <span>
                                    Through True Rich Attended does no end it
                                    his mother since favourable.
                                </span>
                            </div>

                            <div className="col d-flex flex-column">
                                <span class="">10+ People</span>
                                <span class="">We are Small Team</span>
                                <span>
                                    Through True Rich Attended does no end it
                                    his mother since favourable.
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-2">
                    <img
                        src={interior1}
                        alt="cafe interior bar view"
                        className="mt-5"
                    />
                </div>
                <div className="col-md-2">
                    <img src={interior2} alt="cafe interior hall view" />
                </div>
            </div>{' '}
        </div>
    )
}

export default About
