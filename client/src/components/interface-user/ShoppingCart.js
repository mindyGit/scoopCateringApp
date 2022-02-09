import React, { useEffect, useState } from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import '../../App.css';
import { connect } from 'react-redux';
import Store from '../../redux/store'
import { actions } from '../../redux/actions/action';
// import Search from '../Search';
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
import i18 from '../../i18/i18';
import { useTranslation } from 'react-i18next';

import $ from 'jquery'
export function ShoppingCart(props) {
    const isMobile = useMediaQuery(768);
    const isTablet = useMediaQuery(1024);
    const { t, i18n } = useTranslation();
    const { products } = props;
    const { language } = props
    const [cart, setCart] = useLocalStorage("cart", []);
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


    // const myStorage = window.localStorage;

    // const cart = JSON.parse(myStorage.cart);
    if (!products || !products.length) {

        props.getAllProducts()

    }
    const AddToCart = async (product) => {

        let flag = 0

        let shoppingCart = []
        if (cart != undefined)
            shoppingCart = cart
        shoppingCart.map(item => {

            if (item.product._id == product._id) {
                debugger

                item.Amount = parseInt(item.Amount) + parseInt($('#' + product._id + ' ' + '.amountToBuy' + ' ' + 'input').val())

                item.Total = parseInt($('#' + product._id + ' ' + '.amountToBuy' + ' ' + 'input').val()) * 14.90//item.product.price
                flag = 1
            }
        })
        if (flag == 0) {
            let newItem = {
                product: product,
                Amount: $('#' + product._id + ' ' + '.amountToBuy' + ' ' + 'input').val(),
                Total: parseInt($('#' + product._id + ' ' + '.amountToBuy' + ' ' + 'input').val()) * 14.90//product.price

            }
            await shoppingCart.push(newItem)
        }


        await setCart(shoppingCart)


    }
    const changeAmount = async (id, action) => {
        let amount = parseInt($('.' + id + ' ' + '.amountToBuy' + ' ' + 'input').val())

        cart.map(item => {

            if (item.product._id == id) {
                if (action == 'plus') {
                    item.Amount = parseInt(item.Amount) + 1
                    setNumItems(numItems + 1)
                    setTotal(total + 14.90)//+item.product.price
                    amount++

                }
                else {
                    if (amount != '1') {
                        item.Amount = parseInt(item.Amount) - 1
                        setNumItems(numItems - 1)
                        setTotal(total - 14.90)//-item.product.price
                        amount--



                    }

                }
                item.Total = item.Amount * 14.90//*item.product.price
            }
        })
        $('.' + id + ' ' + '.amountToBuy' + ' ' + 'input').val(amount)
        setCart(cart)
    }





    const deleteItem = async (id) => {
        debugger

        setTotal(total - parseFloat($('.' + id + ' ' + '.endprice').text()).toFixed(2))//product.price
        let list = await cart.filter(x => {
            return x.product._id != id;
        })
        let less = $('.' + id + ' ' + '.amountToBuy' + ' ' + 'input').val()
        setCart(list);
        // await $('.navbar-toggler').click()
        $('.' + id).remove()
        $('.numItems').text(numItems - less)
        setNumItems(numItems - less)
    }
    useEffect(() => {
        if ($) { }



    }, [$, language])



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

                <label > {i18.t('ShoppingCart')} <button className='white-arrow h4 p-1 ' onClick={() => props.history.goBack()} ><i class="fas fa-long-arrow-alt-right  pr-2" style={{ height: 'fit-content' }} ></i> </button> </label>
                {isTablet ? <img className="h-100 " src={headerBgImag} /> : <img className="h-100 w-100" src={headerBgImag} />}


            </div>
            <div className='location pt-3 swithSide px-5 ' >
                <div className='d-inline' onClick={() => props.history.push('/')}>{i18.t('ScoopCatering')}</div>
                <div className='goldColor d-inline'> / {i18.t('ShoppingCart')} </div>
            </div>
            <button className='goldButton h5 p-2 mt-5' style={{
                left: '150px',
                position: 'absolute'
            }} onClick={() => props.history.push('/shop')}><i class="fas fa-long-arrow-alt-left  pr-2" style={{ height: 'fit-content' }}></i>{i18.t('ToTheShop')}
            </button>
            {cart == "" && (
                <div className="pageNoContent"></div>
            )}
            {cart != "" && (
                <div className="page_content justify-content-center pt-5" style={{ width: '80%', margin: 'auto' }}>


                    <h2 className="swithSide mb-4 font-weight-bold mt-5 pt-5 ">{i18.t('ShoppingCart')}</h2>



                    <div className="row justify-content-between swithDir">
                        <div className=" bg-grey col-8  px-5 pb-3" style={{ overflowY: 'scroll', height: '470px' }}>
                            <div className="row justify-content-around text-white align-items-center py-3">

                                <div className="col-2 text-black mb-0 h6">{i18.t('ProductName')}</div>|
                                <div className="col-2 text-black mb-0 h6">{i18.t('Amount')}</div>|
                                <div className="col-2 text-black mb-0 h6">{i18.t('price')}</div>|
                                <div className=" sumColumn col-3 text-black text-end pr-5 mb-0 h6">{i18.t('Total')}</div>
                            </div>

                            {cart.map(item =>

                                <div className={`productItem mb-2 row justify-content-between align-items-end border-bottom border-dark py-2 ${item.product._id} `}>
                                    <div className='col-3 productName font-weight-bold  '> {language == "he" ? item.product.hebrewName : item.product.name}

                                        <select class="form-select form-select-x-sm rtl pb-0 pt-0 border-0 rounded-0 font-weight-bold" aria-label=".form-select-sm example" style={{ width: 'fit-content', fontSize: '12px' }}>
                                            {/* <option selected> 1 יחי'</option> */}
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </select>
                                    </div>
                                    <div className='amountToBuy col-3 goldColor d-flex   p-0  align-items-end' style={{ width: 'fit-content' }}>
                                        <span className="plus" onClick={() => changeAmount(item.product._id, "plus")} style={{ height: '27px' }}>+</span>
                                        <input type="text" value={item.Amount} className='border p-0 text-black bg-white pt-0 pb-0 pl-2 pr-2 m-1 my-0 input_number' style={{ fontSize: '13px' }} />
                                        <span className="minus" onClick={() => changeAmount(item.product._id, "minus")} style={{ height: '27px' }}>-</span>
                                    </div>
                                    <div className='col-2 price h6 mb-0 font-weight-bold  goldColor ' >{parseFloat(14.90).toFixed(2)} &#8362; </div>

                                    <div className='sumColumnVal col-2 endprice h6 mb-0 font-weight-bold pr-5 ' >{parseFloat(item.Amount * 14.90).toFixed(2)} &#8362; </div>
                                    <div className="col-1" onClick={() => deleteItem(item.product._id)}> <i class="fas fa-trash-alt "></i></div>


                                </div>


                            )}

                        </div>

                        <div className=" bg-grey col-3 ml-5 p-0">
                            <label className="bg-black text-white w-100 pt-1 swithSide px-3" >{i18.t('OrderSummary')}</label>
                            <div className="px-4">
                                <div className="row ">

                                    <div className="col-7 swithSide">{i18.t('Items')}</div>
                                    <div className="col-5 numItems">{numItems}</div>

                                </div>
                                <br />
                                <br />
                                <div className="row border-bottom border-dark pb-3">

                                    <div className="col-7 swithSide">{i18.t('InterimTotal')}</div>
                                    <div className="col-5 ">{parseFloat(total).toFixed(2)} &#8362;</div>

                                </div>
                                <div className="row pt-2 font-weight-bold ">

                                    <div className="col-7 swithSide">{i18.t('Total')}</div>
                                    <div className="col-5 ">{parseFloat(total).toFixed(2)} &#8362;</div>

                                </div>
                                <button className="mt-5 goldButton mb-5" onClick={() => props.history.push('/Checkout')}> {i18.t('toCheckout')} <img src={arrow_left_white} style={{
                                    paddingRight: '5px',
                                    width: '25px'
                                }} /></button>
                                <div className="col swithSide h6 px-2">

                                    <div>{i18.t('scoop')}</div>
                                    <div>{i18.t('OurAddress')}:</div>
                                    <div> {i18.t('OpeningHours')}:</div>


                                </div>

                            </div>

                        </div>
                    </div>


                </div>
            )}



            <div className="PageFooter mt-5">
                <Footer />
                <UnderFooter />
            </div>
        </>

    );
}
const mapStateToProps = (state) => {
    return {
        products: state.productReducer.products,
        language: state.languageReducer.language

    };
}

const mapDispatchToProps = (dispatch) => ({
    getAllProducts: () => dispatch(actions.getAllProducts()),
})
export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);
