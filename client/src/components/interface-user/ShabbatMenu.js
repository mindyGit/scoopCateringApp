import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
// import { withRouter } from 'react-router-dom';
import { actions } from '../../redux/actions/action';

import { Table, Button } from 'react-bootstrap'
import AppFirebase from '../Firebase/AppFirebase';
import { Formik, Field, Select, Form } from 'formik';
import NewProduct from '../product/NewProduct';
import Scroll from '../Scroll';
import Carousel from '../Carousel_'
// import Search from '../Search'
import headerBgImag from '../../data/imges/headerBgImag.png'
import Hamborger from '../mainPage/Hamborger'
import TopPageDesktop from '../mainPage/TopPageDesktop'
import useMediaQuery from "../../hooks/useMediaQuery";
import Cart from '../../data/imges/cart.png'
import salads from '../../data/imges/foodCategories/Pictures/fishh.png'
import appetizers from '../../data/imges/foodCategories/Pictures/shabbat.png'
import bakery from '../../data/imges/foodCategories/Pictures/bakery.png'

import searchIcom_ from '../../data/imges/searchIcom_.png';
import desserts from '../../data/imges/foodCategories/Pictures/desserts.png'
import image1 from '../../data/imges/foodCategories/Pictures/image1.png'
import deleteIcom from '../../data/imges/delete.png'

import Modal from "../Popup/Modal";
import useModal from '../Popup/useModal';
import '../Popup/Modal.css'

import '../../App.css'
import $ from 'jquery'
import { height } from '@mui/system';
import i18 from '../../i18/i18';
import { useTranslation } from 'react-i18next';
import { Sync } from '@material-ui/icons';
import zIndex from '@mui/material/styles/zIndex';
import { useAuth } from "../../contexts/AuthContext"

import { Link, useHistory } from "react-router-dom"
let previousClick = 'empty'

