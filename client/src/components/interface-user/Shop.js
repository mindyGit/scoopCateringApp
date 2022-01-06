import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import '../../App.css';
import { connect } from 'react-redux';
import Store from '../../redux/store'
import { actions } from '../../redux/actions/action';
import Search from '../Search';
import Nuv from '../mainPage/Nuv'
import Header from '../mainPage/Header'
import Footer from '../mainPage/Footer';
import UnderFooter from '../mainPage/UnderFooter'
import underLogo from '../../data/imges/underLogo.png'
import logo from '../../data/imges/logo.png'

import headerBgImag from '../../data/imges/headerBgImag.png'
import useMediaQuery from "../../hooks/useMediaQuery";
import { Container, Form, FormControl, Nav, Button, NavDropdown, Image, Dropdown, DropdownButton, ButtonGroup } from "react-bootstrap"
import Navbar from 'react-bootstrap/Navbar'
import Offcanvas from 'react-bootstrap/Offcanvas'
import Extras from '../../data/imges/foodCategories/Extras.png'
import fish from '../../data/imges/foodCategories/fish.png'
import salads from '../../data/imges/foodCategories/salads.png'
import shabat from '../../data/imges/foodCategories/shabat.png'
import desserts from '../../data/imges/foodCategories/desserts.png'
import mainCourses from '../../data/imges/foodCategories/mainCourses.png'
import products_ from '../../data/imges/foodCategories/products.png'





export function Shop(props) {

    const isMobile = useMediaQuery(768);
    const isTablet = useMediaQuery(1024);

    const products = Store.getState().productReducer.products

    return (
        <>
            {/* <Search details={products} /> */}
            <div className="pageNuv">
                {isTablet && (
                    <div style={{

                    }}>
                        <Navbar bg="black" expand={false} variant="dark">
                            <Container fluid>
                                <Navbar.Brand href="#"></Navbar.Brand>
                                <Navbar.Toggle aria-controls="offcanvasNavbar" />
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
                                            <NavDropdown className="hoverLink" title="תפריטים" id="navbarScrollingDropdown" style={{ direction: "ltr" }}>

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


                                            <NavDropdown className=" hoverLink" title=" סקופ קייטרינג" id="navbarScrollingDropdown" style={{ direction: "ltr" }}>
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
                    </div>
                )}

                {!isMobile && !isTablet && (
                    <div style={{

                    }}>
                        <Image style={{
                            backgroundImage: `url(${underLogo})`,
                            maxHeight: "80px",
                            position: "absolute",
                            zIndex: 99999,
                            borderRadius: '0px 50px 50px 0px',
                            left: '0px',
                            top: '32px',
                            padding: '12px'
                        }} src={logo} />

                        {!isMobile && !isTablet && (<Header />)}
                        <div style={{
                            backgroundColor: 'rgba(0,0,0,0.5)'
                        }}> <Nuv /></div>
                    </div>
                )}
            </div>

            <div className="pageHeader">
                <label > חנות</label>
                {isTablet ? <img className="h-100 " src={headerBgImag} /> : <img className="h-100 w-100" src={headerBgImag} />}
                {/* <img className="h-100 w-100" src={headerBgImag} /> */}

            </div>

            <div className="page_content justify-content-center pt-4">
                <h2> קטגוריות אוכל מוכן </h2>
                <hr className="m-auto mb-3 goldColor" style={{ width: '4%', height: '3px', opacity: '1' }} ></hr>
                <h6>בואו לטעום ממאכלי השבת</h6>
                <div className="foodCategories">
                    <div className="row mb-3 d-flex justify-content-center">
                        <div className="  mr-3 p-0" style={{ width: '20%', height: '100%' }}><img className="h-100 w-100" src={fish} /></div>
                        <div className="  mr-3 p-0" style={{ width: '20%', height: '100%' }}><img className="h-100 w-100" src={salads} /></div>
                        <div className="  mr-3 p-0" style={{ width: '20%', height: '100%' }}><img className="h-100 w-100" src={shabat} /></div>

                    </div>
                    <div className="row mb-3 d-flex justify-content-center">
                        <div className="  mr-3 p-0" style={{ width: '20%', height: '100%' }}><img className="h-100 w-100" src={desserts} /></div>
                        <div className="  mr-3 p-0" style={{ width: '20%', height: '100%' }}><img className="h-100 w-100" src={mainCourses} /></div>
                        <div className="  mr-3 p-0" style={{ width: '20%', height: '100%' }}><img className="h-100 w-100" src={Extras} /></div>

                    </div>
                    <div className="row mb-3 d-flex justify-content-center">
                        <div className="  mr-3 p-0" style={{ width: '20%', height: '100%' }}><img className="h-100 w-100" src={fish} /></div>
                        <div className="  mr-3 p-0" style={{ width: '20%', height: '100%' }}><img className="h-100 w-100" src={mainCourses} /></div>
                        <div className="  mr-3 p-0" style={{ width: '20%', height: '100%' }}><img className="h-100 w-100" src={Extras} /></div>

                    </div>
                </div>
            </div>

            {/* <button className="bg-black text-white p-2 mt-4">לכל המוצרים</button> */}
            <button className="m-auto p-0 mt-4" style={{ width: '135px', height: '37px' }}><img className="p-2 h-100 w-100 bg-black" src={products_} /></button>
            <div className="PageFooter mt-5">
                <Footer />
                <UnderFooter />
            </div>
        </>

    );
}
const mapStateToProps = (state) => {
    return {

    };
}

const mapDispatchToProps = (dispatch) => ({


})
export default connect(mapStateToProps, mapDispatchToProps)(Shop);
