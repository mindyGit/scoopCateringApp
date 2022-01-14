
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
// import { withRouter } from 'react-router-dom';
import { actions } from '../../redux/actions/action';
import { Table, Button } from 'react-bootstrap'
import { Formik, Field, Select, Form } from 'formik';
import NewProduct from './NewProduct';
import Scroll from '../Scroll';
import Search from '../Search'
// import BootstrapTable from 'react-bootstrap-table-next';
// omit...
import '../../App.css'
import $ from 'jquery'
function ProductList_manager(props) {
  const { products } = props;
  const { categories } = props
  const [data, setData] = useState([]);
  const [sortType, setSortType] = useState('name');
  // const [isLoaded, setIsLoaded] = useState(false);
  // const [error, setError] = useState(null);
  if (!props.products || !props.products.length) {
    props.getAllProducts()
  }
  if (!categories || !categories.length) {

    props.getAllCategories()

  }
  useEffect(() => {
    console.log(sortType);
    console.log(products);
    const sortArray = type => {

      const types = {
        name: 'name',
        description: 'description',
        available: 'available',
      };
      const sortProperty = types[type];

      const sorted = [...products].sort((a, b) => {
        var regex = /^[a-zA-Z]+$/;
        if ([sortProperty] != "" && [sortProperty] != undefined) {

          debugger
          if (a[sortProperty] === true || b[sortProperty] === true || b[sortProperty] === false || a[sortProperty] === false) {
            return a[sortProperty] - b[sortProperty];
          }

          else
            // if (a[sortProperty] != "" && a[sortProperty] != undefined && b[sortProperty] != "" && b[sortProperty] != undefined)
            if (sortProperty.match(regex)) {
              console.log(sortProperty);
              return a[sortProperty].localeCompare(b[sortProperty]);
            }
            else {

              return b[sortProperty] - a[sortProperty];
            }
        }

      });
      setData(sorted);
    };

    sortArray(sortType);

    if ($) {


      $(".clearButton").on("click", function () {


        $(this).siblings().val('')
        $(this).addClass('d-none')

      });


      $(".itemInput").on("input", function () {

        $(this).siblings().removeClass('d-none')

        if ($(this).val() == "") {
          $(this).siblings().addClass('d-none')
        }
      });
    }
  }, [sortType, props]);
  // }, []);





  function editItem(id) {


    openForm()
    $("#" + id + " td input").prop('disabled', false);
    $("#" + id + " td select").prop('disabled', false);
    $("#" + id + " td input").addClass('border-bottom')
    $("#" + id + " td select").addClass('border-bottom')
    $("#" + id + " .saveButton").removeClass('d-none')
    $("#" + id + " .editButton").addClass('d-none')

    //fill inputs to edit
    $('#newName').val($('#' + id + ' td #name').attr('placeholder'))
    $('#newDescription').val($('#' + id + ' td #description').attr('placeholder'))
    $('#newAvailable').val($('#' + id + ' td #available').val())
    $('#newAvailable').prop('checked', $('#' + id + ' td #available').val() === 'true' ? true : false);
    document.getElementById('newCategory').value = $('#' + id + ' td #categories').val()
  }
  function saveItem(id) {
    $("#" + id + " td input").prop('disabled', true);
    $("#" + id + " td select").prop('disabled', true);
    $("#" + id + " td input").removeClass('border-bottom')
    $("#" + id + " td select").removeClass('border-bottom')
    $("#" + id + " .saveButton").addClass('d-none')
    $("#" + id + " .editButton").removeClass('d-none')
    $("#" + id + " .clearButton").addClass('d-none')

    let product = {
      "_id": id,
      "name": $('#' + id + ' td #name').val() != "" ? $('#' + id + ' td #name').val() : $('#' + id + ' td #name').attr('placeholder'),
      "description": $('#' + id + 'td #description').val() != "" ? $('#' + id + ' td #description').val() : $('#' + id + ' td #description').attr('placeholder'),
      // "img":$('#' + id + ' td #description').val(),
      "available": $('#' + id + ' td #available').val() != "" ? $('#' + id + ' td #available').val() : $('#' + id + ' td #available').attr('placeholder'),
      "categories": $('#' + id + ' td #categories').val() != "" ? $('#' + id + ' td #categories').val() : $('#' + id + ' td #categories').attr('placeholder')
    }
    console.log(product);
    props.updateProduct(product)

  }
  function copyItem(id) {
    props.copyProduct(id)
    // let myTable = $('#tableBody').DataTable()
    // console.log(myTable);
    // $('#tableBody').DataTable().ajax.reload();
    // editItem(id)

  }
  function deleteItem(id) {
    debugger
    console.log("toDelete: " + id);
    props.deleteProduct(id)
  }
  function openForm() {
    if ($('.NewProduct').hasClass("d-none")) {
      $('.NewProduct').removeClass("d-none")
      $('.productList').removeClass('col-md-12').addClass('col-md-9')
    }
    // else {
    //   $('.NewProduct').addClass("d-none")
    //   $('.productList').removeClass('col-md-9').addClass('col-md-12')
    // }

    // $('.NewProduct').toggleClass("d-none")
    // $('.productList').toggleClass('col-md-9', 'col-md-12')

    // $('.productList').addClass('d-none')


  }





  const firstLine = Array.isArray(products) && products.length ? products[0] : {};
  const headers = Object.keys(firstLine);
  // if (error) {
  //   return <div>Error: {error.message}</div>;
  // } else if (!isLoaded) {
  //   return <div>Loading...</div>;
  // } else {
  return (

    <div className='row d-flex justify-content-between'>
      <Search details={products} />
      <div className='col-md-3 border NewProduct d-none' ><NewProduct /></div>

      <div className='col-md-12 productList'  >
        <button onClick={e => openForm()}>adddddd</button>

        <Table bordered hover size="sm" >
          <thead>
            <tr key={"header"}>
              {headers.filter(key =>
                key != "_id" && key != "__v" && key != "display").map((key) => (
                  <th value={key} id={key} onClick={e => setSortType(e.target.id)}>{key}</th>
                ))}
            </tr>
          </thead>



          <tbody id="tableBody" >
            {data && data.filter(item =>
              item.display != false).map((item) => (
                <tr key={item._id} id={item._id}>

                  {Object.keys(item).filter(key =>
                    key != "_id" && key != "__v" && key != "display").map((key, val) => (
                      <td>
                        <i class="far fa-window-close clearButton d-none" id={item._id}></i>
                        {key === "available" && item[key] === true ? <select id={key} className="mt-3 border-0 border-dark text-dark bg-transparent" disabled="true" >

                          <option value="true">במלאי</option>

                          <option value="false">אזל מהמלאי</option>
                        </select> :
                          key === "available" && item[key] === false ? <select id={key} className="mt-3 border-0 border-dark text-dark bg-transparent" disabled="true" >
                            <option value="false">אזל מהמלאי</option>
                            <option value="true">במלאי</option>
                          </select> :
                            key === "categories" ?
                              <select id={key} className="mt-3 border-0 border-dark text-dark bg-transparent" disabled="true" >

                                {
                                  categories.map((category) => category._id === item[key]._id ? <option key={category._id} value={category._id} selected>{category.name}
                                  </option> : <option key={category._id} value={category._id}>{category.name}
                                  </option>)
                                }
                              </select>
                              : <input className="border-0 border-dark text-dark bg-transparent customPlacholderInList text-center itemInput" id={key} type="text" placeholder={item[key]} disabled="true" />
                        }
                      </td>
                    ))}
                  <td className="editButton"><Button id={item._id} type="button" onClick={(e) => editItem(e.target.id)}>edit</Button></td>
                  <td className="d-none  saveButton"><Button className="btn btn-warning" id={item._id} type="button" onClick={(e) => saveItem(e.target.id)}>save</Button></td>
                  <td><Button id={item._id} className="btn btn-success" type="button" onClick={(e) => copyItem(e.target.id)} > copy</Button></td>
                  <td><Button id={item._id} className="btn btn-danger" type="button" onClick={(e) => deleteItem(e.target.id)} > delete</Button></td>
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

    products: state.productReducer.products,
    categories: state.categoryReducer.categories,
  };
}
const mapDispatchToProps = (dispatch) => ({
  getAllProducts: () => dispatch(actions.getAllProducts()),
  // createProduct: (product) => dispatch(actions.createProduct(product)),
  deleteProduct: (id) => dispatch(actions.deleteProduct(id)),
  updateProduct: (product) => dispatch(actions.updateProduct(product)),
  copyProduct: (id) => dispatch(actions.copyProduct(id)),
  getAllCategories: () => dispatch(actions.getAllCategories()),
})
export default connect(mapStateToProps, mapDispatchToProps)(ProductList_manager)
// export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ProductList))