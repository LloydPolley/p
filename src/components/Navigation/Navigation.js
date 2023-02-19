import "./Navigation.scss";

function Navigation() {
  return (
    <div className="nav">
      <div className="nav__link-container">
        <div className="nav__link">
          <a href="/#/lwp-portfolio" className="nav__link">
            Home
          </a>
        </div>
        <div className="nav__link">
          <a href="/#/lwp-portfolio/work" className="nav__link">
            Work
          </a>
        </div>
        <div className="nav__link">
          <a href="/#/lwp-portfolio/projects" className="nav__link">
            Projects
          </a>
        </div>
        <div className="nav__link">
          <a href="/#/lwp-portfolio/contact" className="nav__link">
            Contact
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
