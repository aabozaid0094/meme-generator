const Header = (props) => {
    return (
        <header className="app-header">
            <div className="logo-title">
                <img className="logo" src={props.logo_src} />
                <h1 className="header-title">{props.title}</h1>
            </div>
            <div className="subtitle">
                <h2 className="header-subtitle">{props.subtitle}</h2>
            </div>
        </header>
    );
};

export default Header;
