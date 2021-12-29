
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { actions } from '../../redux/actions/action';
import { Table, Button } from 'react-bootstrap'
import { Formik, Field, Select, Form } from 'formik';

import Scroll from '../Scroll';

import '../../App.css'
import $ from 'jquery'
function OrderSummary(props) {
    const { productsOnOrder } = props;
    const [data, setData] = useState([]);
    const [sortType, setSortType] = useState('productId');
    if (!props.productsOnOrder || !props.productsOnOrder.length) {
        props.getAllProductsOnOrder()
    }

    useEffect(() => {
        console.log(productsOnOrder);
        const sortArray = type => {


            const types = {
                productId: 'productId',
                amount: 'amount',

            };
            const sortProperty = types[type];
            const sorted = [...productsOnOrder].sort((a, b) => {
                var regex = /^[a-zA-Z]+$/;
                if ([sortProperty] != "" && [sortProperty] != undefined) {
                    console.log("::" + a[sortProperty] + b[sortProperty]);
                    debugger



                    if (sortProperty == "productId") {
                        return a[sortProperty].name.localeCompare(b[sortProperty].name);
                    }
                    else {

                        return b[sortProperty] - a[sortProperty];
                    }

                }
            });
            setData(sorted);
        };

        sortArray(sortType);

        if ($) { }



    }, [sortType, props]);










    const firstLine = Array.isArray(productsOnOrder) && productsOnOrder.length ? productsOnOrder[0] : {};
    const headers = Object.keys(firstLine);
    // if (error) {
    //   return <div>Error: {error.message}</div>;
    // } else if (!isLoaded) {
    //   return <div>Loading...</div>;
    // } else {
    return (

        <div className=''>
            <div className='m-3'> סיכום הזמנות</div>
            {/* <div className='col-md-3 border NewProduct d-none' ><NewProduct /></div> */}

            <div className='col-md-12 productList'  >
                {/* <button onClick={e => newItem()}>add</button> */}

                <Table bordered hover size="sm" >
                    <thead>
                        <tr key={"header"}>
                            {headers.filter(key =>
                                key != "_id" && key != "__v").map((key) => (
                                    <th value={key} id={key} onClick={e => setSortType(e.target.id)}>{key === "productId" ? "מוצר" : "כמות"}</th>
                                ))}
                        </tr>
                    </thead>



                    <tbody id="tableBody" >
                        {data && data.map((item) => (
                            <tr key={item._id} id={item._id}>

                                {Object.keys(item).filter(key =>
                                    key != "_id" && key != "__v").map((key, val) => (
                                        <td>
                                            <i class="far fa-window-close clearButton d-none" id={item._id}></i>
                                            {key === "productId" ? <input className="border-0 border-dark text-dark bg-transparent customPlacholderInList text-center itemInput" id={key} type="text" placeholder={item[key].name} disabled="true" /> :
                                                <input className="border-0 border-dark text-dark bg-transparent customPlacholderInList text-center itemInput" id={key} type="text" placeholder={item[key]} disabled="true" />
                                            }
                                        </td>
                                    ))}
                                {/* <td className="editButton"><Button id={item._id} type="button" onClick={(e) => editItem(e.target.id)}>edit</Button></td>
                                <td className="d-none  saveButton"><Button className="btn btn-warning" id={item._id} type="button" onClick={(e) => saveItem(e.target.id)}>save</Button></td>
                                <td><Button id={item._id} className="btn btn-success" type="button" onClick={(e) => copyItem(e.target.id)} > copy</Button></td>
                                <td><Button id={item._id} className="btn btn-danger" type="button" onClick={(e) => deleteItem(e.target.id)} > delete</Button></td> */}
                            </tr>
                        ))
                        }
                    </tbody>




                </Table >

            </div >


        </div>
    )
    // }
}
const mapStateToProps = (state) => {
    return {

        productsOnOrder: state.productsOnOrderReducer.productsOnOrder,
    };
}
const mapDispatchToProps = (dispatch) => ({
    getAllProductsOnOrder: () => dispatch(actions.getAllProductsOnOrder()),
    // createProduct: (product) => dispatch(actions.createProduct(product)),
    // deleteProduct: (id) => dispatch(actions.deleteProduct(id)),
    // updateProduct: (product) => dispatch(actions.updateProduct(product)),
    // copyProduct: (id) => dispatch(actions.copyProduct(id)),
})
export default connect(mapStateToProps, mapDispatchToProps)(OrderSummary)
