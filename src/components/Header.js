import Navigation from "./Navigation"

function Header(props) {
    return (
        // <div className="card-panel black lighten-2">
        //     <h1 className="red-text text-darken-2">Kimberly Howard</h1>
        //     <Navigation />
        // </div>
        <nav>
            <div className="nav-wrapper">
                <a href="#!" className="brand-logo center">Kimberly Howard</a>
                <Navigation />
            </div>
        </nav>
    );
}

export default Header;