import React from 'react'
import { Dashboard } from '../..'
import { Main } from '../../../Components'
import {InputGroup, FormControl} from 'react-bootstrap';
import './Applications.Styles.scss';
import { BarChart, Calendar, Circle, Download, Mailbox, Person, Phone } from 'react-bootstrap-icons';

export const ApplicationsView = () => {
  return (
    <div>
        <Dashboard>
            <Main>
                <div className="dashboard__content">
                    <div className="dashboard__header">
                        <h2>User Applications</h2>
                        <div className="dashboard__content__left ms-3">
                            <InputGroup className="dash__search">
                                <FormControl type="text" className="border-left-0 py-2" placeholder="19/07/2002" aria-label="Amount (to the nearest dollar)" />
                                <span className="input-group-text border-right-0 bg-primary px-3 py-2 text-white ext"><Calendar /></span>
                            </InputGroup>
                            <div className="sync mx-2 px-3 py-2 bg-primary text-center" style={{height: '36px !important'}}>
                                <Circle stroke='#fff' style={{color: '#fff'}} />
                            </div>
                            <div className="sync mx-2 px-3 py-2 bg-primary text-center" >
                                <BarChart stroke='#fff' style={{color: '#fff'}} />
                            </div>
                        </div>
                    </div>
                    <div className="dashboard__table bg-white mt-4 w-100">
                        <div style={{overflowX: 'auto'}}>
                            <table >
                              
                              <tr className="w-100">
                                <th className='p-4 table__header'>USER</th>
                                <th className='table__header2'>EMAIL</th>
                                <th className='table__header'>PHONE</th>
                                <th className='table__header'>PASSPORT NO</th>
                                <th className='table__header3'>PAYMENT STATUS</th>
                                <th className='table__header'>DETAILS</th>
                                <th className='table__header'></th>
                                   
                              </tr>
                                <tr className='bg-light'>
                                    <td className="text-primary p-4">
                                        <div className="d-flex align-items-center" style={{wordBreak: 'break-word'}}>
                                            <Person className='me-2' />
                                            Samson
                                        </div>  
                                    </td>
                                    <td>
                                       <div className="d-flex align-items-center" style={{wordBreak: 'break-word'}}>
                                       <Mailbox className='me-2' />
                                       ooopap@gmail.com
                                       </div>
                                    </td>
                                    <td><div className="d-flex align-items-center" style={{wordBreak: 'break-word'}}><Phone className='me-2' />089991873</div></td>
                                    <td>98928</td>
                                    <td> <span className="status pending py-2 px-2 bg-warning text-dark rounded">Pending</span></td>
                                    <td><a href="/" className='py-2 px-1 bg-dark text-white rounded'>View details</a></td>
                                    <td><a className='py-2 px-2 bg-danger text-white rounded' href="https://res.cloudinary.com/folajimidev/image/upload/fl_attachment:AGENCY-TRAVEL/v1654609111/Images/zna0q9f004qpej6htmpf.png" download=""><Download className='me-2'/>Download Documents</a></td>
                                </tr>
                             
                            </table>
                                {/* <table>
                                    <tr className="w-100">
                                <th className="">USER</th>
                                <th>EMAIL</th>
                                <th>PHONE</th>
                                <th>PASSPORT NO</th>
                                <th>PAYMENT STATUS</th>
                                <th>DETAILS</th>
                                <th></th>
                                   
                              </tr>
                                </table>
                                <div className="none">
                                No User available
                                </div> */}
                        </div> 
                          
                          
                    </div>
                </div>
            </Main>
        </Dashboard>
    </div>
  )
}
