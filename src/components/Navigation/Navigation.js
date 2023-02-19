import "./Navigation.scss";

function Navigation() {
  return (
    <div className="nav">
      <div className="nav__link-container">
        <div className="nav__link">
          <a href="/p/#/p" className="nav__link">
            Home
          </a>
        </div>
        <div className="nav__link">
          <a href="/p/#/p/work" className="nav__link">
            Work
          </a>
        </div>
        <div className="nav__link">
          <a href="/p/#/p/projects" className="nav__link">
            Projects
          </a>
        </div>
        <div className="nav__link">
          <a href="/#/p/contact" className="nav__link">
            Contact
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
