import cafe from '../assets/cafe-table-bun.png'

const HeaderHome = () => {
    return (
        <header className="header container">
            <div className="row justify-content-md-between">
                <div class="col-md-6 d-flex flex-column align-self-center ">
                    <h2 className="visually-hidden">Header</h2>
                    <h3 className="top-heading mt-2">
                        We serve high quality foods of all kinds.
                    </h3>
                    <span className="mt-2">
                        Edit this text to make it your own. To edit, simply
                        click directly on the text to start adding your own
                        words. You can move the text by dragging and dropping
                        the text
                    </span>
                    <a href="#" className="button mt-4 mb-4">
                        View Menu →
                    </a>
                    <section className="short-info">
                        <h3 className="mb-2">Opening Times</h3>
                        <span>Sunday to Saturday | 09:00 AM to 11:00 PM</span>
                        <h3 className="mt-3 mb-2">Location</h3>
                        <span>Master canteen, BBSR , Odisha 752054</span>
                        <h3 className="mt-3 mb-2">Call us</h3>
                        <span>+9776462441</span>
                    </section>
                </div>
                <div class="col-md-6">
                    <img src={cafe} alt="coffee and bun from Cafe menu" />
                </div>
            </div>
        </header>
    )
}
export default HeaderHome
