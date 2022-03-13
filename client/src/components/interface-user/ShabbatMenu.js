import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
// import { withRouter } from 'react-router-dom';
import { actions } from '../../redux/actions/action';
import { Table, Button } from 'react-bootstrap'
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
import searchIcom_ from '../../data/imges/searchIcom_.png';
import desserts from '../../data/imges/foodCategories/Pictures/desserts.png'
import image1 from '../../data/imges/foodCategories/Pictures/image1.png'
import deleteIcom from '../../data/imges/delete.png'


import '../../App.css'
import $ from 'jquery'
import { height } from '@mui/system';
import i18 from '../../i18/i18';
import { useTranslation } from 'react-i18next';
import { Sync } from '@material-ui/icons';
import zIndex from '@mui/material/styles/zIndex';
let previousClick = 'empty'
let currentClass
function ShabbatMenu(props) {

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

    const [cart, setCart] = useLocalStorage("cart", []);
    const [numItems, setNumItems] = useLocalStorage("numItems", 0);
    const [total, setTotal] = useLocalStorage("total", 0);
    const { totalRedux, numItemsRedux, cartRedux } = props

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
    //   debugger
    //   props.setCartRedux(cart)
    // }


    function categorySelection(id) {
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
        debugger
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


    }


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


    if (!products || !products.length) {
        props.getAllProducts()
    }
    if (!categories || !categories.length) {

        props.getAllCategories()

    }

    const changeAmount = async (id, action) => {
        debugger
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



    // const AddToCart = async (product) => {
    //     let amountToAdd = parseInt($('#' + product._id + ' ' + '.amountToBuy' + ' ' + 'input').val())
    //     let productName = $('#' + product._id + ' ' + '.productName').text()
    //     let productPrice = $('#' + product._id + ' ' + '.price').text()

    //     setTotal(total + (amountToAdd * 14.90))//product.price
    //     setNumItems(numItems + amountToAdd)
    //     let flag = 0
    //     let a
    //     let shoppingCart = []
    //     if (cart != undefined)
    //         shoppingCart = cart
    //     shoppingCart.map(item => {

    //         if (item.product._id == product._id) {
    //             debugger

    //             item.Amount = parseInt(item.Amount) + amountToAdd
    //             item.Total = item.Total + (amountToAdd * 14.90)//item.product.price
    //             flag = 1


    //         }
    //     })
    //     if (flag == 0) {
    //         let newItem = {
    //             product: product,
    //             Amount: amountToAdd,
    //             Total: amountToAdd * 14.90//product.price

    //         }
    //         await shoppingCart.push(newItem)

    //     }


    //     await setCart(shoppingCart)




    // }

    const AddToCart = async (product) => {
        // alert($("#" + product._id + ' .amountOption_select').select().val)
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
                    debugger
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

        }
    }, [$, props, language, totalRedux, numItemsRedux, cartRedux, total]);



    return (
        <>
            <div className="pageNuv ">
                {isTablet && (
                    <Hamborger />

                )}

                {!isMobile && !isTablet && (
                    <TopPageDesktop />
                )}
            </div>

            <div className="small_pageHeader " style={{ backgroundImage: `url(${headerBgImag})` }}>
                {/* <label >{i18.t('shabatMenu')}<button className='white-arrow h4 p-1 ' onClick={() => props.history.goBack()} ><i class="fas fa-long-arrow-alt-right  pr-2" style={{ height: 'fit-content' }} ></i> </button> </label> */}
                {/* {isTablet ? <img className=" h-100 w-100" src={headerBgImag} /> : <img className="h-100 w-100" src={headerBgImag} />} */}


            </div>



            {/* <div className='location  pt-3 text-end px-5 mb-5'>

                <div className='d-inline' onClick={() => props.history.push('/')}>{i18.t('ScoopCatering')}</div>
                <div className='d-inline goldColor' onClick={() => props.history.push('/shop')}> /{i18.t('shabatMenu')} </div>


            </div>
           */}
            {/* <div className='row col-6 m-auto     justify-content-center'> */}
            <h4 className=' goldColor mt-2'>{i18.t('menuTitle')}</h4>
            {/* </div> */}

            <div className='row  swithDir   col-10  m-auto' style={{ paddingTop: '1.5%' }}>
                {!isMobile && !isTablet && (

                    <div className='col-md-2 '>
                        <div className='' >
                            <select class="text-center  mb-3 form-select rounded-0 form-select-x-sm  m-auto border-0 border-dark font-weight-bold border-bottom" aria-label=".form-select-sm example" style={{
                                width: '100%', fontSize: '15px'
                            }}>

                                <option value="1">{i18.t('shabatMenu')}</option>
                                <option value="1">חנוכה</option>
                                <option value="2">פסח</option>
                                <option value="3">שבועות</option>
                            </select>
                            <div class="mb-3 d-flex row px-2" style={{ fontSize: 'medium' }}>
                                <div className='col-10 '>
                                    <input placeholder={i18.t('searchPlaceholder')} class=" inputOf_Search bg-transparent border-0 w-100 p-0" />

                                </div>
                                {/* <YourSvg className="searchIcon" id="search-button" /> */}
                                <div className='col-1 p-0' >
                                    <img style={{ width: '15px' }} src={searchIcom_} />
                                </div>

                            </div>
                            <div className='categoryList rounded  d-flex flex-column  py-2 px-3'>
                                {/* <h1>קטגוריות</h1> */}
                                {categories && categories.map((category, index) => (
                                    <>
                                        {index == 0 ?
                                            <a className='' href={'#' + category.name}>
                                                <button className='bg-white categoryButton border-0 ' onClick={() => categorySelection(category._id)} style={{ height: '60px' }} id={category._id} >{language == "he" ? category.hebrewName : category.name}</button>

                                            </a>
                                            : <a className='' href={'#' + category.name}>
                                                <button className='bg-white categoryButton  ' onClick={() => categorySelection(category._id)} style={{ height: '60px' }} id={category._id} >{language == "he" ? category.hebrewName : category.name}</button>

                                            </a>
                                        }
                                    </>
                                ))}
                            </div>

                        </div>

                    </div>
                )}
                <div className=' col-md-7   col-sm-12  pageContent swithSide    ' >


                    <div className='shabatMenu overflow-auto pb-3' style={{ height: '590px' }} onScroll={myFunction}>


                        {categories && categories.map((category) =>

                            <>

                                <div className='' id={category.name}  >
                                    <div className=' h-100 w-100'>
                                        <img className="h-100 w-100 " src={category.name == "Salads" ? appetizers : category.name == "Appetizers" ? salads : category.name == "Desserts" ? desserts : salads} />
                                    </div>

                                    <div className='d-flex align-items-center my-3 ' >
                                        <h1 className='font-weight-bold '>{language == "he" ? category.hebrewName : category.name}</h1>


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
                                                            <div className='amountOption   pb-1 pt-1 pl-0 ' id={product._id}>

                                                                {/* <div > {i18.t('SelectAnOption')}:</div> */}
                                                                <select class=" amountOption_select form-select form-select-x-sm rtl pb-0 pt-0 border-0 rounded-custom font-weight-bold" aria-label=".form-select-sm example" style={{ fontSize: '16px', width: 'fit-content', fontWeight: '600 !important' }}>
                                                                    {/* <option selected> 1 יחידה</option> */}
                                                                    <option value=" ">500 גר'</option>
                                                                    <option value="2">One</option>
                                                                    <option value="3">Two</option>
                                                                    <option value="4">Three</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        {/* <div className='h-25'></div> */}
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
                {!isMobile && !isTablet && (
                    <div className='col-md-3 '  >
                        <div className=' pb-4 ' style={{ height: '590px', overflowY: 'scroll' }}>
                            <div className='  mb-3 '  >
                                <div className='actionSection rounded  ' >
                                    <div className='py-2 col-12'>שלום,<a className='px-2 text-black' href="#login"> התחבר </a></div>

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




                                                    <div className='col-7 p-0 price h6 mb-0 font-weight-bold  goldColor fontNumber' >{parseFloat(14.90).toFixed(2)} &#8362; </div>





                                                    <div className="col-1 d-flex align-items-center" onClick={() => deleteItem(item.product._id)}> <img style={{ width: '17px' }} src={deleteIcom} /></div>
                                                </div>

                                            </div>

                                        )}



                                    </div>


                                </div>
                            </div>
                            <div className=' col-12 rounded px-4 pb-3 mb-3 pt-2' style={{ backgroundColor: 'rgb(195, 153, 87, 0.16)', boxShadow: '0 3px 8px 0 rgb(0 0 0 / 8%)' }}>
                                <h5 className='font-weight-bold'>אולי תרצו גם...</h5>
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
                                <div>   <label className='font-medium'>הערות להזמנה </label></div>

                                <textarea className='w-100 border-0 border-bottom border-dark'></textarea>
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
        totalRedux: state.totalReducer.totalRedux
    };
}
const mapDispatchToProps = (dispatch) => ({
    getAllProducts: () => dispatch(actions.getAllProducts()),
    getAllCategories: () => dispatch(actions.getAllCategories()),
    setCartRedux: (x) => dispatch(actions.setCartRedux(x)),
    setNumItemsRedux: (x) => dispatch(actions.setNumItemsRedux(x)),
    setTotalRedux: (Total) => dispatch(actions.setTotalRedux(Total))
})
export default connect(mapStateToProps, mapDispatchToProps)(ShabbatMenu)
// export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ProductList))