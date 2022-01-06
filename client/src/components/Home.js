import React, { useEffect } from 'react';

import Store from '../redux/store'
import Navbar from 'react-bootstrap/Navbar'
import Offcanvas from 'react-bootstrap/Offcanvas'
import Nuv from './mainPage/Nuv';
import Section from './mainPage/Section';
import Header from './mainPage/Header';
import Footer from './mainPage/Footer';
import UnderFooter from './mainPage/UnderFooter'
import { connect } from 'react-redux';
import { actions } from '../redux/actions/action';
import Search from './Search';
import initialDetails from './../data/initialDetails';
import background_image from '../data/imges/backgroundImg.jpg'
import { Container, Row, Col } from 'react-grid-system';
import { Form, FormControl, Nav, Button, NavDropdown, Image } from "react-bootstrap";
import logo from '../data/imges/logo.png'
import underLogo from '../data/imges/underLogo.png'
import galeryImag from '../data/imges/galeryImag.png'
import img1 from '../data/imges/img1.png'
import img3 from '../data/imges/img3.png'
import Rectangle from '../data/imges/Rectangle.png'
import blog1 from '../data/imges/blog1.png'
import blog2 from '../data/imges/blog2.png'
import blog3 from '../data/imges/blog3.png'
import foodExample from '../data/imges/foodExample.png'
import $ from 'jquery'

import useMediaQuery from "../hooks/useMediaQuery";
// import searchIcon from '../data/imges/searchIcon.svg'
// import { ReactComponent as YourSvg } from '../data/imges/searchIcon.svg';


