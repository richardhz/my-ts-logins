const Toolbar = () => {
  return (
    <nav className="navbar navbar-light navbar-expand-lg fixed-top bg-white clean-navbar mb-4">
      <div className="container">
        <a className="navbar-brand logo" href="http://microsoft.com">
          My Logins
        </a>
        <button
          data-bs-toggle="collapse"
          className="navbar-toggler"
          data-bs-target="#navcol-1"
        >
          <span className="visually-hidden">Toggle navigation</span>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navcol-1">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link active" href="new">
                New
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="features">
                Features
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="pricing.html">
                Pricing
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="about-us.html">
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="contact-us.html">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Toolbar;
