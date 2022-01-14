import React, { useEffect } from 'react';

import Store from '../../redux/store'
import Navbar from 'react-bootstrap/Navbar'
import Offcanvas from 'react-bootstrap/Offcanvas'

import { connect } from 'react-redux';
import { actions } from '../../redux/actions/action';
import Search from '../Search';
import initialDetails from '../../data/initialDetails';
import background_image from '../../data/imges/backgroundImg.jpg'
import { Container, Row, Col } from 'react-grid-system';
import { Form, FormControl, Nav, Button, NavDropdown, Image } from "react-bootstrap";



export function Hamborger(props) {



    return (
        <>
            <Navbar style={{
                position: 'sticky',
                top: '0',
                zIndex: 1020,


            }} bg="dark" expand={false} variant="dark">
                <Container fluid>
                    <Navbar.Brand href="#"></Navbar.Brand>
                    <Navbar.Toggle aria-controls="offcanvasNavbar" className='mr-0 pr-0' />
                    <Navbar.Offcanvas
                        id="offcanvasNavbar"
                        aria-labelledby="offcanvasNavbarLabel"
                        placement="top"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id="offcanvasNavbarLabel"></Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>

                            <Nav
                                className="me-auto my-2 my-lg-0 linksNuv"
                                style={{ maxHeight: 'fit-content' }}
                                navbarScroll
                            >
                                <Nav.Link className=" hoverLink" href="/home/organizationsAndCompanies">ארגונים וחברות</Nav.Link>
                                <Nav.Link className=" hoverLink" href="/home/orders">הזמנות</Nav.Link>

                                <Nav.Link className=" hoverLink" href="/home/recommend">ממליצים</Nav.Link>
                                <NavDropdown className="hoverLink" title="תפריטים" id="navbarScrollingDropdown" style={{ direction: "rtl" }}>

                                    <NavDropdown.Item href="/home/menu/bakery" style={{ textAlign: 'center' }}> בייקרי</NavDropdown.Item>
                                    <NavDropdown.Item href="/home/menu/weekday" style={{ textAlign: 'center' }}>סקופ אמצ"ש</NavDropdown.Item>
                                    <NavDropdown.Item href="/home/menu/holidays" style={{ textAlign: 'center' }}>   מתחם חגים  </NavDropdown.Item>
                                    <NavDropdown.Item href="/home/menu/salads" style={{ textAlign: 'center' }}>סלטים </NavDropdown.Item>
                                </NavDropdown>
                                <Nav.Link className=" hoverLink" href="/home/shop" >
                                    חנות
                                </Nav.Link>
                                <Nav.Link className=" hoverLink" href="/home/events" >
                                    אירועים
                                </Nav.Link>


                                <NavDropdown className=" hoverLink" title=" סקופ קייטרינג" id="navbarScrollingDropdown" style={{ direction: "rtl" }}>
                                    <NavDropdown.Item href="/home/ourStory" style={{ textAlign: 'center' }}>הסיפור שלנו</NavDropdown.Item>
                                    <NavDropdown.Item href="/home/ourCustomers" style={{ textAlign: 'center' }}>לקוחותינו</NavDropdown.Item>
                                    <NavDropdown.Item href="/home/ourPeeks" style={{ textAlign: 'center' }}> הצוות שלנו </NavDropdown.Item>
                                    <NavDropdown.Item href="/home/contactUs" style={{ textAlign: 'center' }}>צור קשר</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>


                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>



        </>
    );
}
const mapStateToProps = (state) => {
    return {

    };
}

const mapDispatchToProps = (dispatch) => ({


})
export default connect(mapStateToProps, mapDispatchToProps)(Hamborger)