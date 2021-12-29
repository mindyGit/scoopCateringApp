import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import '../../App.css';
import { connect } from 'react-redux';
import Store from '../../redux/store'

import { actions } from '../../redux/actions/action';
import Search from '../Search';



export function Menu(props) {

    const products = Store.getState().productReducer.products

    return (
        <Search details={products} />

    );
}
const mapStateToProps = (state) => {
    return {

    };
}

const mapDispatchToProps = (dispatch) => ({


})
export default connect(mapStateToProps, mapDispatchToProps)(Menu);
