import coffee from '../assets/coffee-cup.png'
import cupcake from '../assets/cupcake.png'
import burger from '../assets/burger.png'
import fries from '../assets/fries.png'
import sandwich from '../assets/sandwich.png'
import soup from '../assets/noodle-soup.png'

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
                    <div className="card-body d-flex flex-row align-items-baseline justify-content-between">
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
                    <div className="card-body d-flex flex-row align-items-baseline justify-content-between">
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
                    <div className="card-body d-flex flex-row align-items-baseline justify-content-between">
                        <h5 className="card-title">Chicken Burger</h5>
                        <span className="card-text">$8.99</span>
                    </div>
                </div>
            </div>
            <div className="card-deck" id="menu-group">
                <div className="card" id="card">
                    <img
                        className="card-img-top menu-item"
                        src={fries}
                        alt="sweet potato fries with sauce"
                        id="fries-image"
                    />
                    <div className="card-body d-flex flex-row align-items-baseline justify-content-between">
                        <h5 className="card-title">French Fries</h5>
                        <span className="card-text">$8.99</span>
                    </div>
                </div>
                <div className="card">
                    <img
                        className="card-img-top menu-item"
                        src={sandwich}
                        alt="sandwich with chicken and vegetables"
                        id="card-image"
                    />
                    <div className="card-body d-flex flex-row align-items-baseline justify-content-between">
                        <h5 className="card-title">Chicken Burger</h5>
                        <span className="card-text">$8.99</span>
                    </div>
                </div>
                <div className="card">
                    <img
                        className="card-img-top menu-item"
                        src={soup}
                        alt="chinese soup with rice noodles and parsley"
                        id="soup-image"
                    />
                    <div className="card-body d-flex flex-row align-items-baseline justify-content-between">
                        <h5 className="card-title">Chinese Soup</h5>
                        <span className="card-text">$8.99</span>
                    </div>
                </div>
            </div>
            <div className="button-wrapper">
                <a href="#menu" className="button mt-5 mb-4">
                    View Menu →
                </a>
            </div>
        </div>
    )
}

export default SmallMenu
