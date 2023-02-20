import "./Navigation.scss";

function Navigation() {
  return (
    <div className="nav">
      <div className="nav__link-container">
        <div className="nav__link">
          <a href="/p/" className="nav__link">
            Home
          </a>
        </div>
        <div className="nav__link">
          <a href="/p/projects" className="nav__link">
            Projects
          </a>
        </div>
        <div className="nav__link">
          <a href="/p/contact" className="nav__link">
            Contact
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
