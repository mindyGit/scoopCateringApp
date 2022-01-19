import React, { useEffect } from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import { withRouter } from 'react-router-dom';
import '../../App.css';
import { connect } from 'react-redux';
import Store from '../../redux/store'
import { actions } from '../../redux/actions/action';

import Footer from '../mainPage/Footer';
import UnderFooter from '../mainPage/UnderFooter'


import headerBgImag from '../../data/imges/headerBgImag.png'
import useMediaQuery from "../../hooks/useMediaQuery";
import { Container, Form, FormControl, Nav, Button, NavDropdown, Image, Dropdown, DropdownButton, ButtonGroup } from "react-bootstrap"

import Hamborger from '../mainPage/Hamborger'
import TopPageDesktop from '../mainPage/TopPageDesktop'

import $ from 'jquery'




export function Kashrut(props) {

    const isMobile = useMediaQuery(768);
    const isTablet = useMediaQuery(1024);

    useEffect(() => {
        if ($) {

        }
    }, [$])
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

            <div className="pageHeader ">
                <label >כשרות </label>
                {isTablet ? <img className="h-100 " src={headerBgImag} /> : <img className="h-100 w-100" src={headerBgImag} />}
            </div>


            <div className="pageContent pt-3">
                <div className='location ' style={{ right: '50px', position: 'absolute' }}>
                    <div className='d-inline' onClick={() => props.history.push('/')}>ראשי</div>   /
                    <div className='d-inline'>סקופ קייטרינג  </div>
                    <div className='goldColor d-inline'> /כשרות  </div>
                </div>


            </div>

            <div className="PageFooter mt-5">
                <Footer />
                <UnderFooter />
            </div>
        </>

    );
}
const mapStateToProps = (state) => {
    return {

    };
}

const mapDispatchToProps = (dispatch) => ({


})


export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Kashrut))
