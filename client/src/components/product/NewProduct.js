import React, { useEffect, useState } from 'react';
import { Formik, Field, Select, Form } from 'formik';
import { connect } from 'react-redux';
import { actions } from '../../redux/actions/action';
// import { Form } from 'react-bootstrap';
import '../../App.css'
import $ from 'jquery'
import { Checkbox } from '@mui/material';
import Login from '../Firebase/Login';
import { values } from 'lodash';
import { display } from '@mui/system';
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
        <Formik

            initialValues={{ name: '', description: '', available: false, display: true, category: '', amount: '', price: '' }}
            onSubmit={handleSubmit}
        >
            {() => (
                <Form className="" >
                    product details:
                    <div className="register_profile_image ">
                        <label for="profilePic">
                            Picture
                            {/* <i class="fas fa-file-upload"></i> */}
                            <div className="previewProfilePic" style={{ width: '100px', height: '100px' }}>
                                <img src={imgData} style={{ width: '100%', height: '100%' }} />
                            </div>
                            <input type="file" id="profilePic" style={{ display: 'none' }} onChange={onChangePicture} />
                        </label>

                        {/* <input id="profilePic" type="file" onChange={onChangePicture} /> */}
                    </div>
                    {/* <div className="previewProfilePic">
                        <img className="playerProfilePic_home_tile w-25 h-25" src={imgData} />
                    </div> */}
                    <div className="form-group">
                        <lable>Name:</lable>
                        <Field id="newName" className="form-control" type="text" name="name" pl />
                    </div>
                    {/* <Form.Label>Range</Form.Label>
                    <Form.Range /> */}
                    <div className="form-group">
                        <lable>Description:</lable>
                        <Field id="newDescription" className="form-control" type="text" name="description" />
                    </div>
                    {/* <div className="form-group">
                        <lable>available:</lable>
                        <Field id="newAvailable" className="form-control" type="text" name="available" />
                    </div> */}
                    <div className="form-group">
                        <lable>Category:</lable>
                        <Field as="select" name="category" className="form-control" id="newCategory"
                            className="browser-default custom-select">
                            {
                                categories.map((category) => <option key={category._id} value={category._id}>{category.name}
                                </option>)
                            }
                        </Field>
                    </div>
                    <lable>Available:</lable>
                    <Field type="checkbox" name="available" id="newAvailable" /><br />
                    <lable>Display:</lable>
                    <Field type="checkbox" name="display" id="newDisplay" />
                    <div id="amountsAndPrices">
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
                    {/* <Checkbox
                        name="active"
                        checked={checked}
                        onChange={handleChange}
                        inputProps={{ 'aria-label': 'controlled' }}
                    /> */}

                    <div className="form-group">
                        <button className="btn btn-primary saveProduct" type="submit">Create Product</button>
                    </div>
                </Form>

            )}
        </Formik>

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