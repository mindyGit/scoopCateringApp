import React, { useEffect, useState } from 'react';
import Header from '../interface-user/Header';
// import AppFirebase from '../Firebase/AppFirebase'
import Store from '../../redux/store'
import Navbar from 'react-bootstrap/Navbar'
import Offcanvas from 'react-bootstrap/Offcanvas'

import { connect } from 'react-redux';
import { actions } from '../../redux/actions/action';
// import Search from '../Search';
import initialDetails from '../../data/initialDetails';
import background_image from '../../data/imges/backgroundImg.jpg'
import { Container, Row, Col } from 'react-grid-system';
import { Form, FormControl, Nav, Button, NavDropdown, Image, Card } from "react-bootstrap";
import { withRouter, Link, useHistory } from 'react-router-dom';
import { useAuth } from "../../contexts/AuthContext"
import Collapse from 'react-bootstrap/Collapse'
import AppFirebase from '../Firebase/AppFirebase';



export function Hamborger(props) {
    const [open, setOpen] = useState(false);

    // const [error, setError] = useState("")
    // const { currentUser, logout } = useAuth()
    // const history = useHistory()

    // async function handleLogout() {
    //     setError("")

    //     try {
    //         await logout()
    //         history.push("/login")
    //     } catch {
    //         setError("Failed to log out")
    //     }
    // }

    return (
        <>

            <Navbar style={{
                position: 'sticky',
                top: '0',
                zIndex: 1020,


            }} bg="dark" expand={false} variant="dark">
                <Container fluid className='m-0 p-0 d-flex'>

                    <Navbar.Brand href="#"></Navbar.Brand>
                    <Navbar.Toggle aria-controls="offcanvasNavbar" className='mr-0 px-0' />
                    <div className="registerSection  d-flex">
                        <Button
                            className=""
                            onClick={() => setOpen(!open)}
                            aria-controls="example-collapse-text"
                            aria-expanded={open}
                        >

                        </Button>

                        <Collapse in={open}>
                            <div id="example-collapse-text" style={{ position: 'absolute', zIndex: '99999', top: '130px' }}>
                                <Card body  >
                                    <div className="">
                                        <AppFirebase />

                                    </div>

                                </Card>
                            </div>
                        </Collapse>
                    </div>


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
                                className=" my-2 my-lg-0 linksNuv"
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