let currentClass
function ShabbatMenu(props) {



    const { isShowing, toggle } = useModal();

    const url = window.location.href
    // const [cart, setCart] = useLocalStorage("cart", []);
    const lastSegment = decodeURI(url.split("/").pop().toString());
    const { language } = props
    const { products } = props;
    const { categories } = props
    const { t, i18n } = useTranslation();
    const [side, setSide] = useState('');
    const [align, setAlign] = useState('');
    const isMobile = useMediaQuery(768);
    const isTablet = useMediaQuery(1024);

    const [serchResults, setSerchResults] = useState();
    const [searchWord, setSearchWord] = useState();
    const [userDetails, setUserDetails] = useLocalStorage("userDetails", []);


    const [cart, setCart] = useLocalStorage("cart", []);
    const [numItems, setNumItems] = useLocalStorage("numItems", 0);
    const [total, setTotal] = useLocalStorage("total", 0);
    const { totalRedux, numItemsRedux, cartRedux, currentUser_ } = props
    const [error, setError] = useState("")

    const { currentUser, logout } = useAuth()
    const history = useHistory()

    async function handleLogout() {
        setError("")

        try {
            await logout()
            history.push("/shop")

        } catch {
            setError("Failed to log out")
        }
    }
    function myFunction() {
        // alert("gbvf")
    }
    // if (totalRedux == 0) {
    //   props.setTotalRedux(total)
    // }
    // if (numItemsRedux == 0) {
    //   props.setNumItemsRedux(numItems)
    // }
    // if (!cartRedux.length) {
    //   //debugger
    //   props.setCartRedux(cart)
    // }

    function set_user() {
        debugger

        props.setUser("bhnj")
        console.log(currentUser_);
    }
    function hoverCategory(categoryId) {
        currentClass = "#" + categoryId
        if ($(currentClass).hasClass('active')) {

        }
        else {
            $(currentClass).addClass('active');
            console.log(previousClick);
            if (previousClick != "empty" && previousClick != categoryId) {
                $("#" + previousClick).removeClass('active');

            }
            else {
                $("#" + previousClick).addClass('active');

            }
            previousClick = categoryId
        }
        // $('#' + categoryId).addClass('active')
    }

    function categorySelection(id) {
        $('.searchResults').addClass('d-none')
        $('.shabatMenu').removeClass('d-none')
        $('.categoryList').removeClass('px-3')
        currentClass = "#" + id
        if ($(currentClass).hasClass('active')) {

        }
        else {
            $(currentClass).addClass('active');
            console.log(previousClick);
            if (previousClick != "empty" && previousClick != id) {
                $("#" + previousClick).removeClass('active');

            }
            else {
                $("#" + previousClick).addClass('active');

            }
            previousClick = id
        }
    }

    const deleteItem = async (id) => {
        //debugger
        // console.log($('#' + id + ' ' + '.amountToBuy' + ' ' + 'input').val());
        let totalTodel
        let less

        let list = await cart.filter(x => {
            if (x.product._id == id) {
                totalTodel = x.Total
                less = x.Amount
            }
            return x.product._id != id;
        })
        let currTotal = parseFloat(total).toFixed(2) - parseFloat(totalTodel).toFixed(2)

        if (totalTodel < 0) {

            await props.setTotalRedux(parseFloat(0).toFixed(2))
            setTotal(parseFloat(0).toFixed(2))

        }

        else {

            await props.setTotalRedux(currTotal)//product.price
            setTotal(currTotal)//product.price

        }


        // let less = $('#' + id + ' ' + '.amountToBuy' + ' ' + 'input').val()


        setCart(list);
        // await props.setCartRedux(list)
        // $('.' + id).remove()

        await setNumItems(numItems - less)
        props.setNumItemsRedux(numItems - less)
        if (total == 0) {
            props.setTotalRedux(0)
        }

    }


    // function searchProduct(e) {
    //     let searchWord_ = e.target.value
    //     $('.shabatMenu').addClass('d-none')
    //     let filteredProducts = []
    //     filteredProducts = products && products.filter(
    //         product => {
    //             if (language != "he")
    //                 return (
    //                     product && product
    //                         .name
    //                         .toLowerCase()
    //                         .includes(searchWord_.toLowerCase())
    //                 );
    //             else
    //                 return (
    //                     product && product
    //                         .hebrewName
    //                         .toLowerCase()
    //                         .includes(searchWord_.toLowerCase())
    //                 );
    //         }
    //     );
    //     if (searchWord_ == '') {
    //         setSerchResults([])
    //         $('.shabatMenu').removeClass('d-none')
    //     }

    //     else
    //         setSerchResults(filteredProducts)

    // }



    function searchProduct(searchWord_) {
        // let searchWord_ = e.target.value

        setSearchWord(searchWord_)
        $('.shabatMenu').addClass('d-none')
        $('.searchResults').removeClass('d-none')
        let filteredProducts = []
        filteredProducts = products && products.filter(
            product => {
                if (language != "he")
                    return (
                        product && product
                            .name
                            .toLowerCase()
                            .includes(searchWord_.toLowerCase())
                    );
                else
                    return (
                        product && product
                            .hebrewName
                            .toLowerCase()
                            .includes(searchWord_.toLowerCase())
                    );
            }
        );

        let div = document.getElementById('xxl')
        div.scrollTop -= 590
        if (searchWord_ == '') {
            setSerchResults([])
            $('.shabatMenu').removeClass('d-none')
            $('.searchResults').addClass('d-none')

        }
        else {
            setSerchResults(filteredProducts)
            if (filteredProducts == '')
                $('.notFound').removeClass('d-none')
            else
                $('.notFound').addClass('d-none')
        }


    }


    function useLocalStorage(key, initialValue) {

        const [storedValue, setStoredValue] = useState(() => {
            try {

                const item = window.localStorage.getItem(key);

                return item ? JSON.parse(item) : initialValue;
            } catch (error) {

                console.log(error);
                return initialValue;
            }
        });

        const setValue = (value) => {
            try {

                const valueToStore =
                    value instanceof Function ? value(storedValue) : value;

                setStoredValue(valueToStore);

                window.localStorage.setItem(key, JSON.stringify(valueToStore));
            } catch (error) {

                console.log(error);
            }
        };
        return [storedValue, setValue];
    }


    if (!products || !products.length) {
        props.getAllProducts()
    }
    if (!categories || !categories.length) {

        props.getAllCategories()

    }

    const changeAmount = async (id, action) => {
        //debugger
        if (action == 'minusToCart' || action == 'plusToCart') {
            let amountTocart = parseInt($('.' + id + ' ' + '.amountToBuy' + ' ' + 'input').val())
            cart.map(item => {
                if (item.product._id == id) {
                    if (action == 'plusToCart') {
                        item.Amount = parseInt(item.Amount) + 1
                        setNumItems(numItems + 1)
                        props.setNumItemsRedux(numItems + 1)
                        setTotal(total + 14.90)//+item.product.price
                        props.setTotalRedux(total + 14.90)//+item.product.price
                        amountTocart++
                    }
                    else {
                        if (amountTocart != '1') {
                            item.Amount = parseInt(item.Amount) - 1
                            setNumItems(numItems - 1)
                            props.setNumItemsRedux(numItems - 1)
                            setTotal(total - 14.90)//+item.product.price
                            props.setTotalRedux(total - 14.90)//+item.product.price
                            amountTocart--
                        }
                    }
                    item.Total = item.Amount * 14.90//*item.product.price
                }
            })

            $('.' + id + ' ' + '.amountToBuy' + ' ' + 'input').val(amountTocart)
            setCart(cart)
        }



        else {
            let amount = parseInt($('#' + id + ' ' + '.amountToBuy' + ' ' + 'input').val())
            if (action == 'plus')
                amount++
            else {
                if (amount != '1')
                    amount--
            }
            $('#' + id + ' ' + '.amountToBuy' + ' ' + 'input').val(amount)
        }
    }



    const AddToCart = async (product) => {

        if ($("#" + product._id + ' .amountOption_select').val() == " ") {
            $("#" + product._id + ' .errorSelect').removeClass('d-none')
            setTimeout(function () {
                $("#" + product._id + ' .errorSelect').addClass('d-none')
            }, 2000);
        }
        else {
            let amountToAdd = parseInt($('#' + product._id + ' ' + '.amountToBuy' + ' ' + 'input').val())
            props.setTotalRedux(total + (amountToAdd * 14.90))
            setTotal(total + (amountToAdd * 14.90))//product.price
            props.setNumItemsRedux(numItems + amountToAdd)
            setNumItems(numItems + amountToAdd)
            let flag = 0
            let shoppingCart = []
            if (cart != undefined)
                shoppingCart = cart
            shoppingCart.map(item => {
                if (item.product._id == product._id) {
                    //debugger
                    item.Amount = item.Amount + amountToAdd
                    item.Total = item.Total + (amountToAdd * 14.90)//item.product.price
                    flag = 1
                }
            })
            if (flag == 0) {
                let newItem = {
                    product: product,
                    Amount: amountToAdd,
                    Total: amountToAdd * 14.90//product.price
                }
                await shoppingCart.push(newItem)
            }
            await setCart(shoppingCart)
            // await props.setCartRedux(cart)

        }
    }

    useEffect(() => {

        if ($) {
            $('#shop').addClass('active');
            $('textarea').each(function () {
                this.setAttribute('style', 'height:' + (this.scrollHeight) + 'px;overflow-y:hidden;');
            }).on('input', function () {
                this.style.height = 'auto';
                this.style.height = (this.scrollHeight) + 'px';
            });



        }
    }, [$, props, language, totalRedux, numItemsRedux, cartRedux, total]);



    return (
        < >

            <Modal
                isShowing={isShowing}
                hide={toggle}
            />

            <div className="pageNuv ">
                {isTablet && (
                    <Hamborger />
                )}

                {!isMobile && !isTablet && (
                    <TopPageDesktop />
                )}
            </div>

            <div className="small_pageHeader " style={{ backgroundImage: `url(${headerBgImag})` }}>



            </div>



            <h4 className=' goldColor mt-2 text-center'>{i18.t('menuTitle')}</h4>


            <div className='row  swithDir    col-md-10   m-auto' style={{ paddingTop: '1.5%' }}>
                {!isMobile && !isTablet && (

                    <div className='col-md-2 '>
                        <div className='' >
                            <select class="text-center  mb-3 form-select rounded-0 form-select-x-sm ltr m-auto border-0 border-dark font-weight-bold border-bottom" aria-label=".form-select-sm example" style={{
                                width: '100%', fontSize: '15px'
                            }}>

                                <option value="1">{i18.t('shabatMenu')}</option>
                                <option value="2">{i18.t('passover')}</option>
                            </select>
                            <div class="mb-3 d-flex row px-2" style={{ fontSize: 'medium' }}>
                                <div className='col-10 '>
                                    <input placeholder={i18.t('searchPlaceholder')} class=" inputOf_Search bg-transparent border-0 w-100 p-0" onInput={(e) => { searchProduct(e.target.value) }} onKeyPress={(e) => searchProduct(e.target.value)} />

                                </div>

                                <div className='col-1 p-0' onClick={() => searchProduct($('.inputOf_Search').val())}>
                                    <img style={{ width: '15px' }} src={searchIcom_} />
                                </div>

                            </div>
                            <div className='categoryList rounded  d-flex flex-column  py-2 '>

                                {categories && categories.map((category, index) => (
                                    <>


                                        <a className='' href={'#' + category.name}>

                                            <button className={index == 0 ? 'bg-white categoryButton border-0' : 'bg-white categoryButton'} id={category._id} onClick={() => categorySelection(category._id)} style={{ height: '60px' }}  >{language == "he" ? category.hebrewName : category.name}</button>


                                        </a>


                                    </>
                                ))}
                            </div>

                        </div>

                    </div>
                )}
                <div className=' col-md-7   col-sm-12  pageContent swithSide    ' >
                    <div className='overflow-auto pb-3 sidColumn ' id='xxl' style={{ height: '590px' }}>
                        <div className='searchResults d-none' >

                            <h4 className='swithSide'><span className='notFound '> לא נמצאו </span>תוצאות עבור : {searchWord}</h4>



                            {serchResults && serchResults.map((product) =>
                                <>
                                    <div className=' productLine w-100  row  rounded    justify-content-between   p-2 mb-2' id={product._id} style={{ maxHeight: '150px', height: '130px' }}>
                                        <div className='col-2  productPic d-flex align-items-center px-2  '>
                                            <div className=' ml-auto bg-gold d-flex     justify-content-center align-items-center' style={{ width: '60%', height: '20px', position: 'absolute', top: 0, right: '1px' }}><p className='m-0 ' style={{ fontSize: '0.6rem' }}>מומלץ השבוע!</p></div>
                                            <img className=' w-100' src={image1} /></div>
                                        <div className='col-5 p-0 ' id={product._id}>
                                            <div className='h-75'>
                                                <div className='productName font-weight-bold ' style={{ fontSize: '22px' }}>  {language == "he" ? product.hebrewName : product.name}</div>


                                                <div class="amountOption   pb-1 pt-1 pl-0 " id={product._id}>
                                                    <select class=" amountOption_select  form-select form-select-x-sm swithDir pb-0 pt-0 border-0 rounded-custom font-weight-bold" aria-label=".form-select-sm example" style={{ fontSize: '16px', width: 'fit-content', fontWeight: '600 !important' }}>
                                                        <option value=" ">{i18.t('selectAmount')}</option>

                                                        <option value="1">500 גר'</option>
                                                        <option value="2">חצי ליטר</option>
                                                        <option value="3">250 מל'</option>
                                                        <option value="4">6 יחידות</option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div className='row d-flex align-items-end  h-25 pb-2 d-none errorSelect' style={{ fontSize: 'xx-small' }}>
                                                <h6 className='' style={{ color: 'red' }}>* יש לבחור כמות או אופציה</h6>
                                            </div>
                                        </div>

                                        <div className='col-4 px-4 h-100'>
                                            <div className='d-flex align-items-start row justify-content-between h-50 mt-1'>
                                                <div className='col-5'></div>
                                                <div className='price productPrice font-weight-bold  goldColor p-0 mr-0 col-6 fontNumber ' >14.90 &#8362; </div>

                                            </div>


                                            <div className='d-flex align-items-end  row justify-content-between  h-50 pb-1'>

                                                <div className='amountToBuy  goldColor d-flex  col-6 p-0  align-items-end' style={{ width: 'fit-content' }}>
                                                    <span class="plus " onClick={() => changeAmount(product._id, "plus")} >+</span>
                                                    <input type="text" value='1' className=' text-black bg-white pt-0 pb-0  m-1 mt-2 input_number fontNumber gold-border' />
                                                    <span class="minus" onClick={() => changeAmount(product._id, "minus")}>-</span>
                                                </div>



                                                <div onClick={() => AddToCart(product)} className='addToCart col-5  bg-black text-white align-items-center d-flex h6  mb-0 px-3 py-2 roundButton' style={{ height: 'fit-content', width: 'fit-content' }}>{i18.t('addToCart')}
                                                    <div className='mr-2'></div>

                                                </div>

                                            </div>

                                        </div>

                                    </div>




                                </>
                            )}
                        </div>

                        {/* <div className='shabatMenu overflow-auto pb-3 sidColumn' style={{ height: '590px' }} onScroll={myFunction}> */}
                        <div className='shabatMenu '>



                            {categories && categories.map((category) =>

                                <>

                                    <div className='' id={category.name} onMouseEnter={() => hoverCategory(category._id)}>
                                        <div >
                                            <div className=' h-100 w-100'>
                                                <img className="h-100 w-100 " src={category.name == "Salads" ? appetizers : category.name == "Appetizers" ? salads : category.name == "Desserts" ? desserts : category.name == "Bakery" ? bakery : salads} />
                                            </div>

                                            <div className='d-flex align-items-center my-3 ' >
                                                <h1 className='font-weight-bold '>{language == "he" ? category.hebrewName : category.name}</h1>


                                            </div>
                                        </div>

                                        {Object.keys(category).filter(key => key == "products").map((key, val) => (
                                            category[key].map(product =>
                                                <>
                                                    <div className=' productLine w-100  row  rounded    justify-content-between   p-2 mb-2' id={product._id} style={{ maxHeight: '150px', height: '130px' }}>
                                                        <div className='col-2  productPic d-flex align-items-center px-2  '>
                                                            <div className=' ml-auto bg-gold d-flex     justify-content-center align-items-center' style={{ width: '60%', height: '20px', position: 'absolute', top: 0, right: '1px' }}><p className='m-0 ' style={{ fontSize: '0.6rem' }}>מומלץ השבוע!</p></div>
                                                            <img className=' w-100' src={image1} /></div>
                                                        <div className='col-5 p-0 ' id={product._id}>
                                                            <div className='h-75'>
                                                                <div className='productName font-weight-bold ' style={{ fontSize: '22px' }}>  {language == "he" ? product.hebrewName : product.name}</div>


                                                                <div class="amountOption   pb-1 pt-1 pl-0 " id={product._id}>
                                                                    <select class=" amountOption_select  form-select form-select-x-sm swithDir pb-0 pt-0 border-0 rounded-custom font-weight-bold" aria-label=".form-select-sm example" style={{ fontSize: '16px', width: 'fit-content', fontWeight: '600 !important' }}>
                                                                        <option value=" ">{i18.t('selectAmount')}</option>

                                                                        <option value="1">500 גר'</option>
                                                                        <option value="2">חצי ליטר</option>
                                                                        <option value="3">250 מל'</option>
                                                                        <option value="4">6 יחידות</option>
                                                                    </select>
                                                                </div>
                                                            </div>

                                                            <div className='row d-flex align-items-end  h-25 pb-2 d-none errorSelect' style={{ fontSize: 'xx-small' }}>
                                                                <h6 className='' style={{ color: 'red' }}>* יש לבחור כמות או אופציה</h6>
                                                            </div>
                                                        </div>

                                                        <div className='col-4 px-4 h-100'>
                                                            <div className='d-flex align-items-start row justify-content-between h-50 mt-1'>
                                                                <div className='col-5'></div>
                                                                <div className='price productPrice font-weight-bold  goldColor p-0 mr-0 col-6 fontNumber ' >14.90 &#8362; </div>

                                                            </div>


                                                            <div className='d-flex align-items-end  row justify-content-between  h-50 pb-1'>

                                                                <div className='amountToBuy  goldColor d-flex  col-6 p-0  align-items-end' style={{ width: 'fit-content' }}>
                                                                    <span class="plus " onClick={() => changeAmount(product._id, "plus")} >+</span>
                                                                    <input type="text" value='1' className=' text-black bg-white pt-0 pb-0  m-1 mt-2 input_number fontNumber gold-border' />
                                                                    <span class="minus" onClick={() => changeAmount(product._id, "minus")}>-</span>
                                                                </div>



                                                                <div onClick={() => AddToCart(product)} className='addToCart col-5  bg-black text-white align-items-center d-flex h6  mb-0 px-3 py-2 roundButton' style={{ height: 'fit-content', width: 'fit-content' }}>{i18.t('addToCart')}
                                                                    <div className='mr-2'></div>

                                                                </div>

                                                            </div>

                                                        </div>

                                                    </div>




                                                </>

                                            )

                                        ))}
                                    </div>
                                    <hr className='goldColor mt-0 mb-2' style={{ height: '2.5px', opacity: '1' }} />
                                </>
                            )}
                        </div>


                    </div>










                </div>
                {!isMobile && !isTablet && (
                    <div className='col-md-3 '  >
                        <div className=' pb-4  sidColumn' style={{ height: '590px', overflowY: 'scroll' }}>
                            <div className='  mb-3 '  >
                                <div className='actionSection rounded  ' >
                                    <div className='py-2 col-12 text-center'>שלום,
                                        {currentUser ?
                                            <>

                                                {currentUser.email}

                                                <div className="w-100 text-center mt-2">
                                                    <Button variant="link" onClick={handleLogout}>
                                                        Log Out
                                                    </Button>
                                                </div>
                                            </> :
                                            <>
                                                {/* <a className='px-2 text-black' onClick={() => props.history.push('/login')} href=""> התחבר </a> */}
                                                <a className='px-2 text-black ' onClick={toggle} > התחבר </a>
                                                {/* <button onClick={set_user} >click</button> */}
                                            </>

                                        }
                                    </div>

                                    <div className='bg-gold py-3  text-white d-flex  justify-content-center  '>
                                        <div className='mx-2 font-medium'>{i18.t('ShoppingCart')}</div>
                                        <div className='  fontNumber'> (<span className="numItems mx-1">{numItems}</span>)</div>

                                    </div>

                                    <div className="ShoppingCart_itemList  px-4 " style={{ maxWidth: '300px' }}>
                                        {cart && cart.map(item =>
                                            <div className={`productItem row  align-items-end    py-2 ${side} ${item.product._id}`}  >

                                                <div className={`productName  col-12 font-weight-bold   ${align}`}> {language == "he" ? item.product.hebrewName : item.product.name}</div>
                                                <div className='col-12 row  align-items-end     justify-content-between'>
                                                    <div className=' col-4 p-0 amountToBuy  goldColor d-flex  p-0  align-items-end' style={{ width: 'fit-content' }}>
                                                        <span class=" px-1 " onClick={() => changeAmount(item.product._id, "plusToCart")} style={{ fontSize: '25px', height: '27px' }}>+</span>
                                                        <input type="text" value={item.Amount} className=' text-black bg-white pt-0 pb-0    small_input_number fontNumber gold-border' />
                                                        <span class=" px-1 " onClick={() => changeAmount(item.product._id, "minusToCart")} style={{ fontSize: '25px', height: '27px' }}>-</span>
                                                    </div>




                                                    <div className='col-7 text-center p-0 price h6 mb-0 font-weight-bold  goldColor fontNumber' >{parseFloat(14.90).toFixed(2)} &#8362; </div>





                                                    <div className="col-1 d-flex align-items-center" onClick={() => deleteItem(item.product._id)}> <img style={{ width: '17px' }} src={deleteIcom} /></div>
                                                </div>

                                            </div>

                                        )}



                                    </div>


                                </div>
                            </div>
                            <div className=' col-12 rounded px-4 pb-3 mb-3 pt-2' style={{ backgroundColor: 'rgb(195, 153, 87, 0.16)', boxShadow: '0 3px 8px 0 rgb(0 0 0 / 8%)' }}>
                                <h5 className='font-weight-bold '>אולי תרצו גם...</h5>
                                <div className={`productItem row justify-content-around    py-2 px-2 ${side} `} style={{ borderBottom: '2px solid #ddd' }} >
                                    <div className='row d-flex  px-0'>

                                        <div className='product_Pic col-4 d-flex align-items-center px-2' >
                                            {/* <div className=' ml-auto bg-gold d-flex     justify-content-center align-items-center' style={{ width: '60%', height: '15px', position: 'absolute', top: 0, right: '1px' }}><p className='m-0 ' style={{ fontSize: '0.4rem' }}>מומלץ השבוע!</p></div> */}

                                            <img className=' w-100 ' src={image1} /></div>

                                        <div className='col-8' >
                                            <div className={`productName col-12  p-0  ${align} font-medium`}> תבנית חד"פ</div>
                                            <div className='d-flex row  align-items-center'>
                                                <div className='amountToBuy col-6 goldColor d-flex    align-items-center' style={{ width: 'fit-content' }}>
                                                    <span className="mt-2" onClick={() => changeAmount("plus")} style={{ fontSize: '25px', height: '44px' }}>+</span>
                                                    <input type="text" value="1" className='AmountInput p-0 text-black bg-white    m-1 my-0 small_input_number fontNumber gold-border' />
                                                    <span className="mt-2" onClick={() => changeAmount("minus")} style={{ fontSize: '25px', height: '44px' }}>-</span>
                                                </div>
                                                <div className='col-6 price h6 mb-0 font-weight-bold  goldColor fontNumber' >{parseFloat(14.90).toFixed(2)} &#8362; </div>
                                            </div>

                                        </div>
                                    </div>



                                </div>

                                <div className={`productItem row justify-content-around    py-2 px-2 ${side} `} style={{ borderBottom: '2px solid #ddd' }}  >
                                    <div className='row d-flex px-0'>

                                        <div className='product_Pic col-4 d-flex align-items-center px-2' >
                                            {/* <div className=' ml-auto bg-gold d-flex     justify-content-center align-items-center' style={{ width: '60%', height: '15px', position: 'absolute', top: 0, right: '1px' }}><p className='m-0 ' style={{ fontSize: '0.4rem' }}>מומלץ השבוע!</p></div> */}

                                            <img className=' w-100 ' src={image1} />
                                        </div>

                                        <div className='col-8' >
                                            <div className={`productName col-12   p-0  ${align} font-medium`}> תבנית חד"פ</div>
                                            <div className='d-flex row  align-items-center'>
                                                <div className='amountToBuy col-6 goldColor d-flex    align-items-center' style={{ width: 'fit-content' }}>
                                                    <span className="mt-2" onClick={() => changeAmount("plus")} style={{ fontSize: '25px', height: '44px' }}>+</span>
                                                    <input type="text" value="1" className='AmountInput p-0 text-black bg-white    m-1 my-0 small_input_number fontNumber gold-border' />
                                                    <span className="mt-2" onClick={() => changeAmount("minus")} style={{ fontSize: '25px', height: '44px' }}>-</span>
                                                </div>
                                                <div className='col-6 price h6 mb-0 font-weight-bold  goldColor fontNumber' >{parseFloat(14.90).toFixed(2)} &#8362; </div>
                                            </div>

                                        </div>
                                    </div>



                                </div>


                                <div className={`productItem row justify-content-around    py-2 px-2 ${side} `}   >
                                    <div className='row d-flex px-0'>

                                        <div className='product_Pic col-4 d-flex align-items-center px-2' >
                                            {/* <div className=' ml-auto bg-gold d-flex     justify-content-center align-items-center' style={{ width: '60%', height: '15px', position: 'absolute', top: 0, right: '1px' }}><p className='m-0 ' style={{ fontSize: '0.4rem' }}>מומלץ השבוע!</p></div> */}

                                            <img className=' w-100 ' src={image1} />
                                        </div>

                                        <div className='col-8' >
                                            <div className={`productName col-12   p-0  ${align} font-medium `}> תבנית חד"פ</div>
                                            <div className='d-flex row  align-items-center'>
                                                <div className='amountToBuy col-6 goldColor d-flex    align-items-center' style={{ width: 'fit-content' }}>
                                                    <span className="mt-2" onClick={() => changeAmount("plus")} style={{ fontSize: '25px', height: '44px' }}>+</span>
                                                    <input type="text" value="1" className='AmountInput p-0 text-black bg-white    m-1 my-0 small_input_number fontNumber gold-border' />
                                                    <span className="mt-2" onClick={() => changeAmount("minus")} style={{ fontSize: '25px', height: '44px' }}>-</span>
                                                </div>
                                                <div className='col-6 price h6 mb-0 font-weight-bold  goldColor fontNumber' >{parseFloat(14.90).toFixed(2)} &#8362; </div>
                                            </div>
                                            {/* <div className="col-1" onClick={() => deleteItem(item.product._id)}> <i class="fas fa-trash-alt "></i></div> */}
                                            {/* <div className="col-1"> <img style={{ width: '17px' }} src={deleteIcom} /></div> */}
                                        </div>
                                    </div>



                                </div>



                            </div>

                            <div className='  col-12 rounded px-4 py-2 mb-3' style={{ boxShadow: '0 3px 8px 0 rgb(0 0 0 / 8%)' }}>
                                <div className=' text-center'>   <label className='font-medium '>הערות להזמנה </label></div>

                                <textarea className='w-100 border-0 border-bottom border-dark customTextarea' maxlength="250" ng-trim="false" ></textarea>


                                {/* <textarea auto-grow="" ng-model="vm.order.comment" name="" id="orderComments" translate-once-placeholder="orderCart.ADD_COMMENT" rows="1" cols="10" class="comment-textarea-cart change ng-pristine ng-untouched ng-valid ng-not-empty ng-valid-maxlength" maxlength="250" style="height: 55px;" ng-trim="false" placeholder="הקלידו כאן..."></textarea> */}





                            </div>

                            <div className='rounded  col-12 p-0' style={{ boxShadow: '0 3px 8px 0 rgb(0 0 0 / 8%)' }}>
                                <div className="d-flex   pt-3 pb-2 px-4" style={{ backgroundColor: 'rgb(195, 153, 87, 0.5)', borderRadius: '0.25rem 0.25rem 0rem 0rem' }}>

                                    <div className="col-9 swithSide font-medium"> סה"כ מוצרים:</div>
                                    <div className="col-3 numItems fontNumber font-weight-bold">{numItems}</div>
                                </div>
                                <div className="d-flex mb-5  pt-3 pb-2 px-4" >

                                    <div className="col-9 swithSide font-medium">סה"כ:</div>
                                    <div className="col-3 numItems fontNumber font-weight-bold">{parseFloat(total).toFixed(2)}</div>

                                </div>

                            </div>

                            <button className=" d-block col-12 actionSection rounded text-white bg-gold px-3 py-2  w-100 border-0" onClick={() => props.history.push('/Checkout')} >המשך לתשלום</button>


                        </div>
                    </div>
                )}
            </div>
        </>
    )
}
const mapStateToProps = (state) => {
    return {
        products: state.productReducer.products,
        categories: state.categoryReducer.categories,
        language: state.languageReducer.language,
        cartRedux: state.cartReducer.cartRedux,
        numItemsRedux: state.numItemsReducer.numItemsRedux,
        totalRedux: state.totalReducer.totalRedux,
        currentUser_: state.userReducer.currentUser_

    };
}
const mapDispatchToProps = (dispatch) => ({
    getAllProducts: () => dispatch(actions.getAllProducts()),
    getAllCategories: () => dispatch(actions.getAllCategories()),
    setCartRedux: (x) => dispatch(actions.setCartRedux(x)),
    setNumItemsRedux: (x) => dispatch(actions.setNumItemsRedux(x)),
    setTotalRedux: (Total) => dispatch(actions.setTotalRedux(Total)),
    setUser: (user) => dispatch(actions.setUser(user))

})
export default connect(mapStateToProps, mapDispatchToProps)(ShabbatMenu)
// export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ProductList))