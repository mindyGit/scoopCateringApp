import React from "react";
import { connect } from 'react-redux';
import Store from '../../../redux/store'
import { actions } from '../../../redux/actions/action';
import blog3 from '../../../data/imges/blog3.png'

import Section from '../../mainPage/Section';

import Footer from '../../mainPage/Footer';
import UnderFooter from '../../mainPage/UnderFooter'
import underLogo from '../../../data/imges/underLogo.png'
import logo from '../../../data/imges/logo.png'
import './ourStory.css';
import headerBgImag from '../../../data/imges/headerBgImag.png'


// import { Form, FormControl, Nav, Button, NavDropdown, Image } from "react-bootstrap";
import bgImagOurPeeks from '../../../data/imges/bgImagOurPeeks.png'
import profile from '../../../data/imges/profile.png'
import teamImages from '../../../data/imges/teamImages.png'


import { Container, Form, FormControl, Nav, Button, NavDropdown, Image, Dropdown, DropdownButton, ButtonGroup } from "react-bootstrap"
import Navbar from 'react-bootstrap/Navbar'
import Offcanvas from 'react-bootstrap/Offcanvas'




import Nuv from '../../mainPage/Nuv'
import Header from '../../mainPage/Header'


import useMediaQuery from "../../../hooks/useMediaQuery";

function OurStory() {

    const isMobile = useMediaQuery(768);
    const isTablet = useMediaQuery(1024);

    return (
        <div className="ourStoryPage">
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
                <label >הסיפור שלנו</label>
                {isTablet ? <img className="h-100 " src={headerBgImag} /> : <img className="h-100 w-100" src={headerBgImag} />}
                {/* <img className="h-100 w-100" src={headerBgImag} /> */}

            </div>




            <div className="PageContent mb-5">
                <div className="routing text-end pr-4 pt-3">  דף הבית&gt; סקופ קייטרינג <span style={{ color: "#C59950 " }}>&gt; הסיפור שלנו</span>&gt;</div>
                <div className="d-flex justify-content-center ">
                    <div className="theContent  mt-5 pt-5 mb-5" >
                        <h3 className="Title mb-3 font-weight-bold"> יחס אישי ואיכות בלי פשרות, הם סוד ההצלחה שלנו</h3>
                        <hr className="m-auto mb-5 goldColor" style={{ width: '10%', height: '2px', opacity: '1' }} ></hr>
                        <p className="text-end mb-0">סקופ קייטרינג התחילה כבית קפה קטן בבית שמש, גרי שיקמן ואריה בן חמו, שניהם עם נסיון</p>
                        <p className="text-end mb-0">.עשיר בתחום המזון.הבינו שיש חוסר במקומות הסעדה המספקים שירות אישי ומזון איכותי</p>
                        <p className="text-end mb-0">המקום החדש שגשג, ובתוך שנה מהפתיחה, כבר פתחו השותפים את הסניף הבא ביישוב אפרת. כיום סקופ קייטרינג  </p>
                        <p className="text-end mb-0">מספק את אותו חזון לשירות ואיכות, גם במטבח החלבי, וגם במטבח הבשרי של החברה, אשר מספקים שירות יום יומי</p>
                        <p className="text-end ">לחברות, מוסדות, ואירועים בכל גודל ותקציב</p>

                        <p className="text-end">בשנים האחרונות הצטרף מייקל סמייגל כשהוא מרחיב את פעילות החברה לקהלים חדשים מחוץ לגוש עציון ובבית שמש</p>


                        <h3 className="Title mb-3 font-weight-bold mt-5"> בעלי הקייטרינג</h3>
                        <hr className="m-auto mb-5 goldColor" style={{ width: '6%', height: '2px', opacity: '1' }} ></hr>
                        <div className="row d-flex justify-content-center mb-5">
                            <div class="col-md-3 teamItem d-flex  align-items-center flex-column mt-5">
                                <img src="/static/media/profile.2f77ba72.png" class="rounded-circle goldBorder w-75" />
                                <div class="workerName h4 font-weight-bold "> מייקל סמייגל</div>
                                <div class="role x-smallFont  " >בתחום ההסעדה 25 שנה </div>
                                <div class="role x-smallFont   font-weight-bold mb-4" style={{ lineHeight: '1' }}>.אחראי אירועי חוץ ומוסדות</div>
                                <hr class="hrS m-0 " style={{ opacity: '1' }} />
                                <button class="border-0 bg-transparent readMore x-smallFont goldColor font-weight-bold">מוטו לחיים</button>
                                <div class="role x-smallFont  " style={{ lineHeight: '1' }}>!שירות טוב פירושו, שבאמת אכפת לך</div>

                            </div>
                            <div class="col-md-3 teamItem d-flex  align-items-center flex-column mt-5">
                                <img src="/static/media/profile.2f77ba72.png" class="rounded-circle goldBorder w-75" />
                                <div class="workerName h4 font-weight-bold "> אריה בן חמו </div>
                                <div class="role x-smallFont  " >בתחום ההסעדה מגיל 16 </div>
                                <div class="role x-smallFont   font-weight-bold mb-4" style={{ lineHeight: '1' }}>.מנהל תפעול ולוגיסטיקה </div>
                                <hr class="hrS m-0 " style={{ opacity: '1' }} />
                                <button class="border-0 bg-transparent readMore x-smallFont goldColor font-weight-bold">מוטו לחיים</button>
                                <div class="role x-smallFont " style={{ lineHeight: '1' }}>.החיים הם כמו סיר, התבשיל שייצא תלוי בעיקר באיכות חומרי הגלם שתכניס</div>

                            </div>
                            <div class="col-md-3 teamItem d-flex  align-items-center flex-column mt-5">
                                <img src="/static/media/profile.2f77ba72.png" class="rounded-circle goldBorder w-75" />
                                <div class="workerName h4 font-weight-bold "> גרי שיקמן </div>
                                <div class="role x-smallFont  ">בתחום ההסעדה מ 2007</div>
                                <div class="role x-smallFont   font-weight-bold mb-2" style={{ lineHeight: '1' }}>.מנהל אירועים ואחראי קשרי לקוחות</div>
                                <hr class="hrS m-0 " style={{ opacity: '1' }} />
                                <button class="border-0 bg-transparent readMore x-smallFont goldColor font-weight-bold">מוטו לחיים</button>
                                <div class="role x-smallFont  " style={{ lineHeight: '1' }}>החיוך נותן לאוכל את טעמו הערב יותר   </div>
                            </div>
                        </div>





                    </div>
                </div>
            </div>

            <div className="PageFooter mt-5">
                <Footer />
                <UnderFooter />
            </div>

        </div>
    );
}
const mapStateToProps = (state) => {
    return {
    };
}

const mapDispatchToProps = (dispatch) => ({


})
export default connect(mapStateToProps, mapDispatchToProps)(OurStory);