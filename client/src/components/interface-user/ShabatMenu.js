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
import '../../App.css'
import $ from 'jquery'
import { height } from '@mui/system';
import i18 from '../../i18/i18';
import { useTranslation } from 'react-i18next';
import { Sync } from '@material-ui/icons';
function ProductList(props) {

    const url = window.location.href

    // const [cart, setCart] = useLocalStorage("cart", []);
    const lastSegment = decodeURI(url.split("/").pop().toString());
    const { language } = props
    const { products } = props;
    const { categories } = props
    const { t, i18n } = useTranslation();

    const isMobile = useMediaQuery(768);
    const isTablet = useMediaQuery(1024);

    const [cart, setCart] = useLocalStorage("cart", []);
    const [numItems, setNumItems] = useLocalStorage("numItems", 0);
    const [total, setTotal] = useLocalStorage("total", 0);
    const { totalRedux, numItemsRedux, cartRedux } = props
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
        let amount = parseInt($('#' + id + ' ' + '.amountToBuy' + ' ' + 'input').val())

        // cart.map(item => {

        //     if (item.product._id == id) {
        if (action == 'plus') {
            // item.Amount = parseInt(item.Amount) + 1
            // setNumItems(numItems + 1)
            amount++

        }
        else {
            if (amount != '1') {
                // item.Amount = parseInt(item.Amount) - 1
                // setNumItems(numItems - 1)

                amount--

            }

        }

        // }
        // })
        $('#' + id + ' ' + '.amountToBuy' + ' ' + 'input').val(amount)
        // setCart(cart)
    }


    // const myStorage = window.localStorage;
    const AddToCart = async (product) => {
        let amountToAdd = parseInt($('#' + product._id + ' ' + '.amountToBuy' + ' ' + 'input').val())
        let productName = $('#' + product._id + ' ' + '.productName').text()
        let productPrice = $('#' + product._id + ' ' + '.price').text()

        setTotal(total + (amountToAdd * 14.90))//product.price
        setNumItems(numItems + amountToAdd)
        let flag = 0
        let a
        let shoppingCart = []
        if (cart != undefined)
            shoppingCart = cart
        shoppingCart.map(item => {

            if (item.product._id == product._id) {
                debugger

                item.Amount = parseInt(item.Amount) + amountToAdd
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


        $('.navbar-toggler').click()
        $('.numItems').text(numItems + amountToAdd)
        if (flag != 1) {
            if (language == "he")
                $('.ShoppingCart_itemList').append(`

    <div class="productItem row justify-content-around align-items-end  border-bottom border-dark py-2 rtl ${product._id}">
    <div class="productName col-12  font-weight-bold text-end">${productName}</div>
    <div class='amountToBuy col-3 goldColor d-flex   p-0  align-items-end' style="width: fit-content">
        <span class="plus" style="height: 29px">+</span>
        <input type="text" value=${amountToAdd} class='border p-0 text-black bg-white pt-0 pb-0 pl-2 pr-2 m-1 my-0 input_number' style="font-size: 13px" />
        <span class="minus"  style ="height: 29px" >-</span>
    </div>
    <div class='col-6 price h6 mb-0 font-weight-bold  goldColor ' >${productPrice}</div>

    <div class="col-1"> <i class="fas fa-trash-alt "></i></div>



</div>
    `)
            else
                $('.ShoppingCart_itemList').append(`

        <div class="productItem row justify-content-around align-items-end  border-bottom border-dark py-2 ${product._id}">
        <div class="productName col-12  font-weight-bold">${productName}</div>
        <div class='amountToBuy col-3 goldColor d-flex   p-0  align-items-end' style="width: fit-content">
            <span class="plus" style="height: 29px">+</span>
            <input type="text" value=${amountToAdd} class='border p-0 text-black bg-white pt-0 pb-0 pl-2 pr-2 m-1 my-0 input_number' style="font-size: 13px" />
            <span class="minus"  style ="height: 29px" >-</span>
        </div>
        <div class='col-6 price h6 mb-0 font-weight-bold  goldColor ' >${productPrice}</div>

        <div class="col-1"> <i class="fas fa-trash-alt "></i></div>



    </div>
        `)
        }
        else {
            $('.' + product._id + ' ' + '.amountToBuy' + ' ' + '.AmountInput').val(a)
        }
    }


    useEffect(() => {
        if ($) { }
    }, [$, props, language, totalRedux, numItemsRedux, cartRedux]);



    return (
        <>
            <div className="pageNuv">
                {isTablet && (
                    <Hamborger />

                )}

                {!isMobile && !isTablet && (
                    <TopPageDesktop />
                )}
            </div>

            <div className="pageHeader">
                <label >{i18.t('shabatMenu')}<button className='white-arrow h4 p-1 ' onClick={() => props.history.goBack()} ><i class="fas fa-long-arrow-alt-right  pr-2" style={{ height: 'fit-content' }} ></i> </button> </label>
                {isTablet ? <img className="h-100 " src={headerBgImag} /> : <img className="h-100 w-100" src={headerBgImag} />}


            </div>
            <div className='location  pt-3 text-end px-5'>

                <div className='d-inline' onClick={() => props.history.push('/')}>{i18.t('ScoopCatering')}</div>
                <div className='d-inline goldColor' onClick={() => props.history.push('/shop')}> /{i18.t('shabatMenu')} </div>


            </div>
            <div className='text-end px-5'>
                <button className='goldButton h5 p-2 mt-3 ' style={{
                }} onClick={() => props.history.push('/Cart')}>{i18.t('ToTheShoppingCart')}<i class="fas fa-long-arrow-alt-right  pl-2" style={{ height: 'fit-content' }}></i>
                </button>
            </div>

            <div className='row px-5 swithDir'>

                <div className='categoryList col-4 d-flex flex-column pt-5 mt-4'>
                    {categories && categories.map((category) => (
                        <a className='' href={'#' + category.name}> <button className='bg-white categoryButton' style={{ height: '60px', width: '80%' }} >{language == "he" ? category.hebrewName : category.name}</button></a>
                    ))}
                </div>
                <div className='pageContent swithSide  pt-4 pb-5 col-8'>

                    {/* <h3 className=' font-weight-bold mb-1'>{lastSegment}</h3> */}
                    <h6 className='  mb-3'> {i18.t('addProductsLable')}</h6>
                    <div className='shabatMenu overflow-auto ' style={{ height: '500px' }}>
                        {categories && categories.map((category) =>
                            // (
                            <div className='' id={category.name}>
                                <div className=' d-flex align-items-center mb-3 ' style={{ height: "100px" }}>
                                    <h1>{language == "he" ? category.hebrewName : category.name}</h1>
                                    <div className='mx-3 h-100' style={{ width: '15%' }}>
                                        <img className="h-100 w-100 " src={'http://scoopcatering.co.il/images/foodCategories/' + category.picUrl} />
                                    </div>

                                </div>


                                {Object.keys(category).filter(key => key == "products").map((key, val) => (
                                    category[key].map(product =>

                                        <div className=' productLine w-100 d-flex row   mb-4  justify-content-around align-items-center pr-1 pl-1 ml-0 pb-1 pt-1' id={product._id}>

                                            <div className='productName font-weight-bold  col-4'> {language == "he" ? product.hebrewName : product.name} </div>
                                            <div className='amountOption font-weight-bold col-2 pb-1 pt-1 pl-0' style={{ fontSize: '12px', width: 'fit-content' }}>
                                                <div > {i18.t('SelectAnOption')}:</div>
                                                <select class="form-select form-select-x-sm rtl pb-0 pt-0 border-0 rounded-0 font-weight-bold" aria-label=".form-select-sm example" style={{ width: 'fit-content', fontSize: '12px' }}>
                                                    {/* <option selected> 1 יחידה</option> */}
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




                                    )

                                ))}
                            </div>
                            // )

                        )}
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
export default connect(mapStateToProps, mapDispatchToProps)(ProductList)
// export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ProductList))