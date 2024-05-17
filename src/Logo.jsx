export function Logo() {
  return (
    <div>
      <a href="#main">
        <img
          className="gtsLogo"
          width="160px"
          src="https://res.cloudinary.com/dytb4ayqj/image/upload/v1710951877/logonooutline_wkak3o.png"
        ></img>
      </a>
      <ul className="gtsLogoList">
        <li id="nav-item-list">
          <a className="nav-link" href="https://www.linkedin.com/in/sarakontalonis/" target="_blank">
            LinkedIn
          </a>
        </li>
        <li id="nav-item-list">
          <a className="nav-link active" href="/SJKResumeGTS.pdf" download>
            CV
          </a>
        </li>
      </ul>
      <p></p>
      <p></p>
    </div>
  );
}
