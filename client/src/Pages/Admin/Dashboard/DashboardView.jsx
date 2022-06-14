import React from "react";
import { Main } from "../../../Components";
import { Sidebar } from "../../../Components";
import "./DashboardStyles.scss";
import { Row, Col } from "react-bootstrap";
import { IMAGES } from "../../../Constants";
import { List, Search } from "react-bootstrap-icons";
export const DashboardView = (props) => {
  return (
    <div className="dashboard">
      <Row className="h-100">
        <Col lg={2} className="sidebar__col">
          <Sidebar />
        </Col>
        <Col lg={10}>
          <div class="main__header shadow">
            <div class="main__left d-flex gap-4 align-items-center">
              <List className="me-2 harmburger" />
              <div class="input-group main__search">
                <span class="input-group-text border-right-0 ext">
                  <Search className="me-2" />
                </span>
                <input
                  type="text"
                  class="form-control border-left-0"
                  aria-label="Amount (to the nearest dollar)"
                />
                <button type="submit" class="submit btn btn-primary">
                  Submit
                </button>
              </div>
            </div>
            <div class="main__right">
              <div class="right__flex">
                <div class="search__icon">
                  <Search className="me-2" />
                </div>
                <div class="avatar__img ms-3">
                  <img src={IMAGES.Admin} alt="Avatar" class="avatar" />
                  <div class="avatar__text ms-2">
                    <h5 class="text-secondary mb-0">Deji Richard</h5>
                    <small>Admin</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Main>{props.children}</Main>
        </Col>
      </Row>
    </div>
  );
};
