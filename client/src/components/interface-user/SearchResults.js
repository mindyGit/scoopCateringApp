import React, { useEffect } from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import { withRouter } from 'react-router-dom';

import '../../App.css';
import { connect } from 'react-redux';
import Store from '../../redux/store'
import { actions } from '../../redux/actions/action';
import Search from '../Search';
import Nuv from '../mainPage/Nuv'
import Header from '../mainPage/Header'
import Footer from '../mainPage/Footer';
import UnderFooter from '../mainPage/UnderFooter'
import underLogo from '../../data/imges/underLogo.png'
import logo from '../../data/imges/logo.png'

import headerBgImag from '../../data/imges/headerBgImag.png'
import useMediaQuery from "../../hooks/useMediaQuery";
import { Container, Form, FormControl, Nav, Button, NavDropdown, Image, Dropdown, DropdownButton, ButtonGroup } from "react-bootstrap"
import Navbar from 'react-bootstrap/Navbar'
import Offcanvas from 'react-bootstrap/Offcanvas'
import Extras from '../../data/imges/foodCategories/Extras.png'
import fish from '../../data/imges/foodCategories/fish.png'
import salads from '../../data/imges/foodCategories/salads.png'
import shabat from '../../data/imges/foodCategories/shabat.png'
import desserts from '../../data/imges/foodCategories/desserts.png'
import mainCourses from '../../data/imges/foodCategories/mainCourses.png'
import products_ from '../../data/imges/foodCategories/products.png'
import Hamborger from '../mainPage/Hamborger'
import TopPageDesktop from '../mainPage/TopPageDesktop'
import Scroll from '../Scroll';
import SearchList from '../SearchList';
import $ from 'jquery'




export function SearchResults(props) {

    const isMobile = useMediaQuery(768);
    const isTablet = useMediaQuery(1024);



    if (!props.products || !props.products.length) {
        props.getAllProducts()
    }

    const { products } = props
    const { searchWord } = props



    // const searchField = urlArray[urlArray.length - 1]


    const filteredProducts = products && products.filter(

        product => {

            return (
                product
                    .name
                    .toLowerCase()
                    .includes(searchWord.toLowerCase())

            );
        }
    );
    function searchList() {

        return (
            <Scroll>
                <SearchList filteredProducts={filteredProducts} />
            </Scroll>
        );
    }
    useEffect(() => {
        if ($) {

        }
    }, [$])
    return (
        <>
            {/* <Search details={products} /> */}
            <div className="pageNuv">
                {isTablet && (
                    <Hamborger />

                )}

                {!isMobile && !isTablet && (
                    <TopPageDesktop />
                )}
            </div>

            <div className="pageHeader">
                <label > תוצאות חיפוש</label>
                {isTablet ? <img className="h-100 " src={headerBgImag} /> : <img className="h-100 w-100" src={headerBgImag} />}
            </div>


            <div className="pageContent">

                {searchList()}

            </div>
            <button className='bg-black text-white border mb-5 p-2 mt-5'> <i class="fas fa-long-arrow-alt-left  " style={{ height: 'fit-content' }} ></i> לכל המוצרים</button>
            <div className="PageFooter mt-5">
                <Footer />
                <UnderFooter />
            </div>
        </>

    );
}
const mapStateToProps = (state) => {
    return {
        products: state.productReducer.products,
        searchWord: state.searchWordReducer.searchWord
    };
}

const mapDispatchToProps = (dispatch) => ({

    getAllProducts: () => dispatch(actions.getAllProducts()),
    setSearchWord: (word) => dispatch(actions.setSearchWord(word)),
})


export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SearchResults))
