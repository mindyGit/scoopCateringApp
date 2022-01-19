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
export function ShoppingCart(props) {
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
                <label > סל הקניות</label>
                {isTablet ? <img className="h-100 " src={headerBgImag} /> : <img className="h-100 w-100" src={headerBgImag} />}


            </div>
            <div className="page_content justify-content-center pt-5 mt-5" style={{ width: '80%', margin: 'auto' }}>

                <h2 className="text-end mb-4 font-weight-bold">סל הקניות</h2>
                <div className="row justify-content-between rtl">
                    <div className=" bg-grey col-8  px-5 pb-3">
                        <div className="row justify-content-around text-white align-items-center py-3">
                            <div className="col-2 text-black mb-0 h6">שם המוצר</div>|
                            <div className="col-2 text-black mb-0 h6">כמות</div>|
                            <div className="col-2 text-black mb-0 h6">מחיר</div>|
                            <div className="col-3 text-black text-end pr-5 mb-0 h6">סה"כ</div>
                        </div>
                        <div className="productItem row justify-content-between align-items-end    border-bottom border-dark py-2">
                            <div className='col-3 productName font-weight-bold text-end '> סלומון ברוטב טריאקי

                                <select class="form-select form-select-x-sm rtl pb-0 pt-0 border-0 rounded-0 font-weight-bold" aria-label=".form-select-sm example" style={{ width: 'fit-content', fontSize: '12px' }}>
                                    <option selected> 1 יחי'</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                            <div className='col-2 amountToBuy goldColor d-flex align-items-end'><div>+</div><div className='border text-black bg-white pt-0 pb-0 pl-2 pr-2  m-1 my-0' style={{ fontSize: '13px' }}>1</div><div>-</div></div>
                            <div className='col-2 price h6 mb-0 font-weight-bold  goldColor ' >14.90 &#8362; </div>

                            <div className='col-2 endprice h6 mb-0 font-weight-bold pr-5 ' >46.70 &#8362; </div>
                            <i class="fas fa-trash-alt col-1"></i>


                        </div>

                        <div className="productItem row justify-content-between align-items-end    border-bottom border-dark py-2">
                            <div className='col-3 productName font-weight-bold text-end '> סלומון ברוטב טריאקי

                                <select class="form-select form-select-x-sm rtl pb-0 pt-0 border-0 rounded-0 font-weight-bold" aria-label=".form-select-sm example" style={{ width: 'fit-content', fontSize: '12px' }}>
                                    <option selected> 1 יחי'</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                            <div className='col-2 amountToBuy goldColor d-flex align-items-end'>+<div className='border text-black bg-white pt-0 pb-0 pl-2 pr-2  m-1 my-0' style={{ fontSize: '13px' }}>1</div>-</div>
                            <div className='col-2 price h6 mb-0 font-weight-bold  goldColor ' >14.90 &#8362; </div>

                            <div className='col-2 endprice h6 mb-0 font-weight-bold pr-5 ' >46.70 &#8362; </div>
                            <i class="fas fa-trash-alt col-1"></i>


                        </div>

                        <div className="productItem row justify-content-between align-items-end    border-bottom border-dark py-2">
                            <div className='col-3 productName font-weight-bold text-end '> סלומון ברוטב טריאקי

                                <select class="form-select form-select-x-sm rtl pb-0 pt-0 border-0 rounded-0 font-weight-bold" aria-label=".form-select-sm example" style={{ width: 'fit-content', fontSize: '12px' }}>
                                    <option selected> 1 יחי'</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                            <div className='col-2 amountToBuy goldColor d-flex align-items-end'>+<div className='border text-black bg-white pt-0 pb-0 pl-2 pr-2  m-1 my-0' style={{ fontSize: '13px' }}>1</div>-</div>
                            <div className='col-2 price h6 mb-0 font-weight-bold  goldColor ' >14.90 &#8362; </div>

                            <div className='col-2 endprice h6 mb-0 font-weight-bold pr-5 ' >46.70 &#8362; </div>
                            <i class="fas fa-trash-alt col-1"></i>


                        </div>

                        <div className="productItem row justify-content-between align-items-end    py-2">
                            <div className='col-3 productName font-weight-bold text-end '> סלומון ברוטב טריאקי

                                <select class="form-select form-select-x-sm rtl pb-0 pt-0 border-0 rounded-0 font-weight-bold" aria-label=".form-select-sm example" style={{ width: 'fit-content', fontSize: '12px' }}>
                                    <option selected> 1 יחי'</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                            <div className='col-2 amountToBuy goldColor d-flex align-items-end'>+<div className='border text-black bg-white pt-0 pb-0 pl-2 pr-2  m-1 my-0' style={{ fontSize: '13px' }}>1</div>-</div>
                            <div className='col-2 price h6 mb-0 font-weight-bold  goldColor ' >14.90 &#8362; </div>

                            <div className='col-2 endprice h6 mb-0 font-weight-bold pr-5 ' >46.70 &#8362; </div>
                            <i class="fas fa-trash-alt col-1"></i>


                        </div>


                    </div>
                    <div className=" bg-grey col-3 ml-5 p-0">
                        <label className="bg-black text-white w-100 pt-1 text-end pr-4" >סיכום הזמנה</label>
                        <div className="px-4">
                            <div className="row ">
                                <div className="col-10 text-end">פריטים</div>
                                <div className="col-2 ">12</div>
                            </div>
                            <br />
                            <br />
                            <div className="row border-bottom border-dark pb-3">
                                <div className="col-8 text-end">סך ביניים</div>
                                <div className="col-4 ">258 ש"ח</div>
                            </div>
                            <div className="row pt-2 font-weight-bold ">
                                <div className="col-7 text-end">סה"כ</div>
                                <div className="col-5 ">178.8 ש"ח</div>
                            </div>
                            <button className="mt-5 goldButton mb-5" onClick={() => props.history.push('/Checkout')}> לרכישה<img src={arrow_left_white} style={{
                                paddingRight: '5px',
                                width: '25px'
                            }} /></button>
                            <div className="col text-end h6">
                                <div>סקופ</div>
                                <div>כתובתינו:</div>
                                <div>שעות פתיחה:</div>


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
export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);
