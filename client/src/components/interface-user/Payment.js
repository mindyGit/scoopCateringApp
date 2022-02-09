import React, { useEffect, useState } from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import '../../App.css';
import { connect } from 'react-redux';
import Store from '../../redux/store'
import { actions } from '../../redux/actions/action';
import Search from '../Search';
import Nuv from '../mainPage/Nuv'
import Header from './Header'
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
    const { i18n } = useTranslation();
    // const products = Store.getState().productReducer.products
    const [total, setTotal] = useLocalStorage("total", 0);

    function useLocalStorage(key, initialValue) {
        debugger
        // State to store our value
        // Pass initial state function to useState so logic is only executed once
        const [storedValue, setStoredValue] = useState(() => {
            try {
                // Get from local storage by key
                const item = window.localStorage.getItem(key);
                // Parse stored json or if none return initialValue
                return item ? JSON.parse(item) : initialValue;
            } catch (error) {
                // If error also return initialValue
                console.log(error);
                return initialValue;
            }
        });
        // Return a wrapped version of useState's setter function that ...
        // ... persists the new value to localStorage.
        const setValue = (value) => {
            try {
                // Allow value to be a function so we have same API as useState
                const valueToStore =
                    value instanceof Function ? value(storedValue) : value;
                // Save state
                setStoredValue(valueToStore);
                // Save to local storage
                window.localStorage.setItem(key, JSON.stringify(valueToStore));
            } catch (error) {
                // A more advanced implementation would handle the error case
                console.log(error);
            }
        };
        return [storedValue, setValue];
    }


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

                <label > {i18.t('payment')}  <button className='white-arrow h4 p-1 ' onClick={() => props.history.goBack()} ><i class="fas fa-long-arrow-alt-right  pr-2" style={{ height: 'fit-content' }} ></i> </button> </label>

                {isTablet ? <img className="h-100 " src={headerBgImag} /> : <img className="h-100 w-100" src={headerBgImag} />}


            </div>
            <div className='location pt-3 swithSide px-5 ' >
                <div className='d-inline' onClick={() => props.history.push('/')}>{i18.t('ScoopCatering')}</div>
                <div className='d-inline' onClick={() => props.history.push('/Checkout')}> /{i18.t('checkout')}</div>

                <div className='goldColor d-inline'> /{i18.t('payment')}  </div>
            </div>
            <div className="page_content justify-content-center pt-3 " style={{ width: '65%', margin: 'auto' }}>

                <h2 className="swithSide mb-5 font-weight-bold mt-5 pt-5 ml-5">{i18.t('FormOfPayment')} </h2>
                <div className="row justify-content-start swithDir">
                    <div className="  col-6 ml-5 p-0 swithSide ">





                        <label className="  w-100 pt-1 swithSide  goldbgColor px-3 mb-0" >{i18.t('PersonalInformation')}</label>
                        <div className=" bg-grey mb-4">

                            <Form className="px-3 swithSide w-75 py-3 mb-3  ">

                                <Form.Group className="mb-2" controlId="formBasicEmail">
                                    <Form.Label class="mb-1"> {i18.t('CardNumber')}</Form.Label>
                                    <Form.Control className="rounded-0" type="tel" inputmode="numeric" pattern="[0-9\s]{13,19}" autocomplete="cc-number" maxlength="19" placeholder="xxxx xxxx xxxx xxxx" />
                                </Form.Group>
                                <Form.Group className="mb-2 row" controlId="formBasicEmail">
                                    <div className="col-6">
                                        <Form.Label class="mb-1"> {i18.t('Expiration')} </Form.Label>
                                        <Form.Control className="rounded-0" placeholder="MM/YYYY" type="text" />
                                    </div>



                                </Form.Group>

                                <Form.Group className="mb-2 row" controlId="formBasicName">
                                    <div className="col-6">
                                        <Form.Label class="mb-1">{i18.t('CVV')}</Form.Label>
                                        <Form.Control className="rounded-0" maxLength="3" type="text" />
                                    </div>

                                </Form.Group>

                                <Form.Group className="mb-2" controlId="formBasicLastName">
                                    <Form.Label class="mb-1">{i18.t('Id')}</Form.Label>
                                    <Form.Control className="rounded-0" minLength="8" type="text" />
                                </Form.Group>

                            </Form>

                        </div>
                        <label className="  w-100 pt-1 swithSide  goldbgColor px-3 mb-0" >{i18.t('AdditionalPayment')} </label>
                        <div className=" bg-grey p-3 mb-4">
                            <p className="w-75">{i18.t('AdditionalPayment_')}</p>
                            <div className="row">
                                <select className="col-4 px-1 pt-1" style={{ height: 'fit-content', fontSize: 'medium' }}>
                                    <option> {i18.t('paymentMethod')}</option>
                                    <option>{i18.t('payBox')}</option>
                                    <option>{i18.t('Bit')}</option>
                                    <option>{i18.t('BankTransfer')}</option>
                                </select>
                                <input className=" col-3 mx-1 pt-1 swithSide px-0" type="text" style={{ fontSize: 'medium' }} />
                                <button className=" col-3  goldButton  mb-4 mr-1 " > {i18.t('ActivateCode')}  <img style={{ paddingRight: '5px' }} /></button>
                            </div>
                        </div>
                        <div className="w-50 mr50">

                            <label className="  w-100  pt-1 swithSide  bg-black text-white px-3 mb-0" >{i18.t('TotalPayment')}</label>
                            <div className=" bg-grey p-3 mb-4">
                                <div className="row pt-2 font-weight-bold ">
                                    <div className="col-7 swithSide">{i18.t('Total')}</div>
                                    <div className="col-5 ">{(parseFloat(parseFloat(total).toFixed(2)) + 25).toFixed(2)} &#8362;</div>
                                </div>
                            </div>

                            <button className="  goldButton mb-5 mr52" >{i18.t('MakePayment')}<img src={arrow_left_white} style={{

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
