import React, { useEffect, useState } from 'react';
import { Formik, Field, Select, Form } from 'formik';
import { connect } from 'react-redux';
import { actions } from '../../redux/actions/action';
import MultipleSelect from '../MultipleSelect';
// import { Form } from 'react-bootstrap';
import '../../App.css'
import $ from 'jquery'
import { Checkbox } from '@mui/material';
import Login from '../Firebase/Login';
import { values } from 'lodash';
import { display } from '@mui/system';


import { useTranslation } from 'react-i18next';
import i18 from '../../i18/i18';


export function ManagerInterface(props) {

    const { t, i18n } = useTranslation();


    useEffect(() => {

        if ($) {
            // $(".inputOf_Search").focus()
        }
    }, [props, props.products, props.categories, props.amounts, $]);


    return (
        <>
            <div className='container p-5'>
                <h1>ממשק מנהל</h1>
                <div className='row rtl '>
                    <div className='col-md-7 p-3' style={{ backgroundColor: '#E5E5E5' }}>
                        <div className='row titles justify-content-between mb-5'>
                            <div className='col-6  text-end' >מוצרים: 120 מוצרים</div>
                            <div className='col-6 text-start' >
                                <input placeholder='חפש מוצר' className='inputOf_Search bg-transparent border-0 border-bottom border-dark' />
                            </div>

                        </div>


                    </div>
                    <div className='col-md-1 p-0'></div>

                    <div className='col-md-4 px-0' style={{ backgroundColor: '#E5E5E5' }}></div>
                </div>
            </div>

        </>

    );
}
const mapStateToProps = (state) => {
    return {
        products: state.productReducer.products,
        categories: state.categoryReducer.categories,
        amounts: state.amountReducer.amounts,
    };
}

const mapDispatchToProps = (dispatch) => ({
    createProduct: (product) => dispatch(actions.createProduct(product)),
    getAllCategories: () => dispatch(actions.getAllCategories()),
    getAllAmounts: () => dispatch(actions.getAllAmounts()),
})
export default connect(mapStateToProps, mapDispatchToProps)(ManagerInterface)