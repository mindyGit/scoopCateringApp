import React, { useEffect } from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import '../../App.css';
import { connect } from 'react-redux';
import Store from '../../redux/store'
import { actions } from '../../redux/actions/action';
import Search from '../Search';
import Nuv from '../mainPage/Nuv'
import Header from '../mainPage/Header'
import Footer from '../mainPage/Footer';
import UnderFooter from '../mainPage/UnderFooter'
import underLogo from '../../data/imges/underLogo.png'
import logo from '../../data/imges/logo.png'
import headerBgImag from '../../data/imges/headerBgImag.png'
import useMediaQuery from "../../hooks/useMediaQuery";
import { Container, Form, FormControl, Nav, Button, NavDropdown, Image, Dropdown, DropdownButton, ButtonGroup } from "react-bootstrap"
import Navbar from 'react-bootstrap/Navbar'
import Offcanvas from 'react-bootstrap/Offcanvas'
import Extras from '../../data/imges/foodCategories/Extras.png'
import fish from '../../data/imges/foodCategories/fish.png'
import salads from '../../data/imges/foodCategories/salads.png'
import shabat from '../../data/imges/foodCategories/shabat.png'
import desserts from '../../data/imges/foodCategories/desserts.png'
import mainCourses from '../../data/imges/foodCategories/mainCourses.png'
import products_ from '../../data/imges/foodCategories/products.png'
import Hamborger from '../mainPage/Hamborger'
import TopPageDesktop from '../mainPage/TopPageDesktop'
import arrow_left_white from '../../data/imges/arrow-left-white.png'
import $ from 'jquery'
export function Checkout(props) {
    const isMobile = useMediaQuery(768);
    const isTablet = useMediaQuery(1024);

    const products = Store.getState().productReducer.products
    useEffect(() => {
        if ($) { }
    }, [$])
    return (
        <>
            {/* <Search details={products} /> */}
            <div className="pageNuv">
                {isTablet && (
                    <Hamborger />

                )}

                {!isMobile && !isTablet && (
                    <TopPageDesktop />
                )}
            </div>

            <div className="pageHeader">
                <label > ביצוע הזמנה </label>
                {isTablet ? <img className="h-100 " src={headerBgImag} /> : <img className="h-100 w-100" src={headerBgImag} />}


            </div>
            <div className="page_content justify-content-center pt-3 " style={{ width: '65%', margin: 'auto' }}>
                <div className='location ' style={{ right: '50px', position: 'absolute' }}>
                    <div className='d-inline' onClick={() => props.history.push('/')}>ראשי</div>
                    <div className='goldColor d-inline'> / ביצוע הזמנה </div>
                </div>
                <h2 className="text-end mb-5 font-weight-bold mt-5 pt-5">ביצוע הזמנה </h2>
                <div className="row justify-content-start rtl">
                    <div className="  col-6 ml-5 p-0 text-end ">

                        <label className="  w-100 pt-1 text-end  goldbgColor px-3 mb-0" >פרטים אישיים </label>
                        <div className=" bg-grey mb-5">
                            <Form className="px-3 text-end w-75 py-3 mb-3  ">
                                <Form.Group className="mb-2" controlId="formBasicEmail">
                                    <Form.Label class="mb-1"> כתובת מייל</Form.Label>
                                    <Form.Control className="rounded-0" type="email" />
                                </Form.Group>
                                <Form.Group className="mb-2" controlId="formBasicName">
                                    <Form.Label class="mb-1"> שם פרטי</Form.Label>
                                    <Form.Control className="rounded-0" type="text" />
                                </Form.Group>

                                <Form.Group className="mb-2" controlId="formBasicLastName">
                                    <Form.Label class="mb-1"> שם משפחה</Form.Label>
                                    <Form.Control className="rounded-0" type="text" />
                                </Form.Group>
                                <Form.Group className="mb-2" controlId="formBasicPhone">
                                    <Form.Label class="mb-1"> טלפון </Form.Label>
                                    <Form.Control className="rounded-0 " type="text" />
                                </Form.Group>
                                <Form.Group className="mb-2" controlId="formBasicPhone">
                                    <Form.Label class="mb-1"> טלפון נוסף </Form.Label>
                                    <Form.Control className="rounded-0 " type="text" />
                                </Form.Group>
                            </Form>
                        </div>

                        <label className="  w-100 pt-1 text-end  goldbgColor px-3 mb-0" > פרטי משלוח </label>
                        <div className=" bg-grey p-3 mb-5">
                            <div><label >אזור/עיר</label></div>
                            <select className="w-75">
                                <option></option>

                                <option>בית שמש</option>
                                <option>גוש עציון</option>
                                <option>ירושלים</option>
                                <option>מודיעין</option>
                                <option>רעננה</option>
                            </select>
                            <div ><label >אנא בחר בשיטת משלוח</label></div>
                            <div className="row pr-3" style={{ width: '80%' }}>

                                <div className="col-3 shippingOption p-2 text-center"> איסוף עצמי מהחנות</div>
                                <div className="col-3 mr-3 shippingOption p-2 text-center">משלוח עד הבית</div>
                                <div className="col-3 mr-3 shippingOption p-0 pt-2 text-center">
                                    <div> הזמנות הפתעה/</div>
                                    <div> כתובת שונה</div>
                                </div>
                            </div>
                        </div>
                        <label className="  w-100  pt-1 text-end  goldbgColor px-3 mb-0" > פרטי חשבונית </label>
                        <div className="bg-grey p-3 mb-5">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label class="form-check-label mr-4" for="flexCheckDefault">
                                    פרטי המשלוח ופרטי החשבון זהים
                                </label>
                            </div>

                        </div>
                        <label className="  w-100 pt-1 pb-1 text-end  goldbgColor px-3 mb-0"> קוד קופון  </label>
                        <div className="bg-grey p-3 mb-5">
                            <div>הזינו קוד קופון</div>
                            <div className="row p-2" style={{ width: '80%' }}>
                                <input className=" col-5 mr-1" type="text" />

                                <button className="goldButton col-5 mr-3" >הפעל קופון</button>
                            </div>

                        </div>
                        <label className="  w-100 pt-1 pb-1 text-end  goldbgColor px-3 mb-0"> הערות להזמנה   </label>
                        <div className="bg-grey p-3 mb-3">

                            <div className="row p-2" style={{ width: '80%' }}>
                                <div class="form-group pr-1">
                                    <label for="exampleFormControlTextarea1">הערות להזמנה</label>
                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                </div>
                            </div>

                        </div>
                        <div className="d-flex align-items-center">
                            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                            <label className="mr-2 ml-3  mb-0" for="vehicle1 " style={{ fontSize: 'smaller' }}>אישור תקנון:תכין תקנון</label>
                            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                            <label className="mr-2 mb-0" for="vehicle1   " style={{ fontSize: 'smaller' }}> שמור פרטים לפעם הבאה</label>
                        </div>



                        <button className=" mt-5 goldButton mb-5  mr71" onClick={() => props.history.push('/Payment')}> המשך לתשלום<img src={arrow_left_white} style={{

                            paddingRight: '5px',
                            width: '25px'
                        }} /></button>
                    </div>
                    <div className=" bg-grey col-4 ml-5 p-0">
                        <label className="bg-black text-white w-100 pt-1 text-end px-3">סיכום הזמנה</label>
                        <div className="px-4 pb-5">
                            <div className="row ">
                                <div className="col-8 text-end">פריטים</div>
                                <div className="col-4 text-start">12</div>
                            </div>

                            <br />
                            <br />
                            <div className="row">
                                <div className="col-7  text-end">סך ביניים</div>
                                <div className="col-3 pl-0 ">153.8 </div>
                                <div className="col-2 pr-0 ">ש"ח</div>

                            </div>

                            <div className="row border-bottom border-dark pb-3 pt-3">
                                <div className="col-7  text-end">עלות המשלוח </div>
                                <div className="col-3 pl-0 ">25 </div>
                                <div className="col-2 pr-0"> ש"ח</div>

                            </div>
                            <div className="row pt-2 font-weight-bold ">
                                <div className="col-7  text-end">סה"כ</div>
                                <div className="col-3 pl-0 ">178.8 </div>
                                <div className="col-2 pr-0 "> ש"ח</div>

                            </div>


                        </div>

                    </div>


                </div>
            </div>


            <div className="PageFooter mt-5">
                <Footer />
                <UnderFooter />
            </div>
        </>

    );
}
const mapStateToProps = (state) => {
    return {

    };
}

const mapDispatchToProps = (dispatch) => ({

})
export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
