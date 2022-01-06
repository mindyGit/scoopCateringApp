import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from './components/Home'

import ContactUs from './components/interface-user/ContactUs'
import Menu from './components/interface-user/Shop'
import ProductList from './components/product/ProductList';
import OurPeeks from './components/interface-user/OurPeeks'
import Shop from './components/interface-user/Shop'

import OurCustomers from './components/interface-user/OurCustomers'
import OurStory from './components/interface-user/ourStory/OurStory'
import OrdertList from './components/order/OrderList';
import NewOrder from './components/order/NewOrder';
import UserList from './components/user/UserList';
import NewUser from './components/user/NewUser';
import NewProduct from './components/product/NewProduct';
import { connect } from 'react-redux';
import Search from './components/Search';
import initialDetails from './data/initialDetails';
import UpLoadImg from './components/UpLoadImg'
import AppFirebase from './components/Firebase/AppFirebase'
import OrderSummary from './components/interface-manager/OrderSummary'
import Try from './components/try'
import NavBar from './components/navBar/NavBar'






function App(props) {


  const { productReducer } = props

  useEffect(() => {
  }, []);
  return (

    <Router>
      <div className="App" >

        {/* <NavBar /> */}
        {/* <OrderSummary /> */}
        {/* <ProductList /> */}
        {/* <Try /> */}
        {/* <Sort /> */}
        {/* <AppFirebase /> */}

        {/* <NewProduct /> */}
        {/* <header>
          <Link to="/ProductList">Manager Interface</Link> */}
        {/* <Link to="/">Home</Link>|
      
          <Link to="/contact">Contact Us</Link>|
          <Link to="/menu">Menu</Link>
        </header>
         */}
        <Switch>
          {/* <Route exact path="/appFirebase" component={AppFirebase} /> */}
          <Route exact path="home/ProductList" component={ProductList} />
          <Route exact path="/" component={Home} />
          <Route exact path="/home/shop" component={Shop} />
          <Route exact path="home/contact" component={ContactUs} />
          {/* <Route exact path="home/menu" component={Menu} /> */}
          <Route exact path="/home/ourPeeks" component={OurPeeks} />
          <Route exact path="/home/ourCustomers" component={OurCustomers} />
          <Route exact path="/home/OurStory" component={OurStory} />

        </Switch>




        {/* <Home style={{ overflowX: 'hidden', overflowY: 'scroll' }} /> */}

        {/* 
        <OrdertList />
        <UserList />
        <NewProduct />

        {/* <NewOrder /> */}
      </div>
    </Router>

  );
}
const mapStateToProps = state => ({


})

const mapDispatchToProps = dispatch => ({

  // products: (product) => dispatch(actions.setSocket(product)),
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
