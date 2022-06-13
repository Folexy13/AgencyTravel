import React from "react";
import PropTypes from "prop-types";
import { FormController } from "./FormController";
import { IMAGES } from "../../Constants";
import "./index.scss";
import img from "../../assets/images/logo.png";

export const Form = ({ bgImg, type, ...props }) => {
  return (
    <div className="form-component">
      <div className="flex">
        <div className="firstsection">
          <FormController />
        </div>
        <div className="secondsection"></div>
      </div>
    </div>
  );
};

Form.propTpes = {
  bgImg: PropTypes.string,
  type: PropTypes.string,
};

Form.defaultProps = {
  bgImg: IMAGES.bgImage,
  type: "",
};
