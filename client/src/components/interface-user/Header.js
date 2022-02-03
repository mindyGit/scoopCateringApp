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
    let productsInCart
    const myStorage = window.localStorage;
    if (myStorage.cart != undefined) {
        try {
            productsInCart = JSON.parse(myStorage.cart);
        }
        catch (errror) {
            console.error("Not a JSON response")
        }
    }

    // const productsInCart = myStorage.cart

    const deleteItem = (id) => {
        let list = productsInCart.filter(x => {
            return x.product._id != id;
        })
        myStorage.cart = JSON.stringify(list);
        $('.' + id).remove()
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

        if ($) {

        }
    }, [$, language])

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
                            <Offcanvas.Title className="m-auto     font-weight-bold" id="offcanvasNavbarLabel">{i18.t('ShoppingCart')} ({productsInCart && productsInCart.length})</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body className=" d-flex flex-column  pl-4 pt-0 pr-0 overflow-hidden">
                            {productsInCart == "" && (
                                <h4 className="text-center mt-5 pt-5">{i18.t('emptyCart')}</h4>

                            )
                            }

                            <div className="ShoppingCart_itemList mb-5 px-2 pt-3">
                                {productsInCart && productsInCart.map(item =>
                                    <div className={`productItem row justify-content-around align-items-end  border-bottom border-dark py-2 ${side} ${item.product._id}`} >
                                        <div className={`productName col-12  font-weight-bold   ${align}`}> {language == "he" ? item.product.hebrewName : item.product.name}</div>
                                        <div className='col-3 amountToBuy goldColor d-flex align-items-end'><div>+</div><div className='border text-black bg-white pt-0 pb-0 pl-2 pr-2  m-1 my-0' style={{ fontSize: '13px' }}>{item.Amount}</div><div>-</div></div>
                                        <div className='col-6 price h6 mb-0 font-weight-bold  goldColor ' >14.90 &#8362; </div>

                                        <div className="col-1" onClick={() => deleteItem(item.product._id)}> <i class="fas fa-trash-alt "></i></div>



                                    </div>

                                )}



                            </div>

                            {productsInCart != "" && (
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
                    <div className=" col-6 h6 mb-0   whiteColor d-flex align-items-center justify-content-center " ><div className="mr-2">&#8362; 0 </div><div className="ml-5 mr-5"><a >{i18.t('Login')}</a>/<a >{i18.t('Register')}</a></div>  </div>
                    <div className=" col-6 h6 whiteColor mb-0 d-flex align-items-center justify-content-center  " >  {i18.t('BookAnEvent')} : 077-255-9982   </div>
                </div>
                {/* <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav> */}
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
