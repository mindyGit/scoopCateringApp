import thunk from "redux-thunk";
import { getAllProducts, createProduct, deleteProduct, updateProduct, copyProduct } from './product'
import { getAllUsers, createUser } from './user'
import { getAllOrders, createOrder, deleteOrder } from './order'
import { getAllCategories } from './category'
import { getAllAmounts } from './amount'
import { getAllProductsOnOrder } from "./productOnOrder";
// import { setSearchWord } from './searchWord';


const AppMiddleware = [
    thunk,
    getAllProducts,
    createProduct,
    deleteProduct,
    updateProduct,
    copyProduct,

    // setSearchWord,

    getAllUsers,
    createUser,


    getAllOrders,
    createOrder,
    deleteOrder,

    getAllCategories,
    getAllAmounts,
    getAllProductsOnOrder

];

export default AppMiddleware;