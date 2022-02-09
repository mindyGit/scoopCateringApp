import React, { useEffect, useState } from "react"
import logo from '../../data/imges/logo.png'
import underLogo from '../../data/imges/underLogo.png'
// import Navbar from 'react-bootstrap/Navbar'
import Offcanvas from 'react-bootstrap/Offcanvas'
import { connect } from 'react-redux';
import { actions } from '../../redux/actions/action';
import { Container, Form, FormControl, Nav, Button, NavDropdown, Image, Row } from "react-bootstrap"
import allVectorSmart from '../../data/imges/allVectorSmart.png'
import Navbar from 'react-bootstrap/Navbar'
import Cart from '../../data/imges/cart.png'
import $ from 'jquery'
import { useTranslation } from 'react-i18next';
import i18 from '../../i18/i18';
export function Header(props) {
    const { t, i18n } = useTranslation();
    const [side, setSide] = useState('');
    const [align, setAlign] = useState('');
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


    // let cart
    // const myStorage = window.localStorage;
    // if (myStorage.cart != undefined) {
    //     try {
    //         cart = JSON.parse(myStorage.cart);
    //     }
    //     catch (errror) {
    //         console.error("Not a JSON response")
    //     }
    // }
    const AddToCart = async (product) => {

        let flag = 0

        let shoppingCart = []
        if (cart != undefined)
            shoppingCart = cart
        shoppingCart.map(item => {

            if (item.product._id == product._id) {
                debugger

                item.Total = parseInt($('#' + product._id + ' ' + '.amountToBuy' + ' ' + 'input').val()) * 14.90//item.product.price
                item.Amount = parseInt(item.Amount) + parseInt($('#' + product._id + ' ' + '.amountToBuy' + ' ' + 'input').val())
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
                    $('.numItems').text(numItems + 1)

                }
                else {
                    if (amount != '1') {
                        item.Amount = parseInt(item.Amount) - 1
                        setNumItems(numItems - 1)
                        setTotal(total - 14.90)//-item.product.price
                        amount--
                        $('.numItems').text(numItems - 1)

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
        $('.' + id).remove()
        setNumItems(numItems - less)

    }


    useEffect(() => {
        if (language == 'he') {
            // $('.navbar-toggler').click()
            setSide('rtl')
            setAlign('text-end')
        }

        else {
            setSide('ltr')
            setAlign('text-start')
        }



    }, [language, cart])

    return (
        <>


            <Navbar className="cartNuvbar bg-transparent border-0 p-0" expand={false} styl={{

            }}>
                <Container fluid className="p-0">

                    <Navbar.Toggle aria-controls="offcanvasNavbar" className=" p-0" />
                    <Navbar.Offcanvas
                        id="offcanvasNavbar"
                        aria-labelledby="offcanvasNavbarLabel"
                        placement="end"
                        className=""
                    >
                        <Offcanvas.Header closeButton className="rtl py-4" style={{ backgroundColor: '#f1f1f2' }}>
                            <Offcanvas.Title className="m-auto     font-weight-bold" id="offcanvasNavbarLabel">{i18.t('ShoppingCart')}
                                (<span className="numItems">{numItems}</span>)</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body className=" d-flex flex-column  pl-4 pt-0 pr-0 overflow-hidden">
                            {cart == "" && (
                                <h4 className="text-center mt-5 pt-5">{i18.t('emptyCart')}</h4>

                            )
                            }

                            <div className="ShoppingCart_itemList mb-5 px-2 pt-3">
                                {cart && cart.map(item =>
                                    <div className={`productItem row justify-content-around align-items-end  border-bottom border-dark py-2 ${side} ${item.product._id}`}  >
                                        <div className={`productName col-12  font-weight-bold   ${align}`}> {language == "he" ? item.product.hebrewName : item.product.name}</div>
                                        <div className='amountToBuy col-3 goldColor d-flex   p-0  align-items-end' style={{ width: 'fit-content' }}>
                                            <span className="plus" onClick={() => changeAmount(item.product._id, "plus")} style={{ height: '29px' }}>+</span>
                                            <input type="text" value={item.Amount} className='AmountInput border p-0 text-black bg-white pt-0 pb-0 pl-2 pr-2 m-1 my-0 input_number' style={{ fontSize: '13px' }} />
                                            <span className="minus" onClick={() => changeAmount(item.product._id, "minus")} style={{ height: '29px' }}>-</span>
                                        </div>
                                        <div className='col-6 price h6 mb-0 font-weight-bold  goldColor ' >{parseFloat(14.90).toFixed(2)} &#8362; </div>

                                        <div className="col-1" onClick={() => deleteItem(item.product._id)}> <i class="fas fa-trash-alt "></i></div>



                                    </div>

                                )}



                            </div>

                            {cart != "" && (
                                <div className=" swithDir d-flex row  justify-content-around " >
                                    <button className="col-5 bg-black text-white" onClick={() => props.history.push('/Cart')} >{i18.t('ToTheShoppingCart')}</button>
                                    <button className=" col-5 goldButton" onClick={() => props.history.push('/Checkout')}>{i18.t('toCheckout')}</button>
                                </div>

                            )}

                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
            <div className="bg-black">
                <div className="row px-5 pt-2 pb-2 d-flex  headerPage justify-content-space-around align-items-center">
                    <div className=" col-6 h6 mb-0   whiteColor d-flex align-items-center justify-content-center " ><div className="mr-5"> {total ? parseFloat(total).toFixed(2) : 0} &#8362;</div><div className="ml-5 mr-5" onClick={() => props.history.push('/login')}><a >{i18.t('Login')}</a>/<a >{i18.t('Register')}</a></div>  </div>
                    <div className=" col-6 h6 whiteColor mb-0 d-flex align-items-center justify-content-center  " >  {i18.t('BookAnEvent')} : 077-255-9982   </div>
                </div>

            </div>
        </>
    )
}


const mapStateToProps = (state) => {
    return {

        products: state.productReducer.products,
        language: state.languageReducer.language

    };
}
const mapDispatchToProps = (dispatch) => ({
    getAllProducts: () => dispatch(actions.getAllProducts()),
    setLanguage: (lan) => dispatch(actions.setLanguage(lan))
})
export default connect(mapStateToProps, mapDispatchToProps)(Header)
