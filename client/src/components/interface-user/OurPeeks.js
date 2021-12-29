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
import { Form, FormControl, Nav, Button, NavDropdown, Image } from "react-bootstrap";
import bgImagOurPeeks from '../../data/imges/bgImagOurPeeks.png'
import profile from '../../data/imges/profile.png'
import teamImages from '../../data/imges/teamImages.png'
export function OurPeeks(props) {


    return (

        <div style={{
            backgroundImage: `url(${bgImagOurPeeks})`,
            height: '1400px',
            width: '100vw',

        }} >


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



            <section className="" style={{ height: '100%' }}>

                <div id="mySidenav" class="sidenav">

                </div>
                <div class="OurPeekscontent flex-column ">
                    <div className="routing"> דף הבית &gt; סקופ קייטרינג &gt; הצוות שלנו</div>
                    <hr className="hrStyle hrUnderRouting " />
                    <div className="titel">
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

                            <div className="titel d-flex flex-column align-items-center">
                                <h1 className="font-weight-bold mb-0">  הצוות שלנו באירועים</h1>
                                <hr className="hrStyle mt-3" style={{ width: '6%' }} />
                            </div>

                            <div className="imgContainer mb-5">
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
