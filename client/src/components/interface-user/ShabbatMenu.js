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
        alert("gbvf")
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
            setTotal(parseFloat(0).toFixed(2))
            await props.setTotalRedux(parseFloat(0).toFixed(2))
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
    useEffect(() => {
        if ($) { }
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

            {/* <div className="pageHeader " style={{ height: '2vh !important' }}>
                <label >{i18.t('shabatMenu')}<button className='white-arrow h4 p-1 ' onClick={() => props.history.goBack()} ><i class="fas fa-long-arrow-alt-right  pr-2" style={{ height: 'fit-content' }} ></i> </button> </label>
                {isTablet ? <img className="h-100 " src={headerBgImag} /> : <img className="h-100 w-100" src={headerBgImag} />}


            </div>

 */}

            {/* <div className='location  pt-3 text-end px-5 mb-5'>

                <div className='d-inline' onClick={() => props.history.push('/')}>{i18.t('ScoopCatering')}</div>
                <div className='d-inline goldColor' onClick={() => props.history.push('/shop')}> /{i18.t('shabatMenu')} </div>


            </div>
           */}

            <div className='row  swithDir pt-5 mt-5' style={{ paddingLeft: '10%', paddingRight: '10%' }}>
                <div className='col-2 '>
                    <div className='sidColumn affix px-2' >
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
                        <div className='categoryList rounded  d-flex flex-column  py-2 px-4'>

                            {categories && categories.map((category) => (
                                <>
                                    <a className='' href={'#' + category.name} >
                                        <button className='bg-white categoryButton border-top border-0 ' onClick={() => categorySelection(category._id)} style={{ height: '60px', width: '100%' }} id={category._id} >{language == "he" ? category.hebrewName : category.name}</button>
                                    </a>
                                    {/* <hr className="my-0 m-auto" style={{ height: '1.5px', width: '80%' }} /> */}
                                </>
                            ))}
                        </div>

                    </div>

                </div>

                <div className=' col-7 pageContent swithSide   pb-5' >


                    <div className='shabatMenu overflow-auto ' style={{ height: 'fit-content' }} onScroll={myFunction}>


                        {categories && categories.map((category) =>
                            // (
                            <>

                                <div className='' id={category.name} style={{ paddingTop: '18%' }}>
                                    <div className=' h-100 w-100'>
                                        <img className="h-100 w-100 " src={category.name == "Salads" ? appetizers : category.name == "Appetizers" ? salads : category.name == "Desserts" ? desserts : salads} />
                                    </div>

                                    <div className='d-flex align-items-center mb-3 ' style={{ height: "100px" }}>
                                        <h1 className='font-weight-bold '>{language == "he" ? category.hebrewName : category.name}</h1>


                                    </div>


                                    {Object.keys(category).filter(key => key == "products").map((key, val) => (
                                        category[key].map(product =>
                                            <>
                                                <div className=' productLine w-100 d-flex row  rounded    justify-content-between   p-2' id={product._id} style={{ maxHeight: '150px', height: '150px' }}>
                                                    <div className='productPic d-flex align-items-center px-2 col-2 h-100'><img className=' w-100' src={image1} /></div>
                                                    <div className='   col-5 p-0 '>
                                                        <div className='h-75'>
                                                            <div className='productName font-weight-bold '>  {language == "he" ? product.hebrewName : product.name}</div>
                                                            <div className='amountOption font-weight-bold  pb-1 pt-1 pl-0 ' style={{ fontSize: '12px', width: 'fit-content' }}>
                                                                {/* <div > {i18.t('SelectAnOption')}:</div> */}
                                                                <select class="form-select form-select-x-sm rtl pb-0 pt-0 border-0 rounded-custom font-weight-bold" aria-label=".form-select-sm example" style={{ width: 'fit-content', fontSize: '12px' }}>
                                                                    {/* <option selected> 1 יחידה</option> */}
                                                                    <option value="1">500 גר'</option>
                                                                    <option value="1">One</option>
                                                                    <option value="2">Two</option>
                                                                    <option value="3">Three</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        {/* <div className='h-25'></div> */}
                                                        <div className='row d-flex align-items-end  h-25 pb-2 d-none' style={{ fontSize: 'xx-small' }}>
                                                            <div className='col-3 d-flex '><input type="radio" name="option" /><p className='px-1 m-0'>true</p></div>

                                                            <div className='col-3 d-flex '><input type="radio" name="option" /><p className='px-1 m-0'>false</p></div>
                                                        </div>
                                                    </div>
                                                    {/* <div className='col-1'></div> */}
                                                    <div className='col-4 px-4 h-100'>
                                                        <div className='d-flex align-items-center row justify-content-between h-50'>
                                                            <div className='col-5'></div>
                                                            <div className='price font-weight-bold  goldColor p-0 mr-0 col-6 fontNumber' style={{ width: 'fit-content' }}>14.90 &#8362; </div>

                                                        </div>
                                                        {/* <div className='h-25'></div> */}
                                                        <div className='d-flex align-items-end  row justify-content-between  h-50 pb-1'>
                                                            <div className='amountToBuy  goldColor d-flex  col-6 p-0  align-items-center' style={{ width: 'fit-content' }}>
                                                                <span class="plus" onClick={() => changeAmount(product._id, "plus")} >+</span>
                                                                <input type="text" value='1' className='border text-black bg-white pt-0 pb-0  m-1 input_number fontNumber' />
                                                                <span class="minus" onClick={() => changeAmount(product._id, "minus")}>-</span>
                                                            </div>

                                                            <div onClick={() => AddToCart(product)} className='addToCart col-5  bg-black text-white align-items-center d-flex h6  mb-0 px-3 py-2 roundButton' style={{ height: 'fit-content', width: 'fit-content' }}>{i18.t('addToCart')}
                                                                <div className='mr-2'></div>
                                                                {/* <img style={{height: '17px',}} src={Cart} /> */}
                                                            </div>

                                                        </div>

                                                    </div>

                                                </div>



























                                                {/* 
                                                <div className=' productLine w-100 d-flex row p-3  rounded  mb-4  justify-content-around align-items-center mx-0 ' id={product._id}>

                                                    <div className='productName d-flex align-items-center font-weight-bold  col-4 p-0'>
                                                        <div className='productPic d-flex align-items-center px-2'><img className=' w-100' src={image1} /></div>
                                                        <div className=''>  {language == "he" ? product.hebrewName : product.name}</div>

                                                    </div>
                                                    <div className='amountOption font-weight-bold col-2 pb-1 pt-1 pl-0' style={{ fontSize: '12px', width: 'fit-content' }}>
                                                        <div > {i18.t('SelectAnOption')}:</div>
                                                        <select class="form-select form-select-x-sm rtl pb-0 pt-0 border-0 rounded-custom font-weight-bold" aria-label=".form-select-sm example" style={{ width: 'fit-content', fontSize: '12px' }}>
                                                        
                                                            <option value="1">One</option>
                                                            <option value="2">Two</option>
                                                            <option value="3">Three</option>
                                                        </select>
                                                    </div>
                                                    <div className='col-1 goldColor p-0' style={{ width: 'fit-content' }}>|</div>
                                                    <div className='price font-weight-bold col-1 goldColor p-0' style={{ width: 'fit-content' }}>14.90 &#8362; </div>

                                                    <div className='amountToBuy col-3 goldColor d-flex   p-0  align-items-center' style={{ width: 'fit-content' }}>
                                                        <span class="plus" onClick={() => changeAmount(product._id, "plus")} >+</span>
                                                        <input type="text" value='1' className='border text-black bg-white pt-0 pb-0 pl-2 pr-2 m-1 input_number' style={{ fontSize: '13px' }} />
                                                        <span class="minus" onClick={() => changeAmount(product._id, "minus")}>-</span>
                                                    </div>

                                                    <div onClick={() => AddToCart(product)} className='addToCart col-3 bg-black text-white align-items-center d-flex h6 pb-1 pt-1 mb-0' style={{ height: 'fit-content', width: 'fit-content' }}>{i18.t('addToCart')}
                                                        <div className='mr-2'></div>
                                                        <img style={{
                                                            height: '17px',

                                                        }} src={Cart} />
                                                    </div>
                                                </div>
 */}

                                            </>

                                        )

                                    ))}
                                </div>
                                <hr className='goldColor mt-0' style={{ height: '2.5px', opacity: '1' }} />
                            </>
                        )}
                    </div>













                </div>

                <div className='col-3 '  >
                    <div className=' sidColumn affix ' style={{ height: '600px', overflowY: 'scroll', width: '300px' }}>
                        <div className='  mb-3 '  >
                            <div className='actionSection rounded  ' >
                                <div className='py-2 col-12'>שלום,<a> <span className='font-weight-bold'>התחבר</span> </a></div>

                                <div className='bg-gold py-3  text-white d-flex  justify-content-center  '>
                                    <div className='mx-2'>{i18.t('ShoppingCart')}</div>
                                    <div className='  fontNumber'> (<span className="numItems mx-1">{numItems}</span>)</div>

                                </div>

                                <div className="ShoppingCart_itemList  px-4 " style={{ maxWidth: '300px' }}>
                                    {cart && cart.map(item =>
                                        <div className={`productItem row justify-content-around align-items-end  border-bottom border-dark py-2 ${side} ${item.product._id}`}  >


                                            <div className={`productName col-12  font-weight-bold   ${align}`}> {language == "he" ? item.product.hebrewName : item.product.name}</div>
                                            <div className='amountToBuy col-3 goldColor d-flex   p-0  align-items-end' style={{ width: 'fit-content' }}>
                                                <span className="plus" onClick={() => changeAmount(item.product._id, "plusToCart")} style={{ height: '29px' }}>+</span>
                                                <input type="text" value={item.Amount} className='AmountInput border  p-0 text-black bg-white    m-1 my-0 input_number fontNumber' />
                                                <span className="minus" onClick={() => changeAmount(item.product._id, "minusToCart")} style={{ height: '29px' }}>-</span>
                                            </div>
                                            <div className='col-6 price h6 mb-0 font-weight-bold  goldColor fontNumber' >{parseFloat(14.90).toFixed(2)} &#8362; </div>


                                            <div className="col-1" onClick={() => deleteItem(item.product._id)}> <img style={{ width: '17px' }} src={deleteIcom} /></div>





                                        </div>

                                    )}



                                </div>


                            </div>
                        </div>
                        <div className=' col-12 rounded px-4 pb-3 mb-3 pt-2' style={{ backgroundColor: 'rgb(195, 153, 87, 0.16)', boxShadow: '0 3px 8px 0 rgb(0 0 0 / 8%)' }}>
                            <h5 className='font-weight-bold'>אולי תרצו גם...</h5>
                            <div className={`productItem row justify-content-around    py-2 px-2 ${side} `} style={{ borderBottom: '2px solid #ddd' }} >
                                <div className='row d-flex  px-0'>

                                    <div className='product_Pic col-4 d-flex align-items-center px-2' ><img className=' w-100 ' src={image1} /></div>

                                    <div className='col-8' >
                                        <div className={`productName col-12  p-0  ${align}`}> תבנית חד"פ</div>
                                        <div className='d-flex row  align-items-end'>
                                            <div className='amountToBuy col-6 goldColor d-flex   p-0  align-items-end' style={{ width: 'fit-content' }}>
                                                <span className="plus" onClick={() => changeAmount("plus")} style={{ height: '29px' }}>+</span>
                                                <input type="text" value="1" className='AmountInput border  p-0 text-black bg-white    m-1 my-0 input_number fontNumber' />
                                                <span className="minus" onClick={() => changeAmount("minus")} style={{ height: '29px' }}>-</span>
                                            </div>
                                            <div className='col-6 price h6 mb-0 font-weight-bold  goldColor fontNumber' >{parseFloat(14.90).toFixed(2)} &#8362; </div>
                                        </div>

                                    </div>
                                </div>



                            </div>

                            <div className={`productItem row justify-content-around    py-2 px-2 ${side} `} style={{ borderBottom: '2px solid #ddd' }}  >
                                <div className='row d-flex px-0'>

                                    <div className='product_Pic col-4 d-flex align-items-center px-2' ><img className=' w-100 ' src={image1} /></div>

                                    <div className='col-8' >
                                        <div className={`productName col-12   p-0  ${align}`}> תבנית חד"פ</div>
                                        <div className='d-flex row  align-items-end'>
                                            <div className='amountToBuy col-6 goldColor d-flex   p-0  align-items-end' style={{ width: 'fit-content' }}>
                                                <span className="plus" onClick={() => changeAmount("plus")} style={{ height: '29px' }}>+</span>
                                                <input type="text" value="1" className='AmountInput border  p-0 text-black bg-white    m-1 my-0 input_number fontNumber' />
                                                <span className="minus" onClick={() => changeAmount("minus")} style={{ height: '29px' }}>-</span>
                                            </div>
                                            <div className='col-6 price h6 mb-0 font-weight-bold  goldColor fontNumber' >{parseFloat(14.90).toFixed(2)} &#8362; </div>
                                        </div>

                                    </div>
                                </div>



                            </div>


                            <div className={`productItem row justify-content-around    py-2 px-2 ${side} `}   >
                                <div className='row d-flex px-0'>

                                    <div className='product_Pic col-4 d-flex align-items-center px-2' ><img className=' w-100 ' src={image1} /></div>

                                    <div className='col-8' >
                                        <div className={`productName col-12   p-0  ${align}`}> תבנית חד"פ</div>
                                        <div className='d-flex row  align-items-end'>
                                            <div className='amountToBuy col-6 goldColor d-flex   p-0  align-items-end' style={{ width: 'fit-content' }}>
                                                <span className="plus" onClick={() => changeAmount("plus")} style={{ height: '29px' }}>+</span>
                                                <input type="text" value="1" className='AmountInput border  p-0 text-black bg-white    m-1 my-0 input_number fontNumber' />
                                                <span className="minus" onClick={() => changeAmount("minus")} style={{ height: '29px' }}>-</span>
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
                            <div>   <label>הערות להזמנה </label></div>

                            <textarea className='w-100 border-0 border-bottom border-dark'></textarea>
                        </div>

                        <div className='rounded  col-12' style={{ boxShadow: '0 3px 8px 0 rgb(0 0 0 / 8%)' }}>
                            <div className="d-flex   pt-3 pb-2 px-4" style={{ backgroundColor: 'rgb(195, 153, 87, 0.5)', borderRadius: '0.25rem 0.25rem 0rem 0rem' }}>

                                <div className="col-9 swithSide"> סה"כ מוצרים:</div>
                                <div className="col-3 numItems fontNumber font-weight-bold">{numItems}</div>

                            </div>
                            <div className="d-flex mb-5  pt-3 pb-2 px-4" >

                                <div className="col-9 swithSide">סה"כ:</div>
                                <div className="col-3 numItems fontNumber font-weight-bold">{parseFloat(total).toFixed(2)}</div>

                            </div>

                        </div>

                        <button className=" d-block col-12 actionSection rounded text-white bg-gold px-3 py-2  w-100 border-0" onClick={() => props.history.push('/Checkout')} >המשך לתשלום</button>


                    </div>
                </div>
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