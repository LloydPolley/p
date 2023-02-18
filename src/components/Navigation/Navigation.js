import "./Navigation.scss";

function Navigation() {
  return (
    <div className="nav">
      <div className="nav__link-container">
        <div className="nav__link">
          <a href="/" className="nav__link">
            Home
          </a>
        </div>
        <div className="nav__link">
          <a href="/work" className="nav__link">
            Work
          </a>
        </div>
        <div className="nav__link">
          <a href="/projects" className="nav__link">
            Projects
          </a>
        </div>
        <div className="nav__link">
          <a href="/contact" className="nav__link">
            Contact
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
