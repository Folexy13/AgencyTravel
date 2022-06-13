import React from 'react'
import { Main } from '../../../Components'
import { Sidebar } from '../../../Components'
import './DashboardStyles.scss'
import {Container, Row, Col} from 'react-bootstrap'
export const DashboardView = (props) => {
  return (
    <div className='dashboard'>
        <Row className='h-100'>
          <Col lg={2} className='sidebar__col'>
            <Sidebar/>
          </Col>
          <Col lg={10}>
            <Main>
              {props.children}
            </Main>
          </Col>
        </Row>
    </div>
  )
}
