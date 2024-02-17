import axios from "axios";
import { useState } from "react";

export function EmailForm() {
  const [errors, setErrors] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    setErrors([]);
    axios
      .post("https://ecrebocpremail.fly.dev/contact_form", params)
      .then((response) => {
        console.log(response.data);
        event.target.reset();
        window.location.href = "/";
      })
      .catch((errors) => {
        console.log(errors.response);
        setErrors(["Invalid email or password"]);
      });
  };

  return (
    <div className="contactwrapper">
      <div id="contactform">
        <h1 className="contactheader">Contact Us</h1>
        <ul>
          {errors.map((error) => (
            <li key={error}>{error}</li>
          ))}
        </ul>
        <form onSubmit={handleSubmit}>
          <div>
            <input name="email" className="form-control" type="email" defaultValue="e-mail" />
          </div>
          <div>
            <input name="name" className="form-control" type="string" defaultValue="your name" />
          </div>

          <div>
            <input name="message" className="form-control" type="text" defaultValue="message" />
          </div>

          <button className="submitbutton">Submit</button>
        </form>
      </div>
    </div>
  );
}
