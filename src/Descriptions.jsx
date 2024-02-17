import { useState } from "react";

export function Descriptions() {
  const [showText1, setShowText1] = useState(true);
  const [showText2, setShowText2] = useState(true);
  const [showText3, setShowText3] = useState(true);

  const handleShowText1 = () => {
    if (showText1 == false) setShowText1(true);
    else {
      setShowText1(false);
      setShowText2(true);
      setShowText3(true);
    }
  };

  const handleShowText2 = () => {
    if (showText2 == false) setShowText2(true);
    else {
      setShowText2(false);
      setShowText1(true);
      setShowText3(true);
    }
  };
  const handleShowText3 = () => {
    if (showText3 == false) setShowText3(true);
    else {
      setShowText3(false);
      setShowText2(true);
      setShowText1(true);
    }
  };

  return (
    <div className="descriptiontext">
      <h4>check out our holistic model:</h4>
      <a
        onClick={() => {
          handleShowText1();
        }}
      >
        FRACTIONAL
      </a>

      <p hidden={showText1}>
        {" "}
        As a Fractional recruiter, I am a high-level experienced freelancer in talent acquisition focusing on matching
        candidates with company's cultures beyond the position description. I have deep experience with candidate
        outreach and candidate attraction, interviewing and assessment with excellent relationship building and
        networking skills.
      </p>
      <a
        onClick={() => {
          handleShowText2();
        }}
      >
        COST SAVINGS
      </a>
      <p hidden={showText2}>
        {" "}
        I can help develop an organizational culture at a minimum cost and can help you understand how engaged your
        employees are resulting in higher retention rates. As part of the recruitment process, I will spend time with
        your employees, understand your business and assess your culture to help give you recommendations for
        improvement.
      </p>
      <a
        onClick={() => {
          handleShowText3();
        }}
      >
        {" "}
        HIGH TOUCH
      </a>
      <p hidden={showText3}>
        {" "}
        My diverse expertise includes various skill sets and will allow you to focus on more relevant parts of your
        business and am flexible enough to work with any kind of leadership and set of employees.
      </p>
    </div>
  );
}
