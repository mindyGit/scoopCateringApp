import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import Store from '../../redux/store'
import Navbar from 'react-bootstrap/Navbar'
import Offcanvas from 'react-bootstrap/Offcanvas'
import Nuv from './Nuv';
import Section from './Section';
import Header from './Header';
import Footer from './Footer';
import UnderFooter from './UnderFooter'
import { connect } from 'react-redux';
import { actions } from '../../redux/actions/action';
import Search from '../Search';
import initialDetails from '../../data/initialDetails';
import background_image from '../../data/imges/backgroundImg.jpg'
import { Container, Row, Col } from 'react-grid-system';
import { Form, FormControl, Nav, Button, NavDropdown, Image } from "react-bootstrap";
import logo from '../../data/imges/logo.png'
import underLogo from '../../data/imges/underLogo.png'
import galeryImag from '../../data/imges/galeryImag.png'
// import img1 from '../data/imges/img1.png'
// import img1_ from '../data/imges/img1_.png'
import img1 from '../../data/imges/imgG.png'


import img3 from '../../data/imges/img3.png'


import Rectangle from '../../data/imges/Rectangle.jpg'
import blog1 from '../../data/imges/blog1.png'
import blog2 from '../../data/imges/blog2.png'
import blog3 from '../../data/imges/blog3.png'
import foodExample from '../../data/imges/foodExample.png'
import SearchResults from '../interface-user/SearchResults'
import $ from 'jquery'
import { Redirect } from 'react-router';

import useMediaQuery from "../../hooks/useMediaQuery";
// import searchIcon from '../data/imges/searchIcon.svg'
import { ReactComponent as YourSvg } from '../../data/imges/searchIcon.svg';


export function TopPageDesktop(props) {

    function goHome() {
        if (window.location.href != " ") //if not home page
            props.history.push('/')
    }
    async function search(word) {
        await props.setSearchWord(word)
        props.history.push('/SearchResults/' + word)

    }

    useEffect(() => {
        if ($) {
            $(".searchButton").click(function () {

                $('.searchDiv').removeClass('d-none')
                $('.topPage').addClass('d-none')



            });

            $(".searchClose").click(function () {
                $('.searchDiv').addClass('d-none')
                $('.topPage').removeClass('d-none')

            });
            $("#search-button").click(function () {

                const word = $('.inputOfSearch').val()
                if (word != "") {
                    search(word)
                }
                else {
                    $('.errorSearch').text('הכנס מוצר לחיפוס ')
                    setTimeout(function () {
                        $('.errorSearch').text('')
                    }, 2000);

                }



            });

            $('.inputOfSearch').keypress(function (e) {
                var code = (e.keyCode ? e.keyCode : e.which);
                if (code == 13) {
                    const word = $('.inputOfSearch').val()
                    if (word != "") {
                        search(word)



                    }

                }

            })


        }
    }, [$])
    return (
        <>

            <div style={{
                position: 'sticky',
                top: '0',
                zIndex: 1020,
                height: '100px'

            }}>
                <div className='searchDiv bg-black d-none h-100 d-flex justify-content-center align-items-center'>



                    <div className="input-group align-items-center" style={{ width: 'fit-content' }}>

                        {/* <button id="search-button" type="button" className="btn btn-primary m-0 bg-black border-0 pb-0" style={{ height: 'fit-content' }}     >
                            <i className="fas fa-search"></i>
                        </button> */}
                        <YourSvg className="searchIcon" id="search-button" />
                        <div className="form-outline">
                            <input id="search-input" type="text" id="form1" className=" form-control bg-black text-white inputOfSearch h3 small border-bottom border-2 border-0 rounded-0 pb-0 pt-2 rtl pr-0" placeholder=' הזן/י מוצר לחיפוש...' />
                            {/* <label className="form-label errorSearch  text-white " ></label> */}
                            <p className='errorSearch mb-0 text-muted h6 small'></p>
                        </div>

                    </div>
                    <button id="" type="button" For="form1" className="btn  m-0 border-0 searchClose text-white pl-5" style={{ height: 'fit-content', fontsize: '30px' }}     >
                        <i className="fas fa-times " style={{ fontSize: '32px' }}></i>
                    </button>
                </div>
                <div className='topPage'>
                    <YourSvg className="svgSize searchButton" />
                    <Image onClick={e => goHome()} style={{
                        backgroundImage: `url(${underLogo})`,
                        maxHeight: "80px",
                        position: "absolute",
                        zIndex: 99999,
                        borderRadius: '0px 50px 50px 0px',
                        left: '0px',
                        top: '32px',
                        padding: '12px'
                    }} src={logo} />

                    <Header />
                    <div style={{
                        backgroundColor: 'rgba(0,0,0,0.5)'
                    }}> <Nuv /></div>
                </div>


            </div>






        </>
    );
}
const mapStateToProps = (state) => {
    return {


    };
}

const mapDispatchToProps = (dispatch) => ({
    setSearchWord: (word) => dispatch(actions.setSearchWord(word)),

})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(TopPageDesktop))