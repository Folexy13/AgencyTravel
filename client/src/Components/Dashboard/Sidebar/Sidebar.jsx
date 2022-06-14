import React from "react";
import { useState } from "react";
import "./Sidebar.scss";
import { Container, Row, Col } from "react-bootstrap";
import { IMAGES } from "../../../Constants";
import {
  BoxArrowLeft,
  Cash,
  JournalCheck,
  Person,
  Speedometer,
} from "react-bootstrap-icons";

export const Sidebar = ({ sTitle, ...props }) => {
  const [active, setActive] = useState(false);

  return (
    <div className="dashboard-sidebar h-100">
      <div className="logo mb-5">
        <img src={IMAGES.Logo} alt="img.jpg" className="h-100 w-100" />
      </div>
      <div className="sidebar-content w-100">
        <Container>
          <h6 className="text-muted mb-4">AGENCY-TRAVEL</h6>
          <div className="ms-3">
            <h5>
              <a href="#" className="text-decoration-none text-white">
                <JournalCheck className="me-2" /> APPLICATIONS
              </a>
            </h5>
            <h5>
              <a href="#" className="text-decoration-none text-white">
                <Speedometer className="me-2" /> DASHBOARD
              </a>
            </h5>
            <h5>
              <a href="#" className="text-decoration-none text-white">
                <Cash className="me-2" /> PAYMENT REPORT
              </a>
            </h5>
            <h5>
              <a href="#" className="text-decoration-none text-white">
                <Person className="me-2" /> USER MANAGEMENT
              </a>
            </h5>
          </div>
          <div className="logout ms-3">
            <h5 className="text-danger d-flex align-items-center">
              <a href="#" className="text-decoration-none text-danger">
                <BoxArrowLeft className="me-2" /> LOGOUT
              </a>
            </h5>
          </div>
        </Container>
      </div>
    </div>
  );
};
