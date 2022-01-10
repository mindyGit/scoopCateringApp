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
import { Form, FormControl, Nav, Button, NavDropdown, Image, Container, Dropdown, DropdownButton, ButtonGroup } from "react-bootstrap";
import bgImagOurPeeks from '../../data/imges/bgImagOurPeeks.png'
import profile from '../../data/imges/profile.png'
import teamImages from '../../data/imges/teamImages.png'

import headerBgImag from '../../data/imges/headerBgImag.png'
import useMediaQuery from "../../hooks/useMediaQuery";

import Navbar from 'react-bootstrap/Navbar'
import Offcanvas from 'react-bootstrap/Offcanvas'
export function OurPeeks(props) {

    const isMobile = useMediaQuery(768);
    const isTablet = useMediaQuery(1024);
    function goHome() {
        window.location.href = "/"
    }
    return (

        <div style={{
            // backgroundImage: `url(${bgImagOurPeeks})`,
            height: '1400px',
            width: '100vw'

        }} >


            {/* <div style={{
                position: 'sticky',
                top: '0',
                zIndex: 1020

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
                <Header />
                <div style={{
                    backgroundColor: 'rgba(0,0,0,0.5)'

                }}> <Nuv /></div>

            </div>
 */}
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
                        <Image onClick={e => goHome()} style={{
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
                <label > הצוות שלנו</label>
                {isTablet ? <img className="h-100 " src={headerBgImag} /> : <img className="h-100 w-100" src={headerBgImag} />}
                {/* <img className="h-100 w-100" src={headerBgImag} /> */}

            </div>




            <section className="" style={{ height: '100%' }}>


                <div class="OurPeekscontent flex-column ">
                    {/* <div className="routing"> דף הבית &gt; סקופ קייטרינג &gt; הצוות שלנו</div> */}
                    <div className="routing text-end pr-4 pt-3">  דף הבית&gt; סקופ קייטרינג <span style={{ color: "#C59950 " }}>&gt; הצוות שלנו</span>&gt;</div>


                    <div className="titel pt-5">
                        <h1 className="font-weight-bold mb-0">הצוות שלנו</h1>
                    </div>
                    <hr className="hrStyle " style={{ width: '10%' }} />
                    <div className="content mt-3  pr-5 ">
                        <span className="text-end  pr-5">
                            <pre className="preStyle font-weight-bold h5" >בסקופ קייטרינג השירות תמיד נמצא בראש סדר העדיפויות שלנו.</pre>
                            <pre className="preStyle h5">אנחנו יודעים עד כמה מיוחד וחשוב לכם האירוע שלכם, ולכן גם לנו הוא חשוב.</pre>
                            <br />
                            <pre className="preStyle h5">הצוות שלנו בסקופ תמיד אדיב ומחויך,</pre>
                            <pre className="preStyle h5">ויגיש לאורחים שלכם שירות אישי ברמה שלא תישכח עבורם.</pre>
                            <br />
                            <pre className="preStyle h5">בכל אירוע יש "מנהל אירועים" הדואג שהכול יהיה מושלם.</pre>
                            <pre className="preStyle h5">תפקידו גם להיות קשוב לצרכים והבקשות המיוחדות שלכם מתחילת האירוע ועד סופו.</pre>
                            <pre className="preStyle h5">כך שאתם יכולים להיות רגועים וליהנות מהאירוע.</pre>

                        </span>

                        <div className="teamList" >
                            <div className="row mb-3">

                                <div className="col-md-4 teamItem d-flex  align-items-center flex-column">
                                    <Image className="rounded-circle border" src={profile} />
                                    <div className="workerName h4 font-weight-bold "> מייקל סמייגל</div>
                                    <div className="role h6  font-weight-bold">.אחראי אירועי חוץ ומוסדות</div>
                                    <hr className="hrS m-0 " />
                                    <button className="border-0 bg-transparent readMore x-smallFont goldColor">...קראו עוד</button>
                                </div>
                                <div className=" col-md-4 teamItem d-flex  align-items-center flex-column">
                                    <Image className="rounded-circle border" src={profile} />
                                    <div className="workerName h4 font-weight-bold "> מייקל סמייגל</div>
                                    <div className="role h6  font-weight-bold">.אחראי אירועי חוץ ומוסדות</div>
                                    <hr className="hrS m-0 " />
                                    <button className="border-0 bg-transparent readMore x-smallFont goldColor">...קראו עוד</button>
                                </div>
                                <div className="col-md-4 teamItem d-flex  align-items-center flex-column">
                                    <Image className="rounded-circle border" src={profile} />
                                    <div className="workerName h4 font-weight-bold "> מייקל סמייגל</div>
                                    <div className="role h6  font-weight-bold">.אחראי אירועי חוץ ומוסדות</div>
                                    <hr className="hrS m-0 " />
                                    <button className="border-0 bg-transparent readMore x-smallFont goldColor">...קראו עוד</button>
                                </div>
                            </div>

                            <div className="row">

                                <div className="col-md-4 teamItem d-flex  align-items-center flex-column">
                                    <Image className="rounded-circle border" src={profile} />
                                    <div className="workerName h4 font-weight-bold "> מייקל סמייגל</div>
                                    <div className="role h6  font-weight-bold">.אחראי אירועי חוץ ומוסדות</div>
                                    <hr className="hrS m-0 " />
                                    <button className="border-0 bg-transparent readMore x-smallFont goldColor">...קראו עוד</button>
                                </div>
                                <div className=" col-md-4 teamItem d-flex  align-items-center flex-column">
                                    <Image className="rounded-circle border" src={profile} />
                                    <div className="workerName h4 font-weight-bold "> מייקל סמייגל</div>
                                    <div className="role h6  font-weight-bold">.אחראי אירועי חוץ ומוסדות</div>
                                    <hr className="hrS m-0 " />
                                    <button className="border-0 bg-transparent readMore x-smallFont goldColor">...קראו עוד</button>
                                </div>
                                <div className="col-md-4 teamItem d-flex  align-items-center flex-column">
                                    <Image className="rounded-circle border" src={profile} />
                                    <div className="workerName h4 font-weight-bold "> מייקל סמייגל</div>
                                    <div className="role h6  font-weight-bold">.אחראי אירועי חוץ ומוסדות</div>
                                    <hr className="hrS m-0 " />
                                    <button className="border-0 bg-transparent readMore x-smallFont goldColor">...קראו עוד</button>
                                </div>
                            </div>

                            <div className="titel d-flex flex-column align-items-center mt-3">
                                <h1 className="font-weight-bold mb-0">  הצוות שלנו באירועים</h1>
                                <hr className="hrStyle " style={{ width: '8%' }} />
                            </div>

                            <div className="imgContainer mb-5  mt-5 ">
                                <div className="row ">

                                    <div className="col-md-3"> <Image src={teamImages} style={{ width: '150px', height: "150px" }} /></div>
                                    <div className="col-md-3"> <Image src={teamImages} style={{ width: '150px', height: "150px" }} /></div>
                                    <div className="col-md-3"> <Image src={teamImages} style={{ width: '150px', height: "150px" }} /></div>
                                    <div className="col-md-3"> <Image src={teamImages} style={{ width: '150px', height: "150px" }} /></div>
                                </div>



                                <div className="row mt-3">

                                    <div className="col-md-3"> <Image src={teamImages} style={{ width: '150px', height: "150px" }} /></div>
                                    <div className="col-md-3"> <Image src={teamImages} style={{ width: '150px', height: "150px" }} /></div>
                                    <div className="col-md-3"> <Image src={teamImages} style={{ width: '150px', height: "150px" }} /></div>
                                    <div className="col-md-3"> <Image src={teamImages} style={{ width: '150px', height: "150px" }} /></div>

                                </div>
                            </div>

                        </div>



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
export default connect(mapStateToProps, mapDispatchToProps)(OurPeeks);
