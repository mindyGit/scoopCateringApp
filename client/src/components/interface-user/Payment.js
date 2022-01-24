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
import i18 from '../../i18/i18';
import { useTranslation } from 'react-i18next';
export function Payment(props) {
    const isMobile = useMediaQuery(768);
    const isTablet = useMediaQuery(1024);
    const { t, i18n } = useTranslation();
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
                <label > {i18.t('payment')} </label>
                {isTablet ? <img className="h-100 " src={headerBgImag} /> : <img className="h-100 w-100" src={headerBgImag} />}


            </div>
            <div className='location pt-3 text-end px-5 ' >
                <div className='d-inline' onClick={() => props.history.push('/')}>{i18.t('ScoopCatering')}</div>
                <div className='d-inline' onClick={() => props.history.push('/Checkout')}> /{i18.t('checkout')}</div>

                <div className='goldColor d-inline'> /{i18.t('payment')}  </div>
            </div>
            <div className="page_content justify-content-center pt-3 " style={{ width: '65%', margin: 'auto' }}>

                <h2 className="text-end mb-5 font-weight-bold mt-5 pt-5">אמצעי תשלום </h2>
                <div className="row justify-content-start rtl">
                    <div className="  col-6 ml-5 p-0 text-end ">


                        <label className="  w-100 pt-1 text-end  goldbgColor px-3 mb-0" >פרטים אישיים </label>
                        <div className=" bg-grey mb-4">
                            <Form className="px-3 text-end w-75 py-3 mb-3  ">
                                <Form.Group className="mb-2" controlId="formBasicEmail">
                                    <Form.Label class="mb-1"> מספר כרטיס</Form.Label>
                                    <Form.Control className="rounded-0" type="text" />
                                </Form.Group>
                                <Form.Group className="mb-2 row" controlId="formBasicEmail">
                                    <div className="col-6">
                                        <Form.Label class="mb-1"> תוקף חודש </Form.Label>
                                        <Form.Control className="rounded-0" type="text" />
                                    </div>

                                    <div className="col-6">
                                        <Form.Label class="mb-1"> תוקף שנה</Form.Label>
                                        <Form.Control className="rounded-0" type="text" />
                                    </div>

                                </Form.Group>

                                <Form.Group className="mb-2" controlId="formBasicName">
                                    <Form.Label class="mb-1"> בגב הכרטיס</Form.Label>
                                    <Form.Control className="rounded-0" type="text" />
                                </Form.Group>

                                <Form.Group className="mb-2" controlId="formBasicLastName">
                                    <Form.Label class="mb-1">ת"ז</Form.Label>
                                    <Form.Control className="rounded-0" type="text" />
                                </Form.Group>

                            </Form>

                        </div>
                        <label className="  w-100 pt-1 text-end  goldbgColor px-3 mb-0" > אפשרויות תשלום נוספות </label>
                        <div className=" bg-grey p-3 mb-4">
                            <p>ביט / פייבוקס / העברה בנקאית </p>
                            <p>צרו קשר עם המשרד {i18.t('CompanyPhone')}</p>
                            <div className="row">
                                <select className="col-4 px-1 pt-1" style={{ height: 'fit-content', fontSize: 'medium' }}>
                                    <option> בחר אופן תשלום</option>
                                    <option>פייבוקס</option>
                                    <option>ביט </option>
                                    <option>העברה בנקאית </option>
                                </select>
                                <input className=" col-3 mr-1 pt-1 text-end px-0" type="text" style={{ fontSize: 'medium' }} />
                                <button className=" col-3  goldButton  mb-4 mr-1 " > הפעל קוד  <img style={{ paddingRight: '5px' }} /></button>
                            </div>
                        </div>
                        <div className="w-50 mr50">
                            <label className="  w-100  pt-1 text-end  bg-black text-white px-3 mb-0" >סה"כ לתשלום </label>
                            <div className=" bg-grey p-3 mb-4">
                                <div className="row pt-2 font-weight-bold ">
                                    <div className="col-7 text-end">סה"כ</div>
                                    <div className="col-5 ">178.8 ש"ח</div>
                                </div>
                            </div>

                            <button className="  goldButton mb-5 mr52" > בצע תשלום<img src={arrow_left_white} style={{

                                paddingRight: '5px',
                                width: '25px'
                            }} /></button>
                        </div>


                    </div>
                    <div className=" bg-grey col-3 ml-5 p-0">


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
export default connect(mapStateToProps, mapDispatchToProps)(Payment);
