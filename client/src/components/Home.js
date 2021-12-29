import React from 'react';

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
import background_image from '../data/imges/backgroundImg.png'
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
// import searchIcon from '../data/imges/searchIcon.svg'
// import { ReactComponent as YourSvg } from '../data/imges/searchIcon.svg';


export function Home(props) {
    return (
        <>


            <div style={{
                backgroundImage: `url(${background_image})`,
                height: '800px',
                width: '100vw',

            }} >

                <div>
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
                            top: '0px',
                            padding: '12px'


                        }} src={logo} />

                        <Header />
                        <div style={{
                            backgroundColor: 'rgba(0,0,0,0.5)'

                        }}> <Nuv /></div>

                    </div>



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
                            <div className="d-flex justify-content-center align-items-center flex-column" style={{
                                height: '400px', border: '2px solid #C69A51'
                                , opacity: '1', top: '837px'

                                , width: '32%',

                                backgroundColor: "#111111",

                            }}>
                                <div className=" font-weight-bold  w-25 mb-0 whiteColor" style={{ lineHeight: '1.1', fontSize: '240%' }}>אוכל</div>

                                <div className=" font-weight-bold whiteColor w-50" style={{ lineHeight: '1.1', fontSize: '240%' }}> מוכן לשבת</div>
                                <div className="font-weight-bold whiteColor" style={{ lineHeight: '0.1', fontSize: '250%' }}>__</div>
                                {/* <div ><i class="fas fa-horizontal-rule"></i></div> */}
                            </div>
                            <div className="d-flex justify-content-center align-items-center flex-column" style={{
                                height: '400px', border: '2px solid #C69A51'
                                , opacity: '1', top: '837px'

                                , width: '42%',
                                // backgroundImage: `url(${galeryImag})`
                            }}>
                                <img className='w-100 h-100' src={galeryImag} />
                                <div className='position-absolute'>
                                    <div className=" font-weight-bold whiteColor " style={{ fontSize: '250%', textShadow: '2px 2px 2px black' }} >גלריות</div>
                                    <div className="font-weight-bold whiteColor " style={{ lineHeight: '0.1', fontSize: '260%', textShadow: '2px 2px 2px black' }}>__</div>
                                </div>
                            </div>
                        </Row>
                        <p className="whiteColor" style={{
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



                        <div className="row justify-content-around" style={{ height: '550px' }}>
                            {/* <div className="col-md-3 bg-light"></div>

                            <div className="col-md-3 bg-light ">bhjnmkl,</div>

                            <div className="col-md-5 bg-light"></div> */}


                            <div className=" bg-light d-flex justify-content-center  flex-column align-items-center col-md-3 p-0" style={{ marginLeft: '1%' }}> <div className="text-dark border border-dark pl-4  pr-4 pb-2  pt-2 h4 font-weight-bold position-absolute">?רוצים להתפנק</div><img className='w-100' src={img1} /></div>
                            <div className=" bg-light d-flex justify-content-center  flex-column align-items-center col-md-3 p-0" > <div className="text-dark border border-dark pl-4  pr-4 pb-2  pt-2 h4 font-weight-bold position-absolute">תפריט מומלץ</div><img className='w-100' src={img1} /></div>

                            {/* <div className=" bg-light d-flex justify-content-center  flex-column align-items-center  col-md-3" style={{ backgroundImage: `url(${img1})` }}><div className="text-dark border border-dark pl-4  pr-4 pb-2  pt-2 h4 font-weight-bold">תפריט מומלץ</div></div> */}
                            <div className=" bg-light d-flex justify-content-center  flex-column align-items-center" style={{ width: '46%', marginRight: '1%' }}>

                                <div className="font-weight-bold h2" style={{ color: "#A38047" }}>מתכנן אירוע</div>
                                <div className="font-weight-bold" style={{ lineHeight: '0.1', fontSize: '250%', color: "#A38047" }}>__</div>
                                <p className="mt-5 w-50" style={{ color: "#000000" }}>לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית להאמית קרהשק סכעיט דז מא, מנכם למטכין נשואי מנורךגולר מונפרר סוברט לורם שבצק יהול, לכנוץ בעריר גק ליץ, ושבעגט. קוואזי במר מודוף. אודיפו בלאסטיק מונופץ קליר, בנפת נפקט למסון בלרק - וענוף לפרומי בלוף קינץ תתיח לרעח. לת צשחמי צש בליא, מנסוטו צמלח לביקו ננבי, צמוקו</p>



                            </div>



                        </div>


                        <div className="row justify-content-around mt-3" style={{ height: '426px' }}>
                            <div className=" bg-light d-flex justify-content-center  flex-column align-items-center " style={{ width: '38%', marginLeft: '1%' }}>
                                <div className="font-weight-bold h2" style={{ color: "#A38047" }}> ?מארגנים טיול לעובדים</div>
                                <div className="font-weight-bold" style={{ lineHeight: '0.1', fontSize: '250%', color: "#A38047" }}>__</div>
                                <p className="mt-5 w-50" style={{ color: "#000000" }}>לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית להאמית קרהשק סכעיט דז מא, מנכם למטכין נשואי מנורךגולר מונפרר סוברט לורם שבצק יהול, לכנוץ בעריר גק ליץ, ושבעגט. קוואזי במר מודוף. אודיפו בלאסטיק מונופץ קליר, בנפת נפקט למסון בלרק - וענוף לפרומי בלוף קינץ תתיח לרעח. לת צשחמי צש בליא, מנסוטו צמלח לביקו ננבי, צמוקו</p>
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
                        <div className="row  justify-content-around">
                            <div className="col-md-2 text-end pr-0 standartFont">סקופ</div>
                            <div className="col-md-6 grad1 rounded-pill ">
                                <div className=" rounded-circle bg-light circleOngrad1  border-dark"></div>
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