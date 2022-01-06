
import React from 'react';
import './../../App.css'

import { Container, Form, FormControl, Nav, Button, NavDropdown, Image } from "react-bootstrap"
import { ReactComponent as YourSvg } from '../../data/imges/searchIcon.svg';


import Navbar from 'react-bootstrap/Navbar'
export function Nuv() {
    return (


        <Navbar variant="dark" expand="lg" style={{ height: '8vh' }}>
            <YourSvg className="svgSize " style={{
                position: 'absolute',
                left: '12%'
            }} />
            <Navbar.Brand href="#"></Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="me-auto my-2 my-lg-0 linksNuv pt-2 pb-2"
                    style={{
                        maxHeight: 'fit-content', right: '3%',
                        position: 'absolute'
                    }}
                    navbarScroll
                >
                    <Nav.Link className="active hoverLink" href="/home/organizationsAndCompanies">ארגונים וחברות</Nav.Link>
                    <Nav.Link className="active hoverLink" href="/home/orders">הזמנות</Nav.Link>

                    <Nav.Link className="active hoverLink" href="/home/recommend">ממליצים</Nav.Link>
                    <NavDropdown className="hoverLink" title="תפריטים" id="navbarScrollingDropdown" style={{ direction: "ltr" }}>

                        <NavDropdown.Item href="/home/menu/bakery" style={{ textAlign: 'center' }}> בייקרי</NavDropdown.Item>
                        <NavDropdown.Item href="/home/menu/weekday" style={{ textAlign: 'center' }}>סקופ אמצ"ש</NavDropdown.Item>
                        <NavDropdown.Item href="/home/menu/holidays" style={{ textAlign: 'center' }}>   מתחם חגים  </NavDropdown.Item>
                        <NavDropdown.Item href="/home/menu/salads" style={{ textAlign: 'center' }}>סלטים </NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link className="active hoverLink" href="/home/shop" >
                        חנות
                    </Nav.Link>
                    <Nav.Link className="active hoverLink" href="/home/events" >
                        אירועים
                    </Nav.Link>


                    <NavDropdown className=" hoverLink" title=" סקופ קייטרינג" id="navbarScrollingDropdown" style={{ direction: "ltr" }}>
                        <NavDropdown.Item href="/home/ourStory" style={{ textAlign: 'center' }}>הסיפור שלנו</NavDropdown.Item>
                        <NavDropdown.Item href="/home/ourCustomers" style={{ textAlign: 'center' }}>לקוחותינו</NavDropdown.Item>
                        <NavDropdown.Item href="/home/ourPeeks" style={{ textAlign: 'center' }}> הצוות שלנו </NavDropdown.Item>
                        <NavDropdown.Item href="/home/contactUs" style={{ textAlign: 'center' }}>צור קשר</NavDropdown.Item>
                    </NavDropdown>

                </Nav>


            </Navbar.Collapse>

        </Navbar>





        // <Navbar expand="lg" className="mb-0">

        //     <Container fluid>
        //         <Navbar.Brand href="#"></Navbar.Brand>
        //         <Navbar.Toggle aria-controls="navbarScroll" style={{ position: 'absolute' }} />
        //         <Navbar.Collapse id="navbarScroll">
        //             <Nav
        //                 className="ml-auto my-2 my-lg-0 "
        //                 style={{ maxHeight: '100px' }}
        //                 navbarScroll
        //             >
        //                 <NavDropdown style={{ color: "white !important" }} title="סקופ קייטרינג" id="navbarScrollingDropdown">
        //                     <NavDropdown.Item href="#action3">action</NavDropdown.Item>
        //                     <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
        //                     <NavDropdown.Divider />
        //                     <NavDropdown.Item href="#action5">
        //                         Something else here
        //                     </NavDropdown.Item>
        //                 </NavDropdown>
        //                 <Nav.Link href="#action1">אירועים</Nav.Link>
        //                 <NavDropdown title="תפריטים" id="navbarScrollingDropdown">
        //                     <NavDropdown.Item href="#action3">action</NavDropdown.Item>
        //                     <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
        //                     <NavDropdown.Divider />
        //                     <NavDropdown.Item href="#action5">
        //                         Something else here
        //                     </NavDropdown.Item>
        //                 </NavDropdown>
        //                 <Nav.Link href="#action1">ממליצים </Nav.Link>
        //                 <Nav.Link href="#action2">ארגונים וחברות</Nav.Link>


        //             </Nav>
        //             {/* <Form className="d-flex">
        //                 <FormControl
        //                     type="search"
        //                     placeholder="Search"
        //                     className="me-2"
        //                     aria-label="Search"
        //                 />
        //                 <Button className="m-0 pt-0 pb-0" variant="outline-info">Search</Button>
        //             </Form> */}
        //         </Navbar.Collapse>
        //     </Container>
        // </Navbar>



    );
}

export default Nuv



