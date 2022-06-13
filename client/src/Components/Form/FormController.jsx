import React, {useRef} from "react";
import { EyeSlashFill } from 'react-bootstrap-icons';
import "./index.scss";
export const FormController = ({ ...props }) => {
  const pass = useRef();
  const show = () => {
    if (pass.current.type === "password") {
      pass.current.type = "text";
    } else {
      pass.current.type = "password";
    }
  }
  return <div className="agency-formcontroller">
    <div className="form-container">
      <form action="/">
        <h2>Admin</h2>
        <div className="form-content">
          <input type="text" name='name' placeholder="Name" />
          <input type="email" name="email" placeholder="Email" />
          <div className="passField">
          <input type="password" placeholder="Password" ref={pass} />
          <EyeSlashFill className="eye" onClick={show} />
          </div>
          <input type="text" placeholder="Phone number" />
          <button>Submit</button>
        </div>
      </form>
    </div>
  </div>;
};
