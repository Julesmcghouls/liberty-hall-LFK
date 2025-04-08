function Header() {
    return (
        <header className="header">
            <nav className="nav">
                <div className="logo">
                    <span className="logo-text">Liberty Hall</span>
                    <div className="star-field">
                    <div className="stars">
                        </div><img src="/src/assets/stars.png" alt="Star Field" />
                    </div>
                </div>
                <div className="nav-links">
                    <a href="#now-showing">Now Showing</a>
                    <a href="#history">Our History</a>
                    <a href="#about">Contact Us</a>
                </div>
            </nav>
            <div className="hero">
                <h1>From the Ashes to the Stars</h1>
                <p>Historic cinema in Lawrence, Kansas</p>
            </div>
        </header>
    )
}

export default Header;
