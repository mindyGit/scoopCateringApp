import React, { useEffect } from "react"
import logo from '../../data/imges/logo.png'
import underLogo from '../../data/imges/underLogo.png'
// import Navbar from 'react-bootstrap/Navbar'
import Offcanvas from 'react-bootstrap/Offcanvas'
import { Container, Form, FormControl, Nav, Button, NavDropdown, Image } from "react-bootstrap"
import allVectorSmart from '../../data/imges/allVectorSmart.png'
import Navbar from 'react-bootstrap/Navbar'
import Cart from '../../data/imges/cart.png'
import $ from 'jquery'
export function Header() {
    useEffect(() => {
        if ($) {
            // $(".cartButton").click(function () {
            //     if ($('.offcanvas-end').hasClass('visible'))
            //         $('.offcanvas-end').removeClass('visible')
            //     else
            //         $('.offcanvas-end').addClass('visible')
            // })
            // $(".btn-close").click(function () {
            //     $('.offcanvas-end').removeClass('visible')
            // })
        }
    }, [$])

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
                        <Offcanvas.Header closeButton className="justify-content-start py-4" style={{ backgroundColor: '#f1f1f2' }}>
                            {/* <Offcanvas.Title id="offcanvasNavbarLabel">סל הקניות</Offcanvas.Title> */}
                        </Offcanvas.Header>
                        <Offcanvas.Body className=" d-flex justify-content-center p-3 pt-5">

                            <h4>אין מוצרים בעגלה</h4>


                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
            <div className="bg-black">


                <div className="row  pt-2 pb-2 d-flex  headerPage justify-content-space-around align-items-center">
                    <div className=" col-md-2"></div>
                    {/* <div className=" col-md-2 mb-1 pl-5 ml-4" style={{ width: "fit-content" }}> </div>  */}

                    {/* <div className=" col-md-2 mb-1 pl-5 ml-4" style={{ width: "fit-content" }}> <Image style={{ height: '28px' }} src={allVectorSmart} /></div> */}
                    <div className=" col-md-5 h6 mb-0 text-center  whiteColor d-flex align-items-center " ><div className="mr-2">&#8362; 0 </div><button className="mr-2 bg-transparent border-0 cartButton"></button><div className="ml-5"><a >התחברות</a>/<a >הרשמה</a></div>  </div>



                    <div className=" col-md-3 h6 whiteColor mb-0 " >  הזמינו אירוע: 077-255-9982   </div>
                    <div className=" col-md-2"></div>

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

export default Header
