import screamGif from "../assets/scream.gif";

function Hero() {
    return(
        <section id="hero">
            <div className="hero-content">
                <p className="small-Heading">HORROR CINEMA ARCHIVE</p>
                <h1>Horror, preserved on film.</h1>

                <p className="hero-description">Explore slashers, paranormals, psychological thrillers, and zombies of the night.</p>

                <a href="#archive" className="hero-btn">Enter The Archive</a>
            </div>

            <div className="hero-image">
                <img src={screamGif} alt="Scream gif" />
            </div>
        </section>
    );
}

export default Hero;