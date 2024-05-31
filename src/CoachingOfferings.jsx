export function CoachingOfferings() {
  return (
    <div>
      {/* <h2 className="headertitle" id="background-phone">
        About:
        <br></br>
        <div className="liner"></div>
      </h2> */}

      <div className="bodycontainer">
        <p>
          <h2 className="headertitle">
            Coaching Offerings
            <span className="subtitle"> </span>
            <div className="liner"></div>
          </h2>
          <span className="subtitle">
            A tailored plan for each client will consist of the following focus areas, depending on need:
          </span>
          <ul className="coachingList">
            <li>
              <span className="firstWord">Front end personalized consultation</span>
              <ul>
                understanding pressure points, frustrations, roadblocks, stressors- what’s holding them back from taking
                next step actions?
              </ul>
            </li>
            <li>
              <span className="firstWord"> Daily habits </span>
              <ul>
                {" "}
                go to work mentality /establishing balance Entering the real world/job search strategy Goal setting-
                helping to align long term goals to short term actions.
              </ul>
            </li>
            <li>
              <span className="firstWord">Brag sheet </span>
              <ul>how they see themselves, highlighting areas of confidence</ul>
            </li>
            <li>
              {" "}
              <span className="firstWord">
                Establishing/Improving executive functioning skills Accountability practices{" "}
              </span>{" "}
              <ul>daily, weekly, bi weekly, monthly, etc.</ul>
            </li>
            <li>
              {" "}
              <span className="firstWord">Assistance with Target Lists Resume/Cover Letter review </span>
              <ul>
                <li>AI Optimization</li> <li>Networking 101</li>
                <li>
                  Pre/Post Interview preparation- role play, questions for interviewer, prep,wardrobe consult-
                  presenting oneself in all ways.
                </li>
              </ul>
            </li>
            <li>
              <span className="firstWord">Establish follow up/post interview routine</span>
            </li>
            <li>
              <span className="firstWord">Overcoming negativity</span>
            </li>
          </ul>
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
