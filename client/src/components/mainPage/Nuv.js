
import React from 'react';
import './../../App.css'
import foodExample from '../../data/imges/foodExample.png'
import img1 from '../../data/imges/galeryImag.png'
import { Container, Form, FormControl, Nav, Button, NavDropdown, Image } from "react-bootstrap"
import { ReactComponent as YourSvg } from '../../data/imges/searchIcon.svg';
import { connect } from 'react-redux';
import { actions } from '../../redux/actions/action';
import Search from '../Search';


import Navbar from 'react-bootstrap/Navbar'
export function Nuv(props) {
    const { products } = props;
    return (


        <Navbar variant="dark" expand="lg" style={{ height: '8vh' }}>

            <Navbar.Brand href="#"></Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">



                {/* <Search details={products} /> */}
                <Nav
                    className="me-auto my-2 my-lg-0 linksNuv pt-2 pb-2"
                    style={{
                        maxHeight: 'fit-content', right: '3%',
                        position: 'absolute'
                    }}
                    navbarScroll
                >

                    <Nav.Link className="active hoverLink" href="/organizationsAndCompanies">ארגונים וחברות</Nav.Link>
                    <Nav.Link className="active hoverLink" href="/orders">הזמנות</Nav.Link>

                    <Nav.Link className="active hoverLink" href="/recommend">ממליצים</Nav.Link>
                    <NavDropdown className="hoverLink" title="תפריטים" id="navbarScrollingDropdown" style={{ direction: "rtl" }}>
                        <div className='row d-flex align-content-center justify-content-center  h-100 w-100 m-0'>
                            <div className='col-md-6 d-flex p-0 flex-column align-conte-center justify-content-center'>
                                <NavDropdown.Item href="/menu/bakery" style={{ textAlign: 'start' }} className='pb-1 pr-0 h2 m-0' > בייקרי</NavDropdown.Item>
                                <hr className="hr_Style m-0 mb-2" />
                                <NavDropdown.Item href="/menu/weekday" style={{ textAlign: 'start' }} className='pb-1 pr-0 h2 m-0'>סקופ אמצ"ש</NavDropdown.Item>
                                <hr className="hr_Style m-0 mb-2" />
                                <NavDropdown.Item href="/menu/holidays" style={{ textAlign: 'start' }} className='pb-1 pr-0 h2 m-0'> מתחם חגים  </NavDropdown.Item>
                                <hr className="hr_Style m-0 mb-2" />
                                <NavDropdown.Item href="/menu/salads" style={{ textAlign: 'start' }} className='pb-1 pr-0 h2 m-0'> סלטים</NavDropdown.Item>
                                <hr className="hr_Style m-0 mb-2" />
                            </div>
                            <div className='col-md-6  CustomerItem p-0'><img className='h-100 w-100' src={foodExample} /></div>
                        </div>
                    </NavDropdown>
                    <Nav.Link className="active hoverLink" href="/shop" >
                        חנות
                    </Nav.Link>
                    <Nav.Link className="active hoverLink" href="/events" >
                        אירועים
                    </Nav.Link>


                    <NavDropdown id="scoopButton" className=" hoverLink " title=" סקופ קייטרינג" id="navbarScrollingDropdown" style={{ direction: "rtl" }}>
                        <div className='row d-flex align-content-center justify-content-center h-100 w-100 m-0'>
                            <div className='col-md-6 d-flex p-0 flex-column align-conte-center justify-content-center'>


                                <NavDropdown.Item href="/home/ourStory" style={{ textAlign: 'start' }} className='pb-1 pr-0 h2 m-0' >הסיפור שלנו</NavDropdown.Item>
                                <hr className="hr_Style m-0 mb-2" />
                                <NavDropdown.Item href="/home/ourCustomers" style={{ textAlign: 'start' }} className='pb-1 pr-0 h2 m-0'>לקוחותינו</NavDropdown.Item>
                                <hr className="hr_Style m-0 mb-2" />
                                <NavDropdown.Item href="/home/ourPeeks" style={{ textAlign: 'start' }} className='pb-1 pr-0 h2 m-0' > הצוות שלנו </NavDropdown.Item>
                                <hr className="hr_Style m-0 mb-2" />
                                <NavDropdown.Item href="/home/contactUs" style={{ textAlign: 'start' }} className='pb-1 pr-0 h2 m-0'>צור קשר</NavDropdown.Item>
                                <hr className="hr_Style m-0 mb-2" />
                            </div>
                            <div className='col-md-6   CustomerItem p-0'> <img className='h-100 w-100' src={img1} /></div>
                        </div>
                    </NavDropdown>


                </Nav>


            </Navbar.Collapse>

        </Navbar >





    );
}

const mapStateToProps = (state) => {
    return {

        products: state.productReducer.products,

    };
}
const mapDispatchToProps = (dispatch) => ({
    getAllProducts: () => dispatch(actions.getAllProducts()),

})
export default connect(mapStateToProps, mapDispatchToProps)(Nuv)



