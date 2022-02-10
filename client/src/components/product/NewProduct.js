import React, { useEffect, useState } from 'react';
import { Formik, Field, Select } from 'formik';
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
import Form from 'react-bootstrap/Form'




export function NewProduct(props) {
    const [picture, setPicture] = useState(null);
    const [imgData, setImgData] = useState(null);
    const [prices, setPrices] = useState([]);
    // const [names, setNames] = useState([]);
    const [show, setShow] = useState(false);
    // const [checked, setChecked] = useState(true);
    const { categories } = props
    const { amounts } = props
    if (!categories || !categories.length) {

        props.getAllCategories()

    }
    if (!amounts || !amounts.length) {

        props.getAllAmounts()

    }
    // $(".deleteButton").on("click", function () {
    //     $(this).remove()
    // });
    function deleteButton(index) {

        $('#' + index).remove()
    }

    const handleSubmit = async (valuse) => {

        let newProduct = {
            "name": valuse.name,
            "description": valuse.description,
            "categories": valuse.category,
            "available": valuse.available,
            "display": valuse.display,
            "priceList": prices ? prices : [],
        }

        closeForm()

        // console.log('newProduct:::::;' + newProduct.display);
        const product = await props.createProduct(newProduct)
        // alert("added successfully")
    };


    const onChangePicture = e => {
        if (e.target.files[0]) {
            console.log("picture: ", e.target.files);
            setPicture(e.target.files[0]);
            const reader = new FileReader();
            reader.addEventListener("load", () => {
                setImgData(reader.result);
            });
            reader.readAsDataURL(e.target.files[0]);
        }
    };
    function closeForm() {
        $('.NewProduct').addClass("d-none")
        $('.productList').removeClass('col-md-9').addClass('col-md-12')
    }
    function renderNewPrice() {

        let amountName
        return (
            prices.map((price, index) =>

                <div className='text-end dir-rtl' id={index}>
                    {
                        amounts.forEach((element, key) => {
                            if (element._id === price.amount)
                                amountName = element.name
                        })}

                    <lable> כמות:</lable>
                    <lable>  {amountName} </lable>

                    <lable> ,מחיר: </lable>
                    <lable> &#8362;{price.price}</lable>

                    <i class="far fa-window-close  " onClick={e => deleteButton(index)}></i>

                </div >
            )
        )

    }
    const newPrice = () => {
        console.log("new price");
        // let item = $('#newAmount').val()
        // let amount = {
        //     "_id": $('#newAmount').val().amountId,
        //     "name": $('#newAmount').val().amountName
        // }
        let priceList =
        {
            "amount": $('#newAmount').val(),
            "price": $('#newPrice').val()
        }
        console.log(priceList);

        setPrices(prices => [...prices, priceList])
        // prices[prices.length] = priceList
        // document.getElementById('newPrice').value = ""
        // $('#newPrice').val('')

        // setPrices(prices => [...prices, priceList])
        console.log(prices);
        // $('#newAmount').val('')

        // setShow(true);
    };


    useEffect(() => {

        if ($) {
            // $(".saveProduct").on("click", function () {
            //     console.log("save");
            //     $('#newName').val('')
            //     $('#newDescription').val('')
            //     $('#newStatus').val('')

            // });
        }
    }, [props, props.products, props.categories, props.amounts, $]);
    // const { createProduct } = props

    return (
        <>
            <h3 className='px-4 text-end font-weight-bold'>פרטי המוצר:</h3>

            <Formik

                initialValues={{ name: '', description: '', available: false, display: false, category: '', amount: '', price: '' }}
                onSubmit={handleSubmit}
            >
                {() => (
                    <Form className=" px-4 overflow-auto" style={{ height: '590px' }}>

                        <div className='text-end'>
                            <div className="form-group">
                                <lable className="lableForm">שם מוצר:</lable>
                                <Field id="newName" className="form-control rounded-0" type="text" name="name" pl />
                            </div>
                            <div className="form-group">
                                <lable className="lableForm">שם מוצר(HE):</lable>
                                <Field id="newName" className="form-control rounded-0" type="text" name="name" pl />
                            </div>

                            <div className="form-group">
                                <lable className="lableForm">תאור מוצר:</lable>
                                <Field id="newDescription" className="form-control rounded-0" type="text" name="description" />
                            </div>
                            <div className="form-group">
                                <lable className="lableForm">תאור מוצר(HE):</lable>
                                <Field id="newDescription" className="form-control rounded-0" type="text" name="description" />
                            </div>
                            <div className="form-group">
                                <lable className="lableForm">מחיר:</lable>
                                <Field id="newPrice" className="form-control rounded-0" type="text" name="price" />
                            </div>
                            {/* <div className="form-group">
                            <Form.Label class="mb-1 lableForm">קטגוריה:</Form.Label>
                            <Form.Select aria-label="Default select example" className="rounded-0" required>
                                {
                                    categories.map((category) => <option key={category._id} value={category._id}>{category.hebrewName}
                                    </option>)
                                }
                            </Form.Select>
                        </div> */}





                            <div className="form-group">
                                <lable className="lableForm">קטגוריה:</lable>
                                <Field as="select" name="category" className="form-control rounded-0" id="newCategory"
                                    className="browser-default custom-select  rounded-0">
                                    {
                                        categories.map((category) => <option key={category._id} value={category._id}>{category.hebrewName}
                                        </option>)
                                    }
                                </Field>
                            </div>
                            <div className="form-group row d-flex">
                                <div className='col-5 align-items-center  d-flex'>
                                    <Field type="checkbox" name="available" id="newAvailable" className="mt-1" />
                                    <lable className="mr-1 lableForm">חסר במלאי</lable>
                                </div>

                                <div className='col-6 p-0 align-items-center justify-content-center d-flex'>
                                    <Field type="checkbox" name="display" id="newDisplay" className="mt-1" />
                                    <lable className="mr-1 lableForm">הסר תצוגה מהאתר</lable>
                                </div>

                            </div>
                            {/* <br /> */}
                            {/* <div id="amountsAndPrices">
                            <div className="form-group form-row">
                                <div className='col-md-5'>
                                    <lable>Price:</lable>
                                    <Field id="newPrice" className="form-control" type="text" name="price" />
                                </div>
                                <div className='col-md-5'>
                                    <lable>amount:</lable>
                                    <Field id="newAmount" as="select" name="amount" className="form-control"

                                        className="browser-default custom-select">
                                        {
                                            amounts.map((amount) => <option key={amount._id} value={amount._id}>{amount.name}
                                            </option>)
                                        }
                                    </Field>

                                </div>
                                <div className='col-md-2 ' style={{ marginTop: '2%' }}>
                                    <button type='button' onClick={newPrice}>add price</button>
                                </div>

                            </div>
                            {prices.length != 0 ? renderNewPrice() : <React.Fragment />}
                        </div>
                         */}
                            {/* <lable className="mr-1 lableForm ">קטגוריות נוספות</lable>

                            <MultipleSelect list={categories} /> */}
                        </div>
                        <div className="form-group ">
                            <button className="btn  saveProduct  goldButton" type="submit">העלה מוצר</button>
                        </div>
                    </Form>

                )}
            </Formik>
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
export default connect(mapStateToProps, mapDispatchToProps)(NewProduct)