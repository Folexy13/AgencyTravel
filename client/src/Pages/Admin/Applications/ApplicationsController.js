// @flow

import React from "react";
import { ApplicationsView } from "./ApplicationsView";
export default class RegisterController extends React.Component {
  render() {
    return <ApplicationsView {...this.props} />;
  }
}
