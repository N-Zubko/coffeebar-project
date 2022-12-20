import interior1 from '../assets/cafe-picture.png'
import interior2 from '../assets/cafe-picture-2.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faBurger,
    faCoffee,
    faBirthdayCake,
    faMartiniGlass,
    faDrumstickBite,
    faCookieBite,
} from '@fortawesome/free-solid-svg-icons'

const OfferGrid = () => {
    return (
        <div className="offer-grid container" id="about">
            <h2 className="d-inline">
                WHAT WE ARE SERVING{' '}
                <h2 className="d-inline p-2 line" aria-hidden="true">
                    ⸺
                </h2>
            </h2>
            <div className="row mt-5">
                <div className="col col-md-7 col-sm-12">
                    <h3 className="top-heading">
                        We all have to eat, so why not do it beautifully?
                    </h3>
                </div>
                <div className="col col-md-5 col-sm-12">
                    <p className=" mt-2">
                        Through True Rich Attended does no end it his mother
                        since favourable real had half every him case in
                        packages enquire we up ecstatic.. Through True Rich
                        Attended does no end it his mother
                    </p>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col col-md-4 col-sm-10 offer-col">
                    <FontAwesomeIcon icon={faBirthdayCake} className="icon" />
                    <h4>Quafe Cake</h4>
                    <p>
                        Through True Rich Attended no end it his mother since
                        favourable real had half every him.
                    </p>
                </div>
                <div className="col col-md-4 col-sm-10 offer-col">
                    <FontAwesomeIcon icon={faCoffee} className="icon mb-2" />
                    <h4>Coffee</h4>
                    <p>
                        Through True Rich Attended no end it his mother since
                        favourable real had half every him.
                    </p>
                </div>
                <div className="col col-md-4 col-sm-10 offer-col">
                    <FontAwesomeIcon icon={faBurger} className="icon" />
                    <h4>Fast Food</h4>
                    <p>
                        Through True Rich Attended no end it his mother since
                        favourable real had half every him. Through True Rich
                        Attended no end it his mother since favourable real had
                        half every him.
                    </p>
                </div>
            </div>
            <div className="row mt-2">
                <div className="col col-md-4 col-sm-10 offer-col">
                    <FontAwesomeIcon icon={faMartiniGlass} className="icon" />
                    <h4>Cocktails</h4>
                    <p>
                        Through True Rich Attended no end it his mother since
                        favourable real had half every him.
                    </p>
                </div>
                <div className="col col-md-4 col-sm-10 offer-col">
                    <FontAwesomeIcon icon={faDrumstickBite} className="icon" />
                    <h4>Grill</h4>
                    <p>
                        Through True Rich Attended no end it his mother since
                        favourable real had half every him.
                    </p>
                </div>
                <div className="col col-md-4 col-sm-10 offer-col">
                    <FontAwesomeIcon icon={faCookieBite} className="icon" />

                    <h4>Snacks</h4>
                    <p>
                        Through True Rich Attended no end it his mother since
                        favourable real had half every him.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default OfferGrid
