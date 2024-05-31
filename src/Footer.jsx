export function Footer() {
  return (
    <div>
      <div className="hideOnComp">
        <ul className="footer">
          <li className="nav-item" id="nav-item">
            <a className="nav-link active" aria-current="page" href="/SJKResumeGTS.pdf" download>
              CV
            </a>
          </li>
          <li className="nav-item" id="nav-item">
            <a className="nav-link">•</a>
          </li>
          <li className="nav-item" id="nav-item">
            <a className="nav-link" href="https://www.linkedin.com/in/sarakontalonis/" target="_blank">
              LinkedIn
            </a>
          </li>
        </ul>
      </div>

      <ul className="footer">
        <li className="nav-item">
          <a className="nav-link">©2024 Growth Talent Pathways</a>
        </li>
      </ul>
    </div>
  );
}
