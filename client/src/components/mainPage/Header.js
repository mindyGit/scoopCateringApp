import React from "react"
import logo from '../../data/imges/logo.png'
import underLogo from '../../data/imges/underLogo.png'
import { Container, Form, FormControl, Nav, Button, NavDropdown, Image } from "react-bootstrap"
import allVectorSmart from '../../data/imges/allVectorSmart.png'
import Navbar from 'react-bootstrap/Navbar'
import Cart from '../../data/imges/cart.png'
export function Header() {
    return (
        <div className="bg-black">


            <div className="row  pt-2 pb-2 d-flex  headerPage justify-content-space-around align-items-center">
                <div className=" col-md-2"></div>
                {/* <div className=" col-md-2 mb-1 pl-5 ml-4" style={{ width: "fit-content" }}> </div>  */}

                {/* <div className=" col-md-2 mb-1 pl-5 ml-4" style={{ width: "fit-content" }}> <Image style={{ height: '28px' }} src={allVectorSmart} /></div> */}
                <div className=" col-md-5 h6 mb-0 text-center  whiteColor d-flex align-items-center " ><div className="mr-2">&#8362; 0 </div><button className="mr-2 bg-transparent border-0"><img src={Cart} /></button><div><a >התחברות</a>/<a >הרשמה</a></div>  </div>



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
    )
}

export default Header
