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
import bneiAkivaImage from '../../data/imges/bneiAkivaImage.png'
import taglitImage from '../../data/imges/taglitImage.png'
import teamImages from '../../data/imges/teamImages.png'
import profile from '../../data/imges/profile.png'



export function OurCustomers(props) {


    return (

        <div style={{
            backgroundImage: `url(${bgImagOurPeeks})`,
            height: '780px',
            width: '100vw',

        }} >
            {/* <img className="w-100" src={bgImagOurPeeks} /> */}


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

                <div class="short-sideNuv">

                </div>
                <div class="OurPeekscontent flex-column ">
                    <div className="routing"> דף הבית &gt; סקופ קייטרינג &gt;לקוחותינו</div>
                    <hr className="hrStyle hrUnderRouting " />
                    <div className="titel">
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
