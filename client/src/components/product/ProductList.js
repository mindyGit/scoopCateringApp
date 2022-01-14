
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
// import { withRouter } from 'react-router-dom';
import { actions } from '../../redux/actions/action';
import { Table, Button } from 'react-bootstrap'
import { Formik, Field, Select, Form } from 'formik';
import NewProduct from './NewProduct';
import Scroll from '../Scroll';
import Search from '../Search'
import headerBgImag from '../../data/imges/headerBgImag.png'
import Hamborger from '../mainPage/Hamborger'
import TopPageDesktop from '../mainPage/TopPageDesktop'
import useMediaQuery from "../../hooks/useMediaQuery";
import '../../App.css'
import $ from 'jquery'
import { height } from '@mui/system';
function ProductList(props) {
  const url = window.location.href
  const lastSegment = url.split("/").pop();

  const { products } = props;
  const { categories } = props

  const isMobile = useMediaQuery(768);
  const isTablet = useMediaQuery(1024);
  if (!products || !products.length) {
    props.getAllProducts()
  }
  if (!categories || !categories.length) {

    props.getAllCategories()

  }
  useEffect(() => {






    if ($) { }
  }, [props]);



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

      <div className="pageHeader">
        <label >{lastSegment} <button className='white-arrow h4 p-1 ' onClick={() => props.history.goBack()} ><i class="fas fa-long-arrow-alt-right  pr-2" style={{ height: 'fit-content' }} ></i> </button> </label>
        {isTablet ? <img className="h-100 " src={headerBgImag} /> : <img className="h-100 w-100" src={headerBgImag} />}


      </div>
      <div className='pageContent m-auto w-50 pt-4'>
        <div className='location h6' style={{ right: '50px', position: 'absolute' }}>{lastSegment} /ראשי /חנות</div>
        <button className='goldButton h5 p-2 mt-2' style={{
          left: '250px',
          position: 'absolute'
        }}><i class="fas fa-long-arrow-alt-left  pr-2" style={{ height: 'fit-content' }}></i>לסל הקניות </button>
        <br />
        <br />
        <h3 className='text-end font-weight-bold mb-1'>מנות ראשונות</h3>
        <h6 className='text-end  mb-5'> הוסיפו מוצרים לסל הקניות</h6>
        <div className=' productLine w-100 d-flex row rtl  mb-3  justify-content-around align-items-center pr-1 pl-1 ml-0' style={{ backgroundColor: '#F7F4EF' }}>

          <div className='productName font-weight-bold col-3'> סלומון ברוטוב טריאקי</div>
          <div className='amountOption col-2 pb-1 pt-1' style={{ fontSize: '12px', width: 'fit-content' }}>
            <div >בחר אפשרות:</div>
            <select class="form-select form-select-x-sm rtl pb-0 pt-0 border-0 rounded-0" aria-label=".form-select-sm example " style={{ width: 'fit-content', fontSize: '12px' }}>
              <option selected> 1 יחידה</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <div className='col-1 goldColor p-0' style={{ width: 'fit-content' }}>|</div>
          <div className='price col-1 goldColor p-0' style={{ width: 'fit-content' }}>14.90 </div>
          <div className='amountToBuy col-3 goldColor d-flex     align-items-center' style={{ width: 'fit-content' }}>+<div className='border text-black bg-white pt-0 pb-0 pl-1 pr-1 m-1' style={{ fontSize: '15px' }}>3</div>-</div>
          <div className='addToCart col-2 bg-black text-white' style={{ height: 'fit-content' }}>הוספה לסל</div>

        </div>


        <div className=' productLine w-100 d-flex row rtl  mb-3  justify-content-around align-items-center pr-1 pl-1 ml-0' style={{ backgroundColor: '#F7F4EF' }}>

          <div className='productName font-weight-bold col-3'> סלומון ברוטוב טריאקי</div>
          <div className='amountOption col-2 pb-1 pt-1' style={{ fontSize: '12px', width: 'fit-content' }}>
            <div >בחר אפשרות:</div>
            <select class="form-select form-select-x-sm rtl pb-0 pt-0 border-0 rounded-0" aria-label=".form-select-sm example" style={{ width: 'fit-content', fontSize: '12px' }}>
              <option selected> 1 יחידה</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <div className='col-1 goldColor p-0' style={{ width: 'fit-content' }}>|</div>
          <div className='price col-1 goldColor p-0' style={{ width: 'fit-content' }}>14.90 </div>
          <div className='amountToBuy col-3 goldColor d-flex     align-items-center' style={{ width: 'fit-content' }}>+<div className='border text-black bg-white pt-0 pb-0 pl-1 pr-1 m-1' style={{ fontSize: '15px' }}>3</div>-</div>
          <div className='addToCart col-2 bg-black text-white' style={{ height: 'fit-content' }}>הוספה לסל</div>

        </div>

        <div className=' productLine w-100 d-flex row rtl  mb-3  justify-content-around align-items-center pr-1 pl-1 ml-0' style={{ backgroundColor: '#F7F4EF' }}>

          <div className='productName font-weight-bold col-3'> סלומון ברוטוב טריאקי</div>
          <div className='amountOption col-2 pb-1 pt-1' style={{ fontSize: '12px', width: 'fit-content' }}>
            <div >בחר אפשרות:</div>
            <select class="form-select form-select-x-sm rtl pb-0 pt-0 border-0 rounded-0" aria-label=".form-select-sm example " style={{ width: 'fit-content', fontSize: '12px' }}>
              <option selected> 1 יחידה</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <div className='col-1 goldColor p-0' style={{ width: 'fit-content' }}>|</div>
          <div className='price col-1 goldColor p-0' style={{ width: 'fit-content' }}>14.90 </div>
          <div className='amountToBuy col-3 goldColor d-flex     align-items-center' style={{ width: 'fit-content' }}>+<div className='border text-black bg-white pt-0 pb-0 pl-1 pr-1 m-1' style={{ fontSize: '15px' }}>3</div>-</div>
          <div className='addToCart col-2 bg-black text-white' style={{ height: 'fit-content' }}>הוספה לסל</div>

        </div>


        <div className=' productLine w-100 d-flex row rtl    justify-content-around align-items-center pr-1 pl-1 ml-0' style={{ backgroundColor: '#F7F4EF' }}>

          <div className='productName font-weight-bold col-3'> סלומון ברוטוב טריאקי</div>
          <div className='amountOption col-2 pb-1 pt-1' style={{ fontSize: '12px', width: 'fit-content' }}>
            <div >בחר אפשרות:</div>
            <select class="form-select form-select-x-sm rtl pb-0 pt-0 border-0 rounded-0" aria-label=".form-select-sm example" style={{ width: 'fit-content', fontSize: '12px' }}>
              <option selected> 1 יחידה</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <div className='col-1 goldColor p-0' style={{ width: 'fit-content' }}>|</div>
          <div className='price col-1 goldColor p-0' style={{ width: 'fit-content' }}>14.90 </div>
          <div className='amountToBuy col-3 goldColor d-flex     align-items-center' style={{ width: 'fit-content' }}>+<div className='border text-black bg-white pt-0 pb-0 pl-1 pr-1 m-1' style={{ fontSize: '15px' }}>3</div>-</div>
          <div className='addToCart col-2 bg-black text-white' style={{ height: 'fit-content' }}>הוספה לסל</div>

        </div>



      </div>
    </>
  )
}
const mapStateToProps = (state) => {
  return {
    products: state.productReducer.products,
    categories: state.categoryReducer.categories,
  };
}
const mapDispatchToProps = (dispatch) => ({
  getAllProducts: () => dispatch(actions.getAllProducts()),
  getAllCategories: () => dispatch(actions.getAllCategories()),
})
export default connect(mapStateToProps, mapDispatchToProps)(ProductList)
// export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ProductList))