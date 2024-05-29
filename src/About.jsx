export function About() {
  return (
    <div>
      <h2 className="headertitle" id="background-square">
        About: <span className="subtitle">You Are Not Alone</span>
        <div className="liner"></div>
      </h2>

      <h2 className="headertitle" id="background-phone">
        About:
        <br></br>
        <div className="liner"></div>
      </h2>

      <div className="bodycontainer">
        <p>
          <span className="emphasizep">
            {" "}
            Transitioning from college to a professional environment can be intimidating and challenging to know where
            to start.{" "}
          </span>
          With guidance from someone who has an extensive background in recruiting and networking, it becomes much less
          painless. Workforce skills support not only the transition from school to work, but will benefit you
          throughout your career.
        </p>
        {/* <br></br>
        <p>
          <span className="emphasizep">Workforce skills </span> support not only the transition from school to work, but
          will benefit you throughout your career.
        </p> */}
      </div>
    </div>
  );
}
