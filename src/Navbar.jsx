import "./navbar.css";

export function Navbar() {
  return (
    <nav className="navbar navbar-light fixed-top">
      <div className="container-fluid">
        <button
          className="navbar-toggler2"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
        >
          <img
            className="gtsLogo"
            width="160px"
            src="https://res.cloudinary.com/dytb4ayqj/image/upload/v1710951877/logonooutline_wkak3o.png"
          ></img>
        </button>
        <div
          className="offcanvas offcanvas-end"
          tabindex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <button type="button" data-bs-dismiss="offcanvas" aria-label="Close">
              <img
                className="gtsLogo"
                width="160px"
                src="https://res.cloudinary.com/dytb4ayqj/image/upload/v1710951877/logonooutline_wkak3o.png"
              ></img>
            </button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/src/assets/SJKResumeGTS.pdf" download>
                  CV
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="https://www.linkedin.com/in/sarakontalonis/" target="_blank">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
