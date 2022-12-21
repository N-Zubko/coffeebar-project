import coffee from '../assets/coffee-cup.png'
import cupcake from '../assets/cupcake.png'
import burger from '../assets/burger.png'
import fries from '../assets/fries.png'
import sandwich from '../assets/sandwich.png'
import soup from '../assets/noodle-soup.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faBurger,
    faCoffee,
    faBirthdayCake,
    faMartiniGlass,
    faDrumstickBite,
    faCookieBite,
} from '@fortawesome/free-solid-svg-icons'

const SmallMenu = () => {
    return (
        <div className="small-menu container mt-5" id="menu">
            <h2 className="d-inline">
                OUR MENU{' '}
                <h2 className="d-inline p-2 line" aria-hidden="true">
                    ⸺
                </h2>
            </h2>
            <div className="row mt-5">
                <div className="col col-md-7 col-sm-12">
                    <h3 className="top-heading">Discover our menu chart</h3>
                    <h4 className="most-popular mt-5">Most Popular Picks</h4>
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
            <div className="card-deck mt-5" id="menu-group">
                <div className="card" id="card">
                    <img
                        className="card-img-top menu-item"
                        id="card-image"
                        src={coffee}
                        alt="coffee without cream and sugar"
                    />
                    <div className="card-body">
                        <h5 className="card-title">Drp Coffee</h5>
                        <span className="card-text">$8.99</span>
                    </div>
                </div>
                <div className="card">
                    <img
                        className="card-img-top menu-item"
                        src={cupcake}
                        alt="chocolate cupcake with mint cream and a piece of chocolate"
                        id="card-image"
                    />
                    <div className="card-body">
                        <h5 className="card-title">Choco Cupcake</h5>
                        <span className="card-text">$8.99</span>
                    </div>
                </div>
                <div className="card">
                    <img
                        className="card-img-top menu-item"
                        src={burger}
                        alt="chicken burger"
                        id="card-image"
                    />
                    <div className="card-body">
                        <h5 className="card-title">Chicken Burger</h5>
                        <span className="card-text">$8.99</span>
                    </div>
                </div>
            </div>
            <div className="card-deck" id="menu-group">
                <div className="card" id="card">
                    <img
                        className="card-img-top menu-item"
                        id="card-image"
                        src={coffee}
                        alt="coffee without cream and sugar"
                    />
                    <div className="card-body">
                        <h5 className="card-title">Drp Coffee</h5>
                        <span className="card-text">$8.99</span>
                    </div>
                </div>
                <div className="card">
                    <img
                        className="card-img-top menu-item"
                        src={cupcake}
                        alt="chocolate cupcake with mint cream and a piece of chocolate"
                        id="card-image"
                    />
                    <div className="card-body">
                        <h5 className="card-title">Choco Cupcake</h5>
                        <span className="card-text">$8.99</span>
                    </div>
                </div>
                <div className="card">
                    <img
                        className="card-img-top menu-item"
                        src={burger}
                        alt="chicken burger"
                        id="card-image"
                    />
                    <div className="card-body">
                        <h5 className="card-title">Chicken Burger</h5>
                        <span className="card-text">$8.99</span>
                    </div>
                </div>
            </div>
            <a href="#" className="button mt-5 mb-4">
                View Menu →
            </a>
        </div>
    )
}

export default SmallMenu
