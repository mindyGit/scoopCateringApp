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
export function Checkout(props) {
    const isMobile = useMediaQuery(768);
    const isTablet = useMediaQuery(1024);
    const { t, i18n } = useTranslation();
    const [numItems, setNumItems] = useLocalStorage("numItems", 0);
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

                <label > {i18.t('checkout')} <button className='white-arrow h4 p-1 ' onClick={() => props.history.goBack()} ><i class="fas fa-long-arrow-alt-right  pr-2" style={{ height: 'fit-content' }} ></i> </button> </label>

                {isTablet ? <img className="h-100 " src={headerBgImag} /> : <img className="h-100 w-100" src={headerBgImag} />}


            </div>
            <div className='location pt-3 swithSide px-5 ' >
                <div className='d-inline' onClick={() => props.history.push('/')}>{i18.t('ScoopCatering')}</div>
                <div className='goldColor d-inline'> / {i18.t('checkout')} </div>
            </div>
            <div className="page_content justify-content-center pt-5 " style={{ width: '65%', margin: 'auto' }}>

                <h2 className="swithSide mb-5 font-weight-bold mt-5 pt-5 ml-5">{i18.t('checkout')} </h2>
                <div className="row justify-content-start swithDir">
                    <div className="  col-6 ml-5 p-0 swithSide ">

                        <label className="  w-100 pt-1 swithSide  goldbgColor px-3 mb-0" >{i18.t('PersonalInformation')} </label>
                        <div className=" bg-grey mb-5">
                            <Form className="px-3 swithSide w-75 py-3 mb-3  ">
                                <Form.Group className="mb-2" controlId="formBasicEmail">
                                    <Form.Label class="mb-1"> {i18.t('mailAdress')}</Form.Label>
                                    <Form.Control className="rounded-0" type="email" />
                                </Form.Group>
                                <Form.Group className="mb-2" controlId="formBasicName">
                                    <Form.Label class="mb-1"> {i18.t('FirstName')}</Form.Label>
                                    <Form.Control className="rounded-0" type="text" />
                                </Form.Group>

                                <Form.Group className="mb-2" controlId="formBasicLastName">
                                    <Form.Label class="mb-1">{i18.t('LastName')}</Form.Label>
                                    <Form.Control className="rounded-0" type="text" />
                                </Form.Group>
                                <Form.Group className="mb-2" controlId="formBasicPhone">
                                    <Form.Label class="mb-1"> {i18.t('phone')}</Form.Label>
                                    <Form.Control className="rounded-0 " type="text" />
                                </Form.Group>
                                <Form.Group className="mb-2" controlId="formBasicPhone">
                                    <Form.Label class="mb-1"> {i18.t('anotherPhone')}</Form.Label>
                                    <Form.Control className="rounded-0 " type="text" />
                                </Form.Group>
                            </Form>
                        </div>



                        <label className="  w-100 pt-1 swithSide  goldbgColor px-3 mb-0" > {i18.t('deliveryDetails')} </label>
                        <div className=" bg-grey p-3 mb-5">
                            <div><label >{i18.t('AreaOrCity')}</label></div>
                            <select className="w-75">
                                <option></option>
                                AreaOrCity: 'אזור/עיר',
                                <option>{i18.t('BeitShemesh')}</option>
                                <option>{i18.t('GushEtzion')}</option>
                                <option>{i18.t('Jerusalem')}</option>
                                <option>{i18.t('Modiin')}</option>
                                <option>{i18.t('Raanana')}</option>
                            </select>
                            <div ><label >{i18.t('shippingMethod')}</label></div>
                            <div className="row  justify-content-around d-flex" style={{ width: '80%' }}>

                                <div className="col-3 shippingOption p-2 text-center"> {i18.t('shippingMethod1')}</div>
                                <div className="col-3  shippingOption p-2 text-center">{i18.t('shippingMethod2')}</div>
                                <div className="col-3  shippingOption p-0 pt-2 text-center">
                                    <div> {i18.t('shippingMethod3')}</div>

                                </div>
                            </div>
                        </div>
                        <label className="  w-100  pt-1 swithSide  goldbgColor px-3 mb-0" >{i18.t('InvoiceDetails')} </label>
                        <div className="bg-grey p-3 mb-5">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label class="form-check-label mr-4" for="flexCheckDefault">
                                    {i18.t('sameShippingAndAccountDetails')}
                                </label>
                            </div>

                        </div>
                        <label className="  w-100 pt-1 pb-1 swithSide  goldbgColor px-3 mb-0">{i18.t('CouponCode')} </label>
                        <div className="bg-grey p-3 mb-5">
                            <div>{i18.t('EnterCouponCode')}</div>
                            <div className="row p-2" style={{ width: '80%' }}>
                                <input className=" col-5 mr-1" type="text" />

                                <button className="goldButton col-5 mr-3" >{i18.t('ActivateCoupon')}</button>
                            </div>

                        </div>
                        <label className="  w-100 pt-1 pb-1 swithSide  goldbgColor px-3 mb-0">  {i18.t('CommentsToOrder')}  </label>
                        <div className="bg-grey p-3 mb-3">

                            <div className="row p-2" style={{ width: '80%' }}>
                                <div class="form-group pr-1">
                                    <label for="exampleFormControlTextarea1">{i18.t('CommentsToOrder')} </label>
                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                </div>
                            </div>

                        </div>

                        <div className="">
                            <div className="d-flex align-items-center"> <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                                <label className="mr-2 ml-3  mb-0" for="vehicle1 " style={{ fontSize: 'smaller' }}>{i18.t('ApprovalOfRegulations')}</label>
                            </div>
                            <div className="d-flex align-items-center">  <input type="checkbox" id="vehicle2" name="vehicle1" value="Bike" />
                                <label className="mr-2 ml-3 mb-0" for="vehicle2   " style={{ fontSize: 'smaller' }}> {i18.t('SaveDetails')}</label>
                            </div>



                        </div>



                        <button className=" mt-5 goldButton mb-5  mr71" onClick={() => props.history.push('/Payment')}> {i18.t('ContinueToPay')}<img src={arrow_left_white} style={{

                            paddingRight: '5px',
                            width: '25px'
                        }} /></button>
                    </div>
                    <div className=" bg-grey col-4 ml-5 p-0 pb-5">
                        <label className="bg-black text-white w-100 pt-1 swithSide px-3">{i18.t('OrderSummary')}</label>

                        <div className="px-4">
                            <div className="row ">

                                <div className="col-7 swithSide">{i18.t('Items')}</div>
                                <div className="col-5 numItems">{numItems}</div>

                            </div>
                            <br />
                            <br />
                            <div className="row  pb-3">

                                <div className="col-7 swithSide">{i18.t('InterimTotal')}</div>
                                <div className="col-5 ">{parseFloat(total).toFixed(2)} &#8362;</div>

                            </div>
                            <div className="row border-bottom border-dark pb-3">

                                <div className="col-7 swithSide">{i18.t('ShippingCost')}</div>
                                <div className="col-5 ">{parseFloat(25).toFixed(2)} &#8362;</div>

                            </div>
                            <div className="row pt-2 font-weight-bold ">

                                <div className="col-7 swithSide">{i18.t('Total')}</div>
                                <div className="col-5 ">{(parseFloat(parseFloat(total).toFixed(2)) + 25).toFixed(2)} &#8362;</div>

                            </div>
                            {/* <button className="mt-5 goldButton mb-5" onClick={() => props.history.push('/Checkout')}> {i18.t('toCheckout')} &#8594; </button> */}


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
