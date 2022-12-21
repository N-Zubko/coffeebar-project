import cafeOwner from '../assets/cafe-owner.png'
import coffeeMachine from '../assets/coffee-machine.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons'

const VideoBlock = ({ changeVideoModalVisibility }) => {
    return (
        <div className="container video-block mt-5">
            <div className="row d-flex justify-content-around align-items-center">
                <section className="col col-md-5 col-sm-10">
                    <q>
                        We have mastered the right balance of beans, water, and
                        brewing time to guarantee delight to the senses.
                    </q>
                    <figcaption className="mt-4">
                        <div className="caption-block">
                            <p>Joheny Andro</p>
                            <small>Owner of Coffee Espresso Yourself</small>
                        </div>
                        <div className="quote-author">
                            <img
                                src={cafeOwner}
                                alt="Joheny Andro, the owner of Espresso Yourself"
                                className="owner-image"
                            />
                        </div>
                    </figcaption>
                    <hr />
                </section>
                <div className="col col-sm-12 col-md-7">
                    <img
                        src={coffeeMachine}
                        alt="coffee machine thumbnail"
                        onClick={changeVideoModalVisibility}
                    />
                    {/* <FontAwesomeIcon icon={faCirclePlay} className="icon" /> */}
                </div>
            </div>
        </div>
    )
}

export default VideoBlock
