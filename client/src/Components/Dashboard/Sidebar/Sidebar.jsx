import React from 'react';
import { useState } from 'react';
import './Sidebar.scss';
import {Container, Row, Col} from 'react-bootstrap';
import { IMAGES } from '../../../Constants';
import { Signal } from 'react-bootstrap-icons';

export const Sidebar = () => {
    const [active,setActive] = useState(false)
  return (
    <div className='dashboard-sidebar h-100'>
        <div className="logo mb-5">
          <img src={IMAGES.Logo} alt="img.jpg" className='h-100 w-100' />
        </div>
        <div className="sidebar-content w-100">
          <Container>
            <h6 className='text-muted mb-4'>AGENCY-TRAVEL</h6>
            <div className="ms-3">
              <h5><a href="/" className="text-decoration-none text-white">APPLICATIONS</a></h5>
              <h5><a href="/" className="text-decoration-none text-white">DASHBOARD</a></h5>
              <h5><a href="/" className="text-decoration-none text-white">PAYMENT REPORT</a></h5>
              <h5><a href="/" className="text-decoration-none text-white">USER MANAGEMENT</a></h5>
            </div>
            <div className="logout ms-3">
              <h5 className='text-danger d-flex align-items-center'><Signal className='me-2'/> LOGOUT</h5>
            </div>
          </Container>
        </div>
    </div>
  )
}
