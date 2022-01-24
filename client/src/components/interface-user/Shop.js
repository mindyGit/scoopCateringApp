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
import soops from '../../data/imges/foodCategories/soops_.jpg'
import drinks from '../../data/imges/drinks.png'

import $ from 'jquery'
import i18 from '../../i18/i18';
import { useTranslation } from 'react-i18next';


import { height } from "@mui/system";




export function Shop(props) {

    const isMobile = useMediaQuery(768);
    const isTablet = useMediaQuery(1024);
    const { t, i18n } = useTranslation();
    const products = Store.getState().productReducer.products
    useEffect(() => {
        if ($) {
            $(".categoryHover").mouseover(function () {
                $(this).find('.categoryTitle').removeClass("d-none")

            });
            $(".categoryHover").mouseout(function () {
                $(this).find('.categoryTitle').addClass("d-none")

            });
        }
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
                <label > {i18.t('shabatMenu')} </label>
                {isTablet ? <img className="h-100 " src={headerBgImag} /> : <img className="h-100 w-100" src={headerBgImag} />}


            </div>

            <div className='location pt-3 text-end px-5 ' >
                <div className='d-inline' onClick={() => props.history.push('/')}>{i18.t('ScoopCatering')}</div>
                <div className='goldColor d-inline'> /{i18.t('shabatMenu')}  </div>
            </div>
            <div className="page_content justify-content-center pt-5">

                <h2>{i18.t('PreparedFoodCategories')} </h2>
                <hr className="m-auto mb-3 goldColor" style={{ width: '4%', height: '3px', opacity: '1' }} ></hr>
                <h6>{i18.t('ComeAndTasteTheShabbatFood')}</h6>
                <div className="foodCategories">


                    <div className="row mb-3 d-flex justify-content-center wrapper">
                        <div className="categoryItem mr-3 p-0" style={{ width: '20%', height: '380px' }}><div className="categoryHover" onClick={() => props.history.push('/shop/Appetizers')}>
                            <div className=" categoryTitle d-none  p-3"><h5 className=" font-weight-bold ">מנות פתיחה</h5> <h6 className=" mb-0">מוצרים 20</h6></div>
                        </div>
                            <img className="h-100 w-100" src={fish} />
                        </div>

                        <div className="categoryItem mr-3 p-0" style={{ width: '20%', height: '380px' }}><div className="categoryHover" onClick={() => props.history.push('/shop/Salads')}>
                            <div className=" categoryTitle d-none  p-3"><h5 className=" font-weight-bold">סלטים </h5> <h6 className=" mb-0">מוצרים 20</h6></div>
                        </div>
                            <img className="h-100 w-100" src={salads} />
                        </div>

                        <div className="categoryItem mr-3 p-0" style={{ width: '20%', height: '380px' }}><div className="categoryHover" onClick={() => props.history.push('/shop/Bakery')}>
                            <div className=" categoryTitle d-none  p-3"><h5 className=" font-weight-bold">מאפיה</h5> <h6 className=" mb-0">מוצרים 36</h6></div>
                        </div>
                            <img className="h-100 w-100" src={shabat} />
                        </div>



                    </div>
                    <div className="row mb-3 d-flex justify-content-center">
                        <div className="categoryItem mr-3 p-0" style={{ width: '20%', height: '380px' }}><div className="categoryHover" onClick={() => props.history.push('/shop/Desserts')}>
                            <div className=" categoryTitle d-none  p-3"><h5 className=" font-weight-bold">קינוחים </h5> <h6 className=" mb-0">מוצרים 20</h6></div>
                        </div>
                            <img className="h-100 w-100" src={desserts} />
                        </div>

                        <div className="categoryItem mr-3 p-0" style={{ width: '20%', height: '380px' }}><div className="categoryHover" onClick={() => props.history.push('/shop/MainCourses')}>
                            <div className=" categoryTitle d-none  p-3"><h5 className=" font-weight-bold">מנות עקריות</h5> <h6 className=" mb-0">מוצרים 20</h6></div>
                        </div>
                            <img className="h-100 w-100" src={mainCourses} />
                        </div>

                        <div className="categoryItem mr-3 p-0" style={{ width: '20%', height: '380px' }}><div className="categoryHover" onClick={() => props.history.push('/shop/Extras')}>
                            <div className=" categoryTitle d-none  p-3"><h5 className=" font-weight-bold"> תוספות</h5> <h6 className=" mb-0">מוצרים 20</h6></div>
                        </div>
                            <img className="h-100 w-100" src={Extras} />
                        </div>


                    </div>
                    <div className="row mb-3 d-flex justify-content-center">

                        <div className="categoryItem mr-3 p-0" style={{ width: '20%', height: '380px' }}><div className="categoryHover" onClick={() => props.history.push('/shop/RelatedProducts')}>
                            <div className=" categoryTitle d-none  p-3"><h5 className=" font-weight-bold">מוצרים נלווים  </h5> <h6 className=" mb-0">מוצרים 20</h6></div>
                        </div>
                            <img className="h-100 w-100" src={soops} />
                        </div>
                        <div className="categoryItem mr-3 p-0" style={{ width: '20%', height: '380px' }}><div className="categoryHover" onClick={() => props.history.push('/shop/Drinks')}>
                            <div className=" categoryTitle d-none  p-3"><h5 className=" font-weight-bold">משקאות  </h5> <h6 className=" mb-0">מוצרים 20</h6></div>
                        </div>
                            <img className="h-100 w-100" src={drinks} />
                        </div>
                        {/* <div className="categoryItem mr-3 p-0" style={{ width: '20%' }}><div className="categoryHover" onClick={() => props.history.push('/shop/mainCourses')}>
                            <div className=" categoryTitle d-none  p-3"><h5 className=" font-weight-bold">מנות עקריות</h5> <h6 className=" mb-0">מוצרים 20</h6></div>
                        </div>
                            <img className="h-100 w-100" src={mainCourses} />
                        </div>

                        <div className="categoryItem mr-3 p-0" style={{ width: '20%' }}><div className="categoryHover" onClick={() => props.history.push('/shop/extras')}>
                            <div className=" categoryTitle d-none  p-3"><h5 className=" font-weight-bold"> תוספות</h5> <h6 className=" mb-0">מוצרים 20</h6></div>
                        </div>
                            <img className="h-100 w-100" src={Extras} />
                        </div>
 */}

                    </div>



                </div>
            </div>


            {/* <button className='bg-black text-white border mb-5 p-2 mt-5'> <i className="fas fa-long-arrow-alt-left  " style={{ height: 'fit-content' }} ></i> לכל המוצרים</button> */}
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
export default connect(mapStateToProps, mapDispatchToProps)(Shop);
