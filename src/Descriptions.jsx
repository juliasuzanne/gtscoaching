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
      <a
        onClick={() => {
          handleShowText1();
        }}
      >
        <img
          className="gtsLogo"
          width="160px"
          src="https://res.cloudinary.com/dytb4ayqj/image/upload/v1710951877/logonooutline_wkak3o.png"
        ></img>
      </a>

      <ul hidden={showText1} className="listItems">
        <li>
          <a href="/src/assets/SJKResumeGTS.pdf" download>
            CV
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/sarakontalonis/" target="_blank">
            LinkedIn
          </a>
        </li>
      </ul>
    </div>
  );
}
