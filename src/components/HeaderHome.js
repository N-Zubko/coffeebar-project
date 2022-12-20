import cafe from '../assets/cafe-table-bun.png'

const HeaderHome = () => {
    return (
        <header className="header container" id="home">
            <div className="row justify-content-md-between">
                <div class="col-md-6 d-flex flex-column align-self-center ">
                    <h2 className="visually-hidden">Header</h2>
                    <h3 className="top-heading mt-2">
                        We serve a selection of coffee and cocktails
                    </h3>
                    <span className="mt-2">
                        Coffee Espresso Yourself is a warm and welcoming space
                        where you can enjoy a wide range of drinks and food.
                        Whether you're looking for freshly brewed coffee and
                        pastries to craft beers and cocktails, as well as small
                        plates and sandwiches, we have something for everyone.
                    </span>
                    <a href="#" className="button mt-4 mb-4">
                        View Menu →
                    </a>
                    <section className="short-info">
                        <h3 className="mb-2">Opening Times</h3>
                        <span>Sunday to Saturday | 09:00 AM to 11:00 PM</span>
                        <h3 className="mt-3 mb-2">Location</h3>
                        <span>
                            Master canteen, 4212 Feathers Hooves Drive, NY 11717
                        </span>
                        <h3 className="mt-3 mb-2">Call us</h3>
                        <span>(631) 625-6181</span>
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
