import React from "react";
import '../../App.css';
import { connect } from 'react-redux';
import Store from '../../redux/store'
import { actions } from '../../redux/actions/action';
import blog3 from '../../data/imges/blog3.png'

import Section from '../mainPage/Section';

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


import Hamborger from '../mainPage/Hamborger'
import TopPageDesktop from '../mainPage/TopPageDesktop'
export function OurPeeks(props) {

    const isMobile = useMediaQuery(768);
    const isTablet = useMediaQuery(1024);

    return (

        <div style={{
            // backgroundImage: `url(${bgImagOurPeeks})`,
            height: '1400px',
            width: '100vw'

        }} >

            <div className="pageNuv">
                {isTablet && (
                    <Hamborger />

                )}

                {!isMobile && !isTablet && (
                    <TopPageDesktop />

                )}
            </div>

            <div className="pageHeader">
                <label > הצוות שלנו</label>
                {isTablet ? <img className="h-100 " src={headerBgImag} /> : <img className="h-100 w-100" src={headerBgImag} />}


            </div>




            <section className="" style={{ height: '100%' }}>


                <div class="OurPeekscontent flex-column ">

                    {/* <div className="routing text-end pr-4 pt-3">  דף הבית&gt; סקופ קייטרינג <span style={{ color: "#C59950 " }}>&gt; הצוות שלנו</span>&gt;</div> */}
                    <div className='location ' style={{ right: '50px', position: 'absolute' }}>
                        <div className='d-inline' onClick={() => props.history.push('/')}>ראשי</div>   /
                        <div className='d-inline'>סקופ קייטרינג  </div>
                        <div className='goldColor d-inline'> /הצוות שלנו </div>
                    </div>

                    <div className="titel pt-5 mt-5">
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
