import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
// import { withRouter } from 'react-router-dom';
import { actions } from '../../redux/actions/action';
import { Table, Button } from 'react-bootstrap'
import { Formik, Field, Select, Form } from 'formik';
import NewProduct from './NewProduct';
import Scroll from '../Scroll';
// import Search from '../Search'
import headerBgImag from '../../data/imges/headerBgImag.png'
import Hamborger from '../mainPage/Hamborger'
import TopPageDesktop from '../mainPage/TopPageDesktop'
import useMediaQuery from "../../hooks/useMediaQuery";
import Cart from '../../data/imges/cart.png'
import '../../App.css'
import $ from 'jquery'
import { height } from '@mui/system';
import i18 from '../../i18/i18';
import { useTranslation } from 'react-i18next';
function ProductList(props) {
  const url = window.location.href

  const [cart, setCart] = useLocalStorage("cart", []);
  const lastSegment = decodeURI(url.split("/").pop().toString());
  const { language } = props
  const { products } = props;
  const { categories } = props
  const { t, i18n } = useTranslation();

  const isMobile = useMediaQuery(768);
  const isTablet = useMediaQuery(1024);
  if (!products || !products.length) {
    props.getAllProducts()
  }
  if (!categories || !categories.length) {

    props.getAllCategories()

  }
  function useLocalStorage(key, initialValue) {
    // State to store our value
    // Pass initial state function to useState so logic is only executed once
    const [storedValue, setStoredValue] = useState(() => {
      try {
        // Get from local storage by key
        const item = window.localStorage.getItem(key);
        // Parse stored json or if none return initialValue
        return item ? JSON.parse(item) : initialValue;
      } catch (error) {
        // If error also return initialValue
        console.log(error);
        return initialValue;
      }
    });
    // Return a wrapped version of useState's setter function that ...
    // ... persists the new value to localStorage.
    const setValue = (value) => {
      try {
        // Allow value to be a function so we have same API as useState
        const valueToStore =
          value instanceof Function ? value(storedValue) : value;
        // Save state
        setStoredValue(valueToStore);
        // Save to local storage
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      } catch (error) {
        // A more advanced implementation would handle the error case
        console.log(error);
      }
    };
    return [storedValue, setValue];
  }



  function AddToCart(id) {
    debugger
    let newItem = {
      Id: id,
      Amount: $('#' + id + ' ' + '.amountToBuy' + ' ' + 'input').val()
    }
    let shoppingCart = cart
    shoppingCart.push(newItem)
    setCart(shoppingCart)
  }


  useEffect(() => {
    if ($) {
      $('.minus').click(function () {
        debugger
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
      });
      $('.plus').click(function () {
        debugger
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
      });



    }
  }, [$, props, language]);



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
      <div className='location  pt-3 text-end px-5'>

        <div className='d-inline' onClick={() => props.history.push('/')}>{i18.t('ScoopCatering')}</div>   /
        <div className='d-inline' onClick={() => props.history.push('/shop')}>{i18.t('shabatMenu')} </div>
        <div className='goldColor d-inline'>/{lastSegment} </div>

      </div>
      <div className='pageContent swithSide m-auto w-50 pt-4 pb-5'>

        <button className='goldButton h5 p-2 mt-2' style={{
          left: '250px',
          position: 'absolute'
        }} onClick={() => props.history.push('/Cart')}><i class="fas fa-long-arrow-alt-left  pr-2" style={{ height: 'fit-content' }}></i>{i18.t('ToTheShoppingCart')} </button>
        <br />
        <br />
        <h3 className=' font-weight-bold mb-1'>{lastSegment}</h3>
        <h6 className='  mb-5'> {i18.t('addProductsLable')}</h6>



        {categories && categories.filter(category =>
          category.name == lastSegment || category.hebrewName == lastSegment).map((category) => (
            Object.keys(category).filter(key => key == "products").map((key, val) => (
              category[key].map(product =>

                <div className=' productLine w-100 d-flex row   mb-4  justify-content-around align-items-center pr-1 pl-1 ml-0 pb-1 pt-1' id={product._id}>

                  <div className='productName font-weight-bold  col-4'> {language == "he" ? product.hebrewName : product.name} </div>
                  <div className='amountOption font-weight-bold col-2 pb-1 pt-1 pl-0' style={{ fontSize: '12px', width: 'fit-content' }}>
                    <div > {i18.t('SelectAnOption')}:</div>
                    <select class="form-select form-select-x-sm rtl pb-0 pt-0 border-0 rounded-0 font-weight-bold" aria-label=".form-select-sm example" style={{ width: 'fit-content', fontSize: '12px' }}>
                      {/* <option selected> 1 יחידה</option> */}
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>
                  <div className='col-1 goldColor p-0' style={{ width: 'fit-content' }}>|</div>
                  <div className='price font-weight-bold col-1 goldColor p-0' style={{ width: 'fit-content' }}>14.90 &#8362; </div>

                  <div className='amountToBuy col-3 goldColor d-flex   p-0  align-items-center' style={{ width: 'fit-content' }}>
                    <span class="plus">+</span>
                    <input type="text" value='1' className='border text-black bg-white pt-0 pb-0 pl-2 pr-2 m-1 input_number' style={{ fontSize: '13px' }} />
                    <span class="minus">-</span>
                  </div>

                  <div onClick={() => AddToCart(product._id)} className='addToCart col-3 bg-black text-white align-items-center d-flex h6 pb-1 pt-1 mb-0' style={{ height: 'fit-content', width: 'fit-content' }}>{i18.t('addToCart')}
                    <div className='mr-2'></div>
                    <img style={{
                      height: '17px',

                    }} src={Cart} />
                  </div>
                </div>




              )

            ))
          ))}





        <h4 className=' font-weight-bold mb-4 mt-5'>?אולי תרצה גם</h4>
        <div className=' productLine w-100 d-flex row   mb-4  justify-content-around align-items-center pr-1 pl-1 ml-0 pb-1 pt-1' >

          <div className='productName font-weight-bold  col-4'>   תבנית חד"פ</div>
          <div className='amountOption font-weight-bold col-2 pb-1 pt-1 pl-0' style={{ fontSize: '12px', width: 'fit-content' }}>
            <div >{i18.t('SelectAnOption')}:</div>
            <select class="form-select form-select-x-sm rtl pb-0 pt-0 border-0 rounded-0 font-weight-bold" aria-label=".form-select-sm example" style={{ width: 'fit-content', fontSize: '12px' }}>
              <option selected> גדול </option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <div className='col-1 goldColor p-0' style={{ width: 'fit-content' }}>|</div>
          <div className='price font-weight-bold col-1 goldColor p-0' style={{ width: 'fit-content' }}>14.90 &#8362; </div>
          <div className='amountToBuy col-3 goldColor d-flex   p-0  align-items-center' style={{ width: 'fit-content' }}>+<div className='border text-black bg-white pt-0 pb-0 pl-2 pr-2 m-1' style={{ fontSize: '13px' }}>1</div>-</div>
          <div className='addToCart col-3 bg-black text-white align-items-center d-flex h6 pb-1 pt-1 mb-0' style={{ height: 'fit-content', width: 'fit-content' }}>{i18.t('addToCart')}
            <div className=' mr-2'></div>
            <img style={{
              height: '17px',

            }} src={Cart} /></div>

        </div>

        <div className=' productLine w-100 d-flex row   mb-4  justify-content-around align-items-center pr-1 pl-1 ml-0 pb-1 pt-1' >

          <div className='productName font-weight-bold  col-4'> סיר חד"פ  </div>
          <div className='amountOption font-weight-bold col-2 pb-1 pt-1 pl-0' style={{ fontSize: '12px', width: 'fit-content' }}>
            <div >בחר אפשרות:</div>
            <select class="form-select form-select-x-sm rtl pb-0 pt-0 border-0 rounded-0 font-weight-bold" aria-label=".form-select-sm example" style={{ width: 'fit-content', fontSize: '12px' }}>
              <option selected> גדול</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <div className='col-1 goldColor p-0' style={{ width: 'fit-content' }}>|</div>
          <div className='price font-weight-bold col-1 goldColor p-0' style={{ width: 'fit-content' }}>14.90 &#8362; </div>
          <div className='amountToBuy col-3 goldColor d-flex   p-0  align-items-center' style={{ width: 'fit-content' }}>+<div className='border text-black bg-white pt-0 pb-0 pl-2 pr-2 m-1' style={{ fontSize: '13px' }}>1</div>-</div>
          <div className='addToCart col-3 bg-black text-white align-items-center d-flex h6 pb-1 pt-1 mb-0' style={{ height: 'fit-content', width: 'fit-content' }}>{i18.t('addToCart')}
            <div className=' mr-2'></div>
            <img style={{
              height: '17px',

            }} src={Cart} /></div>

        </div>


        <div className=' productLine w-100 d-flex row   mb-4  justify-content-around align-items-center pr-1 pl-1 ml-0 pb-1 pt-1'>

          <div className='productName font-weight-bold  col-4'>   חלה פיקנטית</div>
          <div className='amountOption font-weight-bold col-2 pb-1 pt-1 pl-0' style={{ fontSize: '12px', width: 'fit-content' }}>
            <div >בחר אפשרות:</div>
            <select class="form-select form-select-x-sm rtl pb-0 pt-0 border-0 rounded-0 font-weight-bold" aria-label=".form-select-sm example" style={{ width: 'fit-content', fontSize: '12px' }}>
              <option selected> בינוני</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <div className='col-1 goldColor p-0' style={{ width: 'fit-content' }}>|</div>
          <div className='price font-weight-bold col-1 goldColor p-0' style={{ width: 'fit-content' }}>14.90 &#8362; </div>
          <div className='amountToBuy col-3 goldColor d-flex   p-0  align-items-center' style={{ width: 'fit-content' }}>+<div className='border text-black bg-white pt-0 pb-0 pl-2 pr-2 m-1' style={{ fontSize: '13px' }}>1</div>-</div>
          <div className='addToCart col-3 bg-black text-white align-items-center d-flex h6 pb-1 pt-1 mb-0' style={{ height: 'fit-content', width: 'fit-content' }}>{i18.t('addToCart')}
            <div className=' mr-2'></div>
            <img style={{
              height: '17px',

            }} src={Cart} /></div>

        </div>



        <h4 className=' font-weight-bold mb-4 mt-5'>מוצרים משדרגים</h4>
        <div className=' productLine w-100 d-flex row   mb-4  justify-content-around align-items-center pr-1 pl-1 ml-0 pb-1 pt-1' >

          <div className='productName font-weight-bold  col-4'> קוקה קולה</div>
          <div className='amountOption font-weight-bold col-2 pb-1 pt-1 pl-0' style={{ fontSize: '12px', width: 'fit-content' }}>
            <div >{i18.t('SelectAnOption')} :</div>
            <select class="form-select form-select-x-sm rtl pb-0 pt-0 border-0 rounded-0 font-weight-bold" aria-label=".form-select-sm example" style={{ width: 'fit-content', fontSize: '12px' }}>
              <option selected> גדול </option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <div className='col-1 goldColor p-0' style={{ width: 'fit-content' }}>|</div>
          <div className='price font-weight-bold col-1 goldColor p-0' style={{ width: 'fit-content' }}>14.90 &#8362; </div>
          <div className='amountToBuy col-3 goldColor d-flex   p-0  align-items-center' style={{ width: 'fit-content' }}>+<div className='border text-black bg-white pt-0 pb-0 pl-2 pr-2 m-1' style={{ fontSize: '13px' }}>1</div>-</div>
          <div className='addToCart col-3 bg-black text-white align-items-center d-flex h6 pb-1 pt-1 mb-0' style={{ height: 'fit-content', width: 'fit-content' }}>{i18.t('addToCart')}
            <div className=' mr-2'></div>
            <img style={{
              height: '17px',

            }} src={Cart} /></div>

        </div>

        <div className=' productLine w-100 d-flex row   mb-4  justify-content-around align-items-center pr-1 pl-1 ml-0 pb-1 pt-1' >

          <div className='productName font-weight-bold  col-4'> פריגת  </div>
          <div className='amountOption font-weight-bold col-2 pb-1 pt-1 pl-0' style={{ fontSize: '12px', width: 'fit-content' }}>
            <div >בחר אפשרות:</div>
            <select class="form-select form-select-x-sm rtl pb-0 pt-0 border-0 rounded-0 font-weight-bold" aria-label=".form-select-sm example" style={{ width: 'fit-content', fontSize: '12px' }}>
              <option selected> 600 מ"ל</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <div className='col-1 goldColor p-0' style={{ width: 'fit-content' }}>|</div>
          <div className='price font-weight-bold col-1 goldColor p-0' style={{ width: 'fit-content' }}>14.90 &#8362; </div>
          <div className='amountToBuy col-3 goldColor d-flex   p-0  align-items-center' style={{ width: 'fit-content' }}>+<div className='border text-black bg-white pt-0 pb-0 pl-2 pr-2 m-1' style={{ fontSize: '13px' }}>1</div>-</div>
          <div className='addToCart col-3 bg-black text-white align-items-center d-flex h6 pb-1 pt-1 mb-0' style={{ height: 'fit-content', width: 'fit-content' }}>{i18.t('addToCart')}
            <div className=' mr-2'></div>
            <img style={{
              height: '17px',

            }} src={Cart} /></div>

        </div>








      </div>
    </>
  )
}
const mapStateToProps = (state) => {
  return {
    products: state.productReducer.products,
    categories: state.categoryReducer.categories,
    language: state.languageReducer.language

  };
}
const mapDispatchToProps = (dispatch) => ({
  getAllProducts: () => dispatch(actions.getAllProducts()),
  getAllCategories: () => dispatch(actions.getAllCategories()),
})
export default connect(mapStateToProps, mapDispatchToProps)(ProductList)
// export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ProductList))