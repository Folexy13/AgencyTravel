// @flow

import React from "react";
import { RegisterView } from "./RegisterView";
export default class RegisterController extends React.Component {
  render() {
    return <RegisterView {...this.props} />;
  }
}
