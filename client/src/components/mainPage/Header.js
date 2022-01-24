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

    useEffect(() => {
        if (language == 'he') {
            setSide('rtl')
            setAlign('text-end')
        }

        else {
            setSide('ltr')
            setAlign('text-start')
        }

        if ($) {
            //     if (language == 'he') {
            //         $('.EnLanguage').removeClass('d-none')
            //         $('.HeLanguage').addClass('d-none')
            //         $('.scoopButton').css('direction', 'rtl')
            //         $('.linksNuv').addClass('rtl')
            //         $('.linksNuv').css({ "right": '3%', "position": 'absolute' })
            //         $('.svgSize').css({ "right": '', "left": '200px' })
            //         $('.logoSide').css({ 'border-radius': '0px 50px 50px 0px', left: '0px' })
            //         $('.location').removeClass('text-start').addClass('text-end')
            //         $(".inputOfSearch").attr("placeholder", " הזן/י מוצר לחיפוש...")
            //         $('.swithSide').css('text-align', 'right')
            //         $('.productLine').addClass('rtl')
            //         $('.productName').css('text-align', 'right')
            //         $('.productLine').css({ "border-right": "8px solid #C59950", "border-left": '0px solid #C59950' })
            //         $('.swithDir').css('direction', 'rtl')
            //     }
            //     else {
            //         $('.HeLanguage').removeClass('d-none')
            //         $('.EnLanguage').addClass('d-none')
            //         $('.linksNuv').removeClass('rtl')
            //         $('.scoopButton').css('direction', 'ltr')
            //         $('.linksNuv').css({ "right": '', "position": '' })
            //         $('.location').removeClass('text-end').addClass('text-start')
            //         $('.svgSize').css({ "right": '200px', "left": '' })
            //         $('.logoSide').css({ 'border-radius': '50px 0px 0px 50px', right: '0px', left: '' })
            //         $(".inputOfSearch").attr("placeholder", " ")
            //         $('.swithSide').css('text-align', 'left')
            //         $('.productLine').removeClass('rtl')
            //         $('.productName').css('text-align', 'left')
            //         $('.productLine').css({ "border-right": "0px solid #C59950", "border-left": '8px solid #C59950' })
            //         $('.swithDir').css('direction', 'ltr')


            //     }
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
                            <Offcanvas.Title className="m-auto     font-weight-bold" id="offcanvasNavbarLabel">{i18.t('ShoppingCart')} (0)</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body className=" d-flex flex-column  pl-4 pt-0 pr-0">

                            <h4 className="text-center d-none">{i18.t('emptyCart')}</h4>
                            <div className="ShoppingCart_itemList mb-5 px-2 pt-3">
                                <div className={`productItem row justify-content-around align-items-end  border-bottom border-dark py-2 ${side}`}>
                                    <div className={`productName col-12  font-weight-bold   ${align}`}> {i18.t('product1')}</div>
                                    <div className='col-3 amountToBuy goldColor d-flex align-items-end'><div>+</div><div className='border text-black bg-white pt-0 pb-0 pl-2 pr-2  m-1 my-0' style={{ fontSize: '13px' }}>1</div><div>-</div></div>
                                    <div className='col-6 price h6 mb-0 font-weight-bold  goldColor ' >14.90 &#8362; </div>


                                    <i class="fas fa-trash-alt col-1"></i>


                                </div>




                                <div className={`productItem row justify-content-around align-items-end  border-bottom border-dark py-2 ${side}`}>
                                    <div className={`productName col-12  font-weight-bold   ${align}`}> {i18.t('product1')}</div>


                                    <div className='col-3 amountToBuy goldColor d-flex align-items-end'><div>+</div><div className='border text-black bg-white pt-0 pb-0 pl-2 pr-2  m-1 my-0' style={{ fontSize: '13px' }}>1</div><div>-</div></div>
                                    <div className='col-6 price h6 mb-0 font-weight-bold  goldColor ' >14.90 &#8362; </div>


                                    <i class="fas fa-trash-alt col-1"></i>


                                </div>


                                <div className={`productItem row justify-content-around align-items-end  border-bottom border-dark py-2 ${side}`}>

                                    <div className={`productName col-12  font-weight-bold   ${align}`}> {i18.t('product1')}</div>
                                    <div className='col-3 amountToBuy goldColor d-flex align-items-end'><div>+</div><div className='border text-black bg-white pt-0 pb-0 pl-2 pr-2  m-1 my-0' style={{ fontSize: '13px' }}>1</div><div>-</div></div>
                                    <div className='col-6 price h6 mb-0 font-weight-bold  goldColor'>14.90 &#8362; </div>
                                    <i class="fas fa-trash-alt col-1"></i>
                                </div>
                                <div className={`productItem row justify-content-around align-items-end  border-bottom border-dark py-2 ${side}`}>
                                    <div className={`productName col-12  font-weight-bold   ${align}`}> {i18.t('product1')}</div>
                                    <div className='col-3 amountToBuy goldColor d-flex align-items-end'><div>+</div><div className='border text-black bg-white pt-0 pb-0 pl-2 pr-2  m-1 my-0' style={{ fontSize: '13px' }}>1</div><div>-</div></div>
                                    <div className='col-6 price h6 mb-0 font-weight-bold  goldColor ' >14.90 &#8362; </div>


                                    <i class="fas fa-trash-alt col-1"></i>


                                </div>
                                <div className={`productItem row justify-content-around align-items-end  border-bottom border-dark py-2 ${side}`}>
                                    <div className={`productName col-12  font-weight-bold   ${align}`}> {i18.t('product1')}</div>
                                    <div className='col-3 amountToBuy goldColor d-flex align-items-end'><div>+</div><div className='border text-black bg-white pt-0 pb-0 pl-2 pr-2  m-1 my-0' style={{ fontSize: '13px' }}>1</div><div>-</div></div>
                                    <div className='col-6 price h6 mb-0 font-weight-bold  goldColor ' >14.90 &#8362; </div>


                                    <i class="fas fa-trash-alt col-1"></i>


                                </div>

                                <div className={`productItem row justify-content-around align-items-end  border-bottom border-dark py-2 ${side}`}>
                                    <div className={`productName col-12  font-weight-bold   ${align}`}> {i18.t('product1')}</div>
                                    <div className='col-3 amountToBuy goldColor d-flex align-items-end'><div>+</div><div className='border text-black bg-white pt-0 pb-0 pl-2 pr-2  m-1 my-0' style={{ fontSize: '13px' }}>1</div><div>-</div></div>
                                    <div className='col-6 price h6 mb-0 font-weight-bold  goldColor ' >14.90 &#8362; </div>


                                    <i class="fas fa-trash-alt col-1"></i>


                                </div>

                            </div>


                            <div className=" swithDir d-flex row  justify-content-around " >
                                <button className="col-5 bg-black text-white" >{i18.t('ToTheShoppingCart')}</button>
                                <button className=" col-5 goldButton">{i18.t('toCheckout')}</button>
                            </div>
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

            </div >
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
