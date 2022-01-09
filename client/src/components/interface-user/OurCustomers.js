import React from "react";
import '../../App.css';
import { connect } from 'react-redux';
import Store from '../../redux/store'
import { actions } from '../../redux/actions/action';
import blog3 from '../../data/imges/blog3.png'
import Nuv from '../mainPage/Nuv';
import Section from '../mainPage/Section';
import Header from '../mainPage/Header';
import Footer from '../mainPage/Footer';
import UnderFooter from '../mainPage/UnderFooter'
import underLogo from '../../data/imges/underLogo.png'
import logo from '../../data/imges/logo.png'

import bgImagOurPeeks from '../../data/imges/bgImagOurPeeks.png'
import bneiAkivaImage from '../../data/imges/bneiAkivaImage.png'
import taglitImage from '../../data/imges/taglitImage.png'
import teamImages from '../../data/imges/teamImages.png'
import profile from '../../data/imges/profile.png'
import { Form, FormControl, Nav, Button, NavDropdown, Image, Container, Dropdown, DropdownButton, ButtonGroup } from "react-bootstrap";


import headerBgImag from '../../data/imges/headerBgImag.png'
import useMediaQuery from "../../hooks/useMediaQuery";

import Navbar from 'react-bootstrap/Navbar'
import Offcanvas from 'react-bootstrap/Offcanvas'


export function OurCustomers(props) {
    const isMobile = useMediaQuery(768);
    const isTablet = useMediaQuery(1024);

    return (

        <div style={{

            height: '780px',
            width: '100vw',

        }} >
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
                <label > לקוחותינו </label>
                {isTablet ? <img className="h-100 " src={headerBgImag} /> : <img className="h-100 w-100" src={headerBgImag} />}
                {/* <img className="h-100 w-100" src={headerBgImag} /> */}

            </div>






            <section className="" style={{ height: '100%' }}>


                <div class="OurPeekscontent flex-column ">
                    <div className="routing text-end pr-4 pt-3">  דף הבית&gt; סקופ קייטרינג <span style={{ color: "#C59950 " }}>&gt;  לקוחותינו</span>&gt;</div>


                    <div className="titel pt-5">
                        <h1 className="font-weight-bold mb-0">בין לקוחותינו</h1>
                    </div>
                    <hr className="hrStyle " style={{ width: '6%' }} />

                    <div className="teamList d-flex  flex-column mt-4" >
                        <div className="row mb-1 d-flex justify-content-around ">

                            <Image className="col-md-3 customerItem mr-3" src={taglitImage} />

                            <div className="col-md-3  d-flex  align-items-center flex-column customerItem mr-3 x-smallFont justify-content-center font-weight-bold">
                                לוגו בנגיעה מתהפך ורואים את הטקסט הארוך
                            </div>
                            <div className="col-md-3  d-flex justify-content-center flex-column customerItem goldbgColor text-end" style={{ fontSize: '11px' }}><span className="font-weight-bold mb-2">
                                קליבר - בי"ס לאבטחה</span> "ניהול בי"ס ירי המחנך דורות של אנשי ביטחון, מחייב עמידה בסטנדרטים גבוהים ביותר, ודיוק מרבי בזמנים. השירות והרמה הגבוהה של סקופ קייטרינג תורמת לנו ליכולת הזו. תודה על שנים של שיתוף פעולה. רן סופר - מנכ"ל
                            </div>


                        </div>
                        <div className="row mb-3 d-flex justify-content-around ">
                            <div className="col-md-3  d-flex  align-items-center flex-column   x-smallFont mr-3 font-weight-bold">מסע תגלית</div>
                            <div className="col-md-3  d-flex  align-items-center flex-column "></div>
                            <div className="col-md-3  d-flex  align-items-center flex-column "> </div>
                        </div>
                        <div className="row mb-1 d-flex justify-content-around mt-3 ">

                            <Image className="col-md-3 customerItem mr-3" src={bneiAkivaImage} />
                            <Image className="col-md-3 customerItem mr-3" src={bneiAkivaImage} />
                            <div className="col-md-3  d-flex  justify-content-center flex-column customerItem text-end " style={{ backgroundColor: '#CCCCCC', fontSize: '11px' }} >
                                <span className="font-weight-bold mb-2">    אל"יי – אשנב לשיח יהודי ישראלי
                                </span>
                                "לפני שהכרנו את סקופ קייטרינג, כל פריסת שטח הייתה מלווה בלוגיסטיקה מורכבת והמון כאב ראש. דבר שפגע לפעמים בפעילות. היום חזרנו ליהנות שוב מהפעילות עצמה, כשאת כל היתר אנחנו משאירים לחברה מסקופ.
                            </div>


                        </div>
                        <div className="row mb-3 d-flex justify-content-around ">
                            <div className="col-md-3  d-flex  align-items-center flex-column x-smallFont font-weight-bold mr-3"> בני עקיבא העולמית</div>
                            <div className="col-md-3  d-flex  align-items-center flex-column x-smallFont font-weight-bold mr-3">בני עקיבה TVA</div>
                            <div className="col-md-3  d-flex  align-items-center flex-column "> </div>
                        </div>
                        {/* <div className="row">

                            <div className="col-md-3 teamItem d-flex  align-items-center flex-column">
                                <Image className="rounded-circle border" src={profile} />
                                <div className="workerName h4 font-weight-bold "> מייקל סמייגל</div>
                                <div className="role h6  font-weight-bold">.אחראי אירועי חוץ ומוסדות</div>
                                <hr className="hrS m-0 " />
                                <button className="border-0 bg-transparent readMore x-smallFont goldColor">...קראו עוד</button>
                            </div>
                            <div className=" col-md-3 teamItem d-flex  align-items-center flex-column">
                                <Image className="rounded-circle border" src={profile} />
                                <div className="workerName h4 font-weight-bold "> מייקל סמייגל</div>
                                <div className="role h6  font-weight-bold">.אחראי אירועי חוץ ומוסדות</div>
                                <hr className="hrS m-0 " />
                                <button className="border-0 bg-transparent readMore x-smallFont goldColor">...קראו עוד</button>
                            </div>
                            <div className="col-md-3 teamItem d-flex  align-items-center flex-column">
                                <Image className="rounded-circle border" src={profile} />
                                <div className="workerName h4 font-weight-bold "> מייקל סמייגל</div>
                                <div className="role h6  font-weight-bold">.אחראי אירועי חוץ ומוסדות</div>
                                <hr className="hrS m-0 " />
                                <button className="border-0 bg-transparent readMore x-smallFont goldColor">...קראו עוד</button>
                            </div>
                        </div>

 */}



                    </div>




                </div>

            </section >

            <Footer />
            <UnderFooter />




        </div >


    );
}
const mapStateToProps = (state) => {
    return {

    };
}

const mapDispatchToProps = (dispatch) => ({


})
export default connect(mapStateToProps, mapDispatchToProps)(OurCustomers);
