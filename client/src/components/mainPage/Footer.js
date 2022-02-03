import React from "react";
import locationIcon from '../../data/imges/locationIcon.png'
import emailIcon from '../../data/imges/emailIcon.png'
import phoneI from '../../data/imges/emailIcon.png'
import VectorSmart from '../../data/imges/VectorSmart.png'
import allVectorSmart from '../../data/imges/allVectorSmart.png'
import InputGroup from 'react-bootstrap/InputGroup'

import i18 from '../../i18/i18';
import { useTranslation } from 'react-i18next';
import { Container, Form, FormControl, Nav, Button, NavDropdown, Image } from "react-bootstrap"
{/* <link rel="apple-touch-icon" sizes="76x76" href="./assets/img/apple-icon.png"> */ }

// <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />

// <meta content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0, shrink-to-fit=no' name='viewport' />

// import "https://fonts.googleapis.com/css?family=Montserrat:400,700,200|Open+Sans+Condensed:700"
// import "https://use.fontawesome.com/releases/v5.7.1/css/all.css"

export function Footer() {
    const { t, i18n } = useTranslation();

    return (
        <>
            <footer class="footer footer-big " style={{ backgroundColor: '#0F0F0F' }}>
                <div class="container">
                    <div class="content">
                        <div class="row">

                            <div class="col-md-1"></div>
                            <div class="col-md-5">

                                <div class="row col-12 align-items-center mr-0 mt-5 mailInput">

                                    <div class="col-4  text-center pr-0 mt-2 ">
                                        <button class="btn btn-danger rounded-pill pr-4 pl-4 mt-0" type="button">שלח</button>
                                    </div>

                                    <div class=" input-group col-8 pl-0" style={{ width: '65%' }} >
                                        <input type="text" class="rounded-pill form-control plS text-end" placeholder="הצטרפו לעידכונים מקייטרינג סקופ" />
                                    </div>


                                </div>
                                {/* <div className="row">
                                    <div className="h6 col-md-4"></div> */}
                                <p className="  text-end" style={{ color: 'white', paddingRight: '12%', fontSize: '0.9rem' }}>המייל נשלח בהצלחה</p>
                                {/* </div> */}

                                {/* <h5>עקבו אחרינו</h5> */}
                                <ul class="social-buttons text-center mt-5">

                                    <li>
                                        <Image src={allVectorSmart} />
                                    </li>

                                    <li>
                                        <Image src={VectorSmart} style={{ marginLeft: '6px' }} />
                                    </li>


                                </ul>

                            </div>







                            <div class="  col-md-2  text-end">
                                <div className=" ">
                                    <div className="">

                                        <h5 class="title">הזמנות</h5>
                                        <ul class="links-vertical ">
                                            <li>
                                                <a href="#pablo" class="text-muted subTitleB">
                                                    תפריט חתונה
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#pablo" class="text-muted subTitleB">
                                                    תפריט שבת
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#pablo" class="text-muted subTitleB">
                                                    תפריט חלבי
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="">
                                        <h5 class="title ">אירגונים וחברות</h5>
                                        <ul class="links-vertical ">
                                            <li>
                                                <a href="#pablo" class="text-muted subTitleB">
                                                    אירועי חוץ
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#pablo" class="text-muted subTitleB">
                                                    מידע ומאמרים
                                                </a>
                                            </li>

                                        </ul>
                                    </div>

                                </div>
                            </div>


                            <div class="col-md-2 text-end">
                                <h5 class="title">תפריטים</h5>
                                <ul class="links-vertical">
                                    <li>
                                        <a href="#pablo" class="text-muted subTitleB">
                                            תפריט חתונה
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#pablo" class="text-muted subTitleB">
                                            תפריט שבת
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#pablo" class="text-muted subTitleB">
                                            תפריט חלבי
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#pablo" class="text-muted subTitleB">
                                            תפריט חלבי בסיסי
                                        </a>
                                    </li>

                                </ul>
                                <h5 class="title">ממליצים</h5>
                                <ul class="links-vertical">
                                    <li></li></ul>


                            </div>






                            <div class="col-md-2 text-end">
                                <h5 class="title"> {i18.t('ScoopCatering')}</h5>
                                <ul class="links-vertical">
                                    <li>
                                        <a href="#pablo" class="text-muted subTitleB TitleB">
                                            הסיפור שלנו
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#pablo" class="text-muted subTitleB">
                                            לקוחותינו
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#pablo" class="text-muted subTitleB">
                                            חנויות הרשת
                                        </a>
                                    </li>

                                </ul>

                                <h5 class="title"> אירועים</h5>
                                <ul class="links-vertical">
                                    <li>
                                        <a href="#pablo" class="text-muted subTitleB">
                                            גלריות
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#pablo" class="text-muted subTitleB">
                                            הצוות שלנו
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#pablo" class="text-muted subTitleB">
                                            אירועים פרטיים
                                        </a>
                                    </li>

                                </ul>



                            </div>


                        </div>
                    </div>
                    <hr />
                    <div class="row col-12 d-flex whiteColor justify-content-center" style={{ marginTop: '2.5%' }}>


                        <div class=" col-md-3 mb-4 p-0 ml-5">
                            יישוב מייצד
                            <div className="d-inline rounded-circle iconBorder " style={{ marginLeft: '8px', paddingRight: '5%', paddingLeft: '5%', paddingTop: '4%', paddingBottom: '4%', backgroundColor: '#C59950' }}>
                                <Image src={locationIcon} style={{ height: '25px', marginBottom: "4px" }} />
                            </div>
                            {/* <Image src={locationIcon} style={{ marginRight: '8px' }} /> */}

                        </div>

                        <div class=" col-md-3 mb-4 p-0 mr-3">

                            {i18.t('CompanyEmail')}
                            <div className="d-inline rounded-circle iconBorder" style={{ marginLeft: '8px' }}>
                                <Image src={emailIcon} style={{ height: '18px', marginBottom: "3px" }} />
                            </div>
                            {/* <Image src={emailIcon} /> */}

                        </div>


                        <div class=" col-md-3 mb-4 p-0  ml-4">
                            {i18.t('CompanyPhone')}
                            <div className="d-inline rounded-circle iconBorder" style={{ marginLeft: '8px' }}>
                                <Image src={phoneI} style={{ height: '22px', marginBottom: "3px" }} />
                            </div>


                        </div>




                    </div>
                    {/* <div class="copyright">
                        Copyright &copy;
                        <script>
                            document.write(new Date().getFullYear())
                        </script> Creative Tim All Rights Reserved.

                    </div> */}
                </div>
            </footer>
        </>
    )
}
export default Footer