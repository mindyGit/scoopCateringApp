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
// import img1 from '../data/imges/img1.png'
// import img1_ from '../data/imges/img1_.png'
import img1 from '../data/imges/imgG.png'


import img3 from '../data/imges/img3.png'
import Rectangle from '../data/imges/Rectangle.jpg'
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
                                    , opacity: '1'

                                    , width: '26%',
                                    backgroundColor: "#C69A51"
                                }}><div className="h1 font-weight-bold w-50  whiteColor" style={{ lineHeight: '1.1', fontSize: '240%' }} >תפריטים לאירועים</div>
                                    {/* <div className="font-weight-bold whiteColor" style={{ lineHeight: '0.1', fontSize: '250%' }}>__</div> */}
                                    <hr className="font-weight-bold whiteColor" style={{ width: '12%', height: '5px', opacity: '1' }} ></hr>
                                </div>

                                <div class="zoomBOut">
                                    <div class="zoomBIn d-flex align-items-center flex-column  justify-content-center">
                                        <div className=''>

                                            <div className="h1 font-weight-bold whiteColor " style={{ fontSize: '240%', lineHeight: '1.1' }} ><span className='d-block'>אוכל</span> מוכן לשבת</div>
                                            <hr className="font-weight-bold whiteColor m-auto" style={{ width: '30%', height: '5px', opacity: '1' }} ></hr>
                                        </div>
                                    </div>
                                </div>


                                <div className="d-flex justify-content-center align-items-center flex-column" style={{
                                    height: '400px', border: '2px solid #C69A51'

                                    , width: '32%',

                                    backgroundColor: "#111111",

                                }}>
                                    {/* <div className=" font-weight-bold  w-25 mb-0 whiteColor" style={{ lineHeight: '1.1', fontSize: '240%' }}>אוכל</div> */}

                                    <div className=" font-weight-bold whiteColor w-50" style={{ lineHeight: '1.1', fontSize: '240%' }}> גלריות</div>
                                    <hr className="font-weight-bold whiteColor" style={{ width: '10%', height: '5px', opacity: '1' }} ></hr>
                                    {/* <div ><i class="fas fa-horizontal-rule"></i></div> */}
                                </div>

                            </Row>




                            <h1 className='text-white mt-5 font-weight-bold'  >אוכל מוכן לשבת</h1>
                            <hr className="font-weight-bold goldColor m-auto" style={{ width: '3%', height: '5px', opacity: '1' }} ></hr>
                            <h6 className='text-white mt-5'>מבחר מאכלי השבת מבית סקופ קייטרינג</h6>
                            <div className='d-flex justify-content-center mt-5  ' style={{ height: '300px' }}>
                                <div className='row d-flex justify-content-center pr-5 pl-5' style={{ maxHeight: '200px' }}>

                                    <div className='col-md-2 p-0 mr-4'><img className='h-100 w-100' src={foodExample} /> <div className='AddToCart text-white'>הוספה לסל</div></div>
                                    <div className='col-md-2 p-0 mr-4'><img className='h-100 w-100' src={foodExample} /> <div className='AddToCart text-white'>הוספה לסל</div></div>

                                    <div className='col-md-2 p-0 mr-4'><img className='h-100 w-100' src={foodExample} /> <div className='AddToCart text-white'>הוספה לסל</div></div>
                                    <div className='col-md-2 p-0 '><img className='h-100 w-100' src={foodExample} /> <div className='AddToCart text-white'>הוספה לסל</div></div>





                                </div>
                            </div>

                            <button className='bg-black text-white border mb-5 '> <i class="fas fa-long-arrow-alt-left mr-2 " style={{ height: 'fit-content' }} ></i>כנסו לכל המוצרים</button>



                            {/* <div className='row sectionFour d-flex justify-content-around align-items-center mt-5 mb-5 col-md-12'>

                                <div className='col-md-7 p-0 ' style={{ height: '550px' }}>
                                    <div className='childD'>

                                    </div>
                                </div>

                                <div className='col-md-4 '>
                                    <div className="font-weight-bold h2" style={{ color: "#A38047", fontSize: '2vw' }}> ?מתכנן אירוע</div>
                                    <div className="font-weight-bold" style={{ lineHeight: '0.1', fontSize: '250%', color: "#A38047" }}>__</div>
                                    <p className="mt-5 w-75  text-end" style={{ color: "white", fontSize: '1.5vw' }}>לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית להאמית קרהשק סכעיט דז מא, מנכם למטכין נשואי מנורךגולר מונפרר סוברט לורם שבצק יהול, לכנוץ בעריר גק ליץ, ושבעגט. קוואזי במר מודוף. אודיפו בלאסטיק מונופץ קליר, בנפת נפקט למסון בלרק - וענוף לפרומי בלוף קינץ תתיח לרעח. לת צשחמי צש בליא, מנסוטו צמלח לביקו ננבי, צמוקו</p>
                                </div>
                            </div> */}
                            <div className="row justify-content-around mt-3  " style={{ height: '60vh', paddingLeft: '6%' }}>


                                <div className=" bg-light d-flex justify-content-center  flex-column align-items-center col-md-7 p-0" style={{ marginLeft: '3%', height: '60vh' }}><div class="text-dark border border-dark pl-4  pr-4 pb-2  pt-2 h4 font-weight-bold position-absolute" style={{
                                    marginLeft: '25%',
                                    marginTop: '10%'
                                }}>תפריט מומלץ</div><img className='w-100 h-100' src={img1} /> </div>
                                {/* <div className=" bg-light d-flex justify-content-center  flex-column align-items-center col-md-7 p-0" style={{ marginLeft: '3%', height: '60vh' }}><div className='childD'></div></div> */}




                                <div className="  d-flex justify-content-center  flex-column align-items-end " style={{ width: '38%', paddingRight: '10%', paddingLeft: '5%' }}>
                                    <div className="font-weight-bold h1 mb-0" style={{ color: "#A38047" }}> ? מתכנן אירוע </div>
                                    <hr className="font-weight-bold goldColor " style={{ width: '8%', height: '5px', opacity: '1' }} ></hr>

                                    <p className="mt-2  text-end" style={{ color: "white" }}>לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית להאמית קרהשק סכעיט דז מא, מנכם למטכין נשואי מנורךגולר מונפרר סוברט לורם שבצק יהול, לכנוץ בעריר גק ליץ, ושבעגט. קוואזי במר מודוף. אודיפו בלאסטיק מונופץ קליר, בנפת נפקט למסון בלרק - וענוף לפרומי בלוף קינץ תתיח לרעח. לת צשחמי צש בליא, מנסוטו צמלח לביקו ננבי, צמוקו</p>
                                </div>
                            </div>


                            <div className="row justify-content-around mt-4 " style={{ paddingRight: '6%' }} >
                                <div className="  d-flex justify-content-center  flex-column align-items-end " style={{ width: '38%', paddingRight: '4%', paddingLeft: '8.4%' }}>
                                    <div className="font-weight-bold h1" style={{ color: "#A38047" }}> ?מארגנים טיול לעובדים</div>
                                    <hr className="font-weight-bold goldColor " style={{ width: '8%', height: '5px', opacity: '1' }} ></hr>
                                    <p className="mt-2 text-end" style={{ color: "white", paddingLeft: '11%' }}>לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית להאמית קרהשק סכעיט דז מא, מנכם למטכין נשואי מנורךגולר מונפרר סוברט לורם שבצק יהול, לכנוץ בעריר גק ליץ, ושבעגט. קוואזי במר מודוף. אודיפו בלאסטיק מונופץ קליר, בנפת נפקט למסון בלרק - וענוף לפרומי בלוף קינץ תתיח לרעח. לת צשחמי צש בליא, מנסוטו צמלח לביקו ננבי, צמוקו</p>
                                </div>
                                <div className=" bg-light d-flex justify-content-center  flex-column align-items-center col-md-7 p-0" style={{ marginRight: '3%', height: '60vh' }}><img className='w-100 h-100' src={img3} /> </div>

                            </div>


                        </div>




                        <div className="sectionThree whiteColor " style={{ backgroundImage: `url(${Rectangle})`, height: "100%", width: '100%', paddingTop: '2%' }}>
                            <div className="partOfSectionTwo  pb-2" style={{ paddingTop: '5%' }}>
                                <div className="h1 font-weight-bold pt-4 whiteColor"> מתאימים לך אירוע אישית</div>
                                <hr className="font-weight-bold goldColor m-auto mb-5 mt-3" style={{ width: '3%', height: '5px', opacity: '1' }} ></hr>
                                <div className="h4 mb-0 pb-5 whiteColor"> אירוע מושלם בסקופ, בדיוק לפי הנקודה המתאימה לך </div>
                            </div>
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


                            <div className="blogSection row justify-content-between mb-5" style={{ height: '450px', marginTop: '10%' }}>
                                <div className="col-md-1"></div>
                                <div className="col-md-3 bg-light p-0" style={{ height: '450px' }}>
                                    <div className="h-50" style={{ backgroundImage: `url(${blog1})` }}></div>

                                    <div className="h-50 bg-light d-flex justify-content-center  flex-column align-items-center mr-0" style={{ marginRight: '1%' }}>

                                        <div className="font-weight-bold h2 mb-0" style={{ color: "#A38047" }}>טרנדים באוכל</div>
                                        <hr className="font-weight-bold m-auto mb-2 mt-3" style={{ width: '11%', height: '5px', opacity: '1', color: "#A38047" }} ></hr>

                                        <p className="mt-3 font-weight-bold h6" style={{ color: "#000000", width: '65%' }}> מה האורחים שלכם אוהבים לראות בשולחן, ומה המנה הכי מבוקשת?</p>



                                    </div>



                                </div>





                                <div className="col-md-3 bg-light p-0" style={{ height: '450px' }}>
                                    <div className="h-50" style={{ backgroundImage: `url(${blog2})` }}></div>

                                    <div className="h-50 bg-light d-flex justify-content-center  flex-column align-items-center mr-0" style={{ marginRight: '1%' }}>

                                        <div className="font-weight-bold h2 mb-0" style={{ color: "#A38047" }}>צילום ותמונות </div>
                                        <hr className="font-weight-bold m-auto mb-2 mt-3" style={{ width: '11%', height: '5px', opacity: '1', color: "#A38047" }} ></hr>

                                        <p className="mt-3 font-weight-bold h6" style={{ color: "#000000", width: '50%' }}>איך יודעים איזה צלם לבחור? מה הפורמט שהכי מתאים? </p>



                                    </div>



                                </div>






                                <div className="col-md-3 bg-light p-0" style={{ height: '450px' }}>
                                    <div className="h-50" style={{ backgroundImage: `url(${blog3})` }}></div>

                                    <div className="h-50 bg-light d-flex justify-content-center  flex-column align-items-center mr-0" style={{ marginRight: '1%' }}>

                                        <div className="font-weight-bold h2 mb-0" style={{ color: "#A38047" }}>עיצובי פרחים </div>
                                        <hr className="font-weight-bold m-auto mb-2 mt-3" style={{ width: '11%', height: '5px', opacity: '1', color: "#A38047" }} ></hr>

                                        <p className="mt-3 font-weight-bold h6" style={{ color: "#000000", width: '55%' }} > איזה פרחים כדאי לבחור לאירוע ?ואיך נדע איזה סגנון מתאים </p>

                                        {/* <p className="font-weight-bold  " style={{ width: '11%', height: '5px', opacity: '1', color: "#A38047", marginRight: '60%' }} >&bull; &bull; &bull;</p> */}





                                    </div>



                                </div>




                                <div className="col-md-1"></div>



                            </div>

                            <div className="addLocation row justify-content-between  " style={{ height: '270px', marginTop: '10%' }} >
                                <div className="col-md-2" ></div>
                                <div className="col-md-7 d-flex  align-items-end  justify-content-center flex-column pl-5  pr-5 pb-3  pt-3" style={{ backgroundColor: "#404041", border: ' 1px solid #C69A51' }}>

                                    <div style={{ color: '#FFFFFF', fontSize: '60px', lineHeight: "1" }}>?מתחתנים </div>
                                    <div className="mb-4" style={{ color: '#A38047', fontSize: '60px', fontWeight: '900', lineHeight: "1" }}>מזל"ט סקופ</div>
                                    <div className="h4" style={{ color: '#FFFFFF' }}>!הזמינו עוד היום אירוע חתונה בטעם מנצח</div>
                                </div>
                                <div className="col-md-2" ></div>

                            </div>
                            <div style={{ height: '150px' }}></div>
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