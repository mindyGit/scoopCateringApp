import React from "react"
import logo from '../../data/imges/logo.png'
import underLogo from '../../data/imges/underLogo.png'
import { Container, Form, FormControl, Nav, Button, NavDropdown, Image } from "react-bootstrap"
import allVectorSmart from '../../data/imges/allVectorSmart.png'
import Navbar from 'react-bootstrap/Navbar'

export function Header() {
    return (
        <div style={{ backgroundColor: '#424230' }}>


            <div className="row  pt-1 pb-1 d-flex align-items-center headerPage">
                <div className=" col-md-1"></div>
                <div className=" col-md-2 mb-1 pl-5 ml-4" style={{ width: "fit-content" }}> </div>

                {/* <div className=" col-md-2 mb-1 pl-5 ml-4" style={{ width: "fit-content" }}> <Image style={{ height: '28px' }} src={allVectorSmart} /></div> */}
                <div className=" col-md-3 h6 mb-0 text-start  whiteColor" ><a >הרשמה</a>/<a >התחברות</a> </div>



                <div className=" col-md-3 h6 whiteColor mb-0 " > &gt; הזמינו אירוע: 077-255-9982   &lt;</div>

                <div className=" col-md-3"></div>
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