export function Home(props) {
    const isMobile = useMediaQuery(768);
    const isTablet = useMediaQuery(1024);
    ;
    useEffect(() => {
        const inputSlide = document.querySelector("input");
        const secondInputSlide = document.getElementById("secondinput");

        secondInputSlide.oninput = (() => {

            secondInputSlide.style.background = `linear-gradient(to right, #FFFFFF 0%, #A38047 ${secondInputSlide.value}%, #A38047 ${secondInputSlide.value}%, #FFFFFF 100%)`
        });
    }, [$])
    return (
        <>

            <div style={{
                height: '1000px',
                width: '100vw'
            }}>
                <div style={{
                    backgroundImage: `url(${background_image})`,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'black',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover'
                }} >
                    <div>
                        {isTablet && (
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
                        )}

                        {!isMobile && !isTablet && (
                            <div style={{
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
                        )}


                        <Section className="sectionOne" urlImg={background_image} />
                        <div className="sectionTwo bg-black" >
                            <Row>
                                <div className="d-flex justify-content-center align-items-center flex-column" style={{
                                    height: '400px', border: '2px solid #C69A51'
                                    , opacity: '1', top: '837px'

                                    , width: '26%',
                                    backgroundColor: "#C69A51"
                                }}><div className="h1 font-weight-bold w-50  whiteColor" style={{ lineHeight: '1.1', fontSize: '240%' }} >תפריטים לאירועים</div>
                                    <div className="font-weight-bold whiteColor" style={{ lineHeight: '0.1', fontSize: '250%' }}>__</div>
                                </div>
                                <div className="d-flex justify-content-center align-items-center flex-column " style={{
                                    height: '400px', border: '2px solid #C69A51'
                                    , top: '837px'
                                    , width: '42%',
                                    // backgroundImage: `url(${galeryImag})`
                                }}>
                                    <div className='opImag h-100 w-100  d-flex align-items-center   justify-content-center' style={{
                                        backgroundPosition: 'center',
                                        backgroundSize: 'cover',
                                        // backgroundImage: 'linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.5)), `url(${galeryImag})`'
                                        // backgroundImage: `url(${galeryImag})`
                                    }}>
                                        <div className='position-absolute'>

                                            <div className="h1 font-weight-bold whiteColor " style={{ fontSize: '250%', lineHeight: '1.1' }} ><span className='d-block'>אוכל</span> מוכן לשבת</div>
                                            <div className="font-weight-bold whiteColor " style={{ lineHeight: '0.1', fontSize: '260%' }}>__</div>
                                        </div>
                                    </div>

                                </div>

                                <div className="d-flex justify-content-center align-items-center flex-column" style={{
                                    height: '400px', border: '2px solid #C69A51'
                                    , top: '837px'

                                    , width: '32%',

                                    backgroundColor: "#111111",

                                }}>
                                    {/* <div className=" font-weight-bold  w-25 mb-0 whiteColor" style={{ lineHeight: '1.1', fontSize: '240%' }}>אוכל</div> */}

                                    <div className=" font-weight-bold whiteColor w-50" style={{ lineHeight: '1.1', fontSize: '240%' }}> גלריות</div>
                                    <div className="font-weight-bold whiteColor" style={{ lineHeight: '0.1', fontSize: '250%' }}>__</div>
                                    {/* <div ><i class="fas fa-horizontal-rule"></i></div> */}
                                </div>

                            </Row>
                            {/* <p className="whiteColor" style={{
                            backgroundColor: "#A38047",
                            padding: "1%",
                            marginTop: "2%",
                            marginBottom: "2%",
                            fontSize: '140%',

                        }}>סעודת פורים

                            &gt; &gt;

                            מארזים לטיולים

                            &gt; &gt;



                            ברית/ בריתה החל מ- 90 ש"ח







                            <span className='mr-1' style={{ color: "#111111" }}>


                                &gt; &gt;




                                ברבקיו אישי</span></p>
 */}
                            <h1 className='text-white mt-5 font-weight-bold'  >אוכל מוכן לשבת</h1>
                            <h1 style={{ color: '#A38047', lineHeight: '0.1' }}>___</h1>
                            <h6 className='text-white mt-5'>מבחר מאכלי השבת מבית סקופ קייטרינג</h6>
                            <div className='d-flex justify-content-center mt-5 mb-5 ' style={{ height: '300px' }}>
                                <div className='row d-flex justify-content-space-beteween' style={{ maxHeight: '250px', width: '800px' }}>

                                    <div className='col-md-4'><img className='h-100 w-100' src={foodExample} /> <div className='AddToCart text-white'>הוספה לסל</div></div>
                                    <div className='col-md-4'><img className='h-100 w-100' src={foodExample} /> <div className='AddToCart text-white'>הוספה לסל</div></div>

                                    <div className='col-md-4'><img className='h-100 w-100' src={foodExample} /> <div className='AddToCart text-white'>הוספה לסל</div></div>




                                </div>
                            </div>

                            <button className='bg-black text-white border'> <i class="fas fa-long-arrow-alt-left mr-2 " style={{ height: 'fit-content' }} ></i>כנסו לכל המוצרים</button>



                            <div className='row sectionFour d-flex justify-content-around align-items-center mt-5 mb-5 col-md-12'>

                                <div className='col-md-7 p-0 ' style={{ height: '550px' }}>
                                    <div className='childD'>

                                    </div>
                                </div>

                                <div className='col-md-4 '>
                                    <div className="font-weight-bold h2" style={{ color: "#A38047", fontSize: '2vw' }}> ?מתכנן אירוע</div>
                                    <div className="font-weight-bold" style={{ lineHeight: '0.1', fontSize: '250%', color: "#A38047" }}>__</div>
                                    <p className="mt-5 w-75  text-end" style={{ color: "white", fontSize: '1.5vw' }}>לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית להאמית קרהשק סכעיט דז מא, מנכם למטכין נשואי מנורךגולר מונפרר סוברט לורם שבצק יהול, לכנוץ בעריר גק ליץ, ושבעגט. קוואזי במר מודוף. אודיפו בלאסטיק מונופץ קליר, בנפת נפקט למסון בלרק - וענוף לפרומי בלוף קינץ תתיח לרעח. לת צשחמי צש בליא, מנסוטו צמלח לביקו ננבי, צמוקו</p>
                                </div>
                            </div>
                            <div className="row justify-content-around mt-3" style={{ height: '426px' }}>
                                <div className="  d-flex justify-content-center  flex-column align-items-center " style={{ width: '38%', marginLeft: '1%' }}>
                                    <div className="font-weight-bold h2" style={{ color: "#A38047" }}> ?מארגנים טיול לעובדים</div>
                                    <div className="font-weight-bold" style={{ lineHeight: '0.1', fontSize: '250%', color: "#A38047" }}>__</div>
                                    <p className="mt-5 w-50 text-end" style={{ color: "white" }}>לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית להאמית קרהשק סכעיט דז מא, מנכם למטכין נשואי מנורךגולר מונפרר סוברט לורם שבצק יהול, לכנוץ בעריר גק ליץ, ושבעגט. קוואזי במר מודוף. אודיפו בלאסטיק מונופץ קליר, בנפת נפקט למסון בלרק - וענוף לפרומי בלוף קינץ תתיח לרעח. לת צשחמי צש בליא, מנסוטו צמלח לביקו ננבי, צמוקו</p>
                                </div>
                                <div className=" bg-light d-flex justify-content-center  flex-column align-items-center col-md-7 p-0" style={{ marginRight: '1%' }}><img className='w-100' src={img3} /> </div>

                            </div>
                            <div className="partOfSectionTwo  pb-5" style={{ paddingTop: '15%' }}>
                                <div className="h2 font-weight-bold pt-4 whiteColor"> מתאימים לך אירוע אישית</div>
                                <div className="font-weight-bold mb-5" style={{ lineHeight: '0.1', fontSize: '250%', color: "#A38047" }}>__</div>
                                <div className="h5 mb-0 pb-4 whiteColor">בדיוק לפי הנקודה המתאימה לך </div>
                            </div>

                        </div>




                        <div className="sectionThree whiteColor " style={{ backgroundImage: `url(${Rectangle})`, height: "1650px", paddingTop: '2%' }}>
                            <div className="row  justify-content-around align-items-center">
                                <div className="col-md-2 text-end pr-0 standartFont">סקופ</div>


                                <div class="slider col-md-7 grad1">
                                    <div class="field second">
                                        <input type="range" class="rangInput" id="secondinput" min="0" max="100" defaultValue="20" steps="1" />

                                    </div>
                                </div>


                                <div className="col-md-2 text-start pl-0 standartFont">אירוע מושלם</div>
                            </div>
                            <div className="row">
                                <div className="col-md-3"></div>
                                <div className="col-md-6 d-flex standartFont ">
                                    <div className="col-md-2 ">תפריט</div>
                                    <div className="col-md-2 ">טריות ואיכות</div>
                                    <div className="col-md-2">טעם מצוין </div>
                                    <div className="col-md-2">צוות אדיב</div>
                                    <div className="col-md-2">עיצוב</div>
                                    <div className="col-md-2">הפקה</div>
                                </div>
                                <div className="col-md-3"></div>
                            </div>


                            <div className="blogSection row justify-content-between" style={{ height: '450px', marginTop: '30%' }}>
                                <div className="col-md-1"></div>
                                <div className="col-md-3 bg-light p-0" style={{ height: '450px' }}>
                                    <div className="h-50" style={{ backgroundImage: `url(${blog1})` }}></div>

                                    <div className="h-50 bg-light d-flex justify-content-center  flex-column align-items-center" style={{ marginRight: '1%' }}>

                                        <div className="font-weight-bold h2 mb-0" style={{ color: "#A38047" }}>טרנדים באוכל</div>
                                        <div className="font-weight-bold" style={{ lineHeight: '0.1', fontSize: '250%', color: "#A38047" }}>__</div>
                                        <p className="mt-5 w-50" style={{ color: "#000000" }}> מה האורחים שלכם אוהבים לראות בשולחן, ומה המנה הכי מבוקשת?</p>



                                    </div>



                                </div>





                                <div className="col-md-3 bg-light p-0" style={{ height: '450px' }}>
                                    <div className="h-50" style={{ backgroundImage: `url(${blog2})` }}></div>

                                    <div className="h-50 bg-light d-flex justify-content-center  flex-column align-items-center" style={{ marginRight: '1%' }}>

                                        <div className="font-weight-bold h2 mb-0" style={{ color: "#A38047" }}>צילום ותמונות </div>
                                        <div className="font-weight-bold" style={{ lineHeight: '0.1', fontSize: '250%', color: "#A38047" }}>__</div>
                                        <p className="mt-5 w-50" style={{ color: "#000000" }}>איך יודעים איזה צלם לבחור? מה הפורמט שהכי מתאים? </p>



                                    </div>



                                </div>






                                <div className="col-md-3 bg-light p-0" style={{ height: '450px' }}>
                                    <div className="h-50" style={{ backgroundImage: `url(${blog3})` }}></div>

                                    <div className="h-50 bg-light d-flex justify-content-center  flex-column align-items-center" style={{ marginRight: '1%' }}>

                                        <div className="font-weight-bold h2 mb-0" style={{ color: "#A38047" }}>עיצוב פרחים </div>
                                        <div className="font-weight-bold" style={{ lineHeight: '0.1', fontSize: '250%', color: "#A38047" }}>__</div>
                                        <p className="mt-5 w-50" style={{ color: "#000000" }}>איזה פרחים כדאי לבחור לאירוע? ואיך נדע איזה סנגון מתאים? </p>



                                    </div>



                                </div>




                                <div className="col-md-1"></div>



                            </div>

                            <div className="addLocation row justify-content-between  " style={{ height: '270px', marginTop: '15%' }} >
                                <div className="col-md-2" ></div>
                                <div className="col-md-7 d-flex  align-items-end  justify-content-center flex-column pl-5  pr-5 pb-3  pt-3" style={{ backgroundColor: "#404041", border: ' 1px solid #C69A51' }}>

                                    <div style={{ color: '#FFFFFF', fontSize: '60px', lineHeight: "1" }}>?מתחתנים </div>
                                    <div className="mb-4" style={{ color: '#A38047', fontSize: '60px', fontWeight: '900', lineHeight: "1" }}>מזל"ט סקופ</div>
                                    <div className="h4" style={{ color: '#FFFFFF' }}>!הזמינו עוד היום אירוע חתונה בטעם מנצח</div>
                                </div>
                                <div className="col-md-2" ></div>

                            </div>
                        </div>


                        <Footer />
                        <UnderFooter />


                    </div>

                </div >
            </div >


        </>
    );
}
const mapStateToProps = (state) => {
    return {

    };
}

const mapDispatchToProps = (dispatch) => ({


})
export default connect(mapStateToProps, mapDispatchToProps)(Home)