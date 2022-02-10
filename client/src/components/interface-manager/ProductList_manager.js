
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
// import { withRouter } from 'react-router-dom';
import { actions } from '../../redux/actions/action';
import { Table, Button } from 'react-bootstrap'
// import { Formik, Field, Select, Form } from 'formik';
import Form from 'react-bootstrap/Form'
import NewProduct from '../product/NewProduct';
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
  const [sortType, setSortType] = useState('hebrewName');
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
        hebrewName: 'hebrewName',
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

  const changeCategory = async (event) => {

    let categoryId = event.target.value
    let list = await data.filter(x => {
      return x.categoryID._id == categoryId;
    })
    console.log("list:::::::::::" + list)

  }



  function editItem(id) {


    openForm()


    //fill inputs to edit
    $('#newName').val($('#' + id + ' td #name').attr('placeholder'))
    $('#newDescription').val($('#' + id + ' td #description').attr('placeholder'))
    $('#newAvailable').val($('#' + id + ' td #available').val())
    $('#newAvailable').prop('checked', $('#' + id + ' td #available').val() === 'true' ? true : false);
    document.getElementById('newCategory').value = $('#' + id + ' td #categories').val()
  }
  function saveItem(id) {
    // $("#" + id + " td input").prop('disabled', true);
    // $("#" + id + " td select").prop('disabled', true);
    // $("#" + id + " td input").removeClass('border-bottom')
    // $("#" + id + " td select").removeClass('border-bottom')
    // $("#" + id + " .saveButton").addClass('d-none')
    // $("#" + id + " .editButton").removeClass('d-none')
    // $("#" + id + " .clearButton").addClass('d-none')

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

  }





  const firstLine = Array.isArray(products) && products.length ? products[0] : {};
  const headers = Object.keys(firstLine);

  return (
    <div className='container p-5 pt-3 pb-0'>
      <h1>ממשק מנהל</h1>
      <div className='row  rtl mt-4' style={{ height: '800px !important' }}>
        {/* <Search details={products} /> */}


        <div className=' productList col-md-7 p-3 bg-light'  >
          {/* <button onClick={e => openForm()}>adddddd</button> */}
          <div className='row titles justify-content-between mb-5'>
            <div className='col-6  text-end'>מוצרים: {products && products.length} מוצרים</div>
            <div className='col-6 text-start row d-flex'>
              <div className='col-6'>
                {/* <Form.Label class="mb-1 lableForm"></Form.Label> */}
                <Form.Select aria-label="Default select example" className="rounded-0 w-fitCon py-1" required onChange={(e) => changeCategory(e)}>
                  <option>בחר קטגוריה</option>
                  {
                    categories.map((category) => <option key={category._id} value={category._id}>{category.hebrewName}
                    </option>)
                  }
                </Form.Select>
              </div>
              <div className='col-6'>
                <input placeholder='חפש מוצר' className=' inputOf_Search bg-transparent border-0 border-bottom border-dark' />
              </div>

            </div>

          </div>
          <Table className='border-none' size="sm" >
            {/* <thead > */}
            <div className='row m-auto mb-3' key={"header"}>
              <div className='col-2 lableForm' value='hebrewName' id='hebrewName' onClick={e => setSortType('hebrewName')}>שם מוצר</div>
              <div className='col-2 lableForm' value="price" id="price" onClick={e => setSortType("price")}>מחיר</div>
              <div className='col-2 lableForm' value="available" id="available" onClick={e => setSortType("available")}>מלאי</div>
              <div className='col-3 lableForm' value="createDate" id="createDate" onClick={e => setSortType("createDate")}>עדכון אחרון</div>
              <div className='col-3'></div>

            </div>
            {/* </thead> */}

            <div className="overflow-auto border-0" style={{ height: '480px' }}>

              <tbody id="tableBody" >
                {data && data.map((item) => (
                  <tr className='row m-auto bg-white mb-3' key={item._id} id={item._id}>

                    <td className='col-2'>{item.hebrewName}</td>
                    <td className='col-2'>{item.price}</td>
                    <td className='col-2'>{item.available === true ? "במלאי" : "אזל מהמלאי"}</td>
                    <td className='col-3'>{item.createDate}</td>
                    <div className='col-3 d-flex '>
                      <td className='col-3 p-0' onClick={() => deleteItem(item._id)}><i class="fas fa-trash-alt "></i></td>
                      <td className=' p-0'>|</td>
                      <td className='col-3 p-0' onClick={() => editItem(item._id)}>edit</td>
                      <td className=' p-0'>|</td>
                      <td className='col-3 p-0' onClick={() => copyItem(item._id)}>copy</td>
                    </div>

                  </tr>
                ))
                }
              </tbody>


            </div>

          </Table >




        </div >
        <div className='col-md-1 p-0'></div>
        <div className='col-md-4  NewProduct  p-3 pb-0 bg-light' ><NewProduct /></div>
      </div>
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