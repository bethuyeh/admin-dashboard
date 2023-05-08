import React, { useEffect } from "react";
import "./App.css";
import "./responsive.css";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/productScreen";
import Login from "./screens/LoginScreen";
import CategoriesScreen from "./screens/CategoriesScreen";
import OrderScreen from "./screens/OrderScreen";
import OrderDetailScreen from "./screens/OrderDetailScreen";
import AddProduct from "./screens/AddProduct";
import UsersScreen from "./screens/UsersScreen";
import ProductEditScreen from "./screens/ProductEditScreen";
import NotFound from "./screens/NotFound";
import PrivateRouter from "./PrivateRouter";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "./Redux/Actions/ProductActions";
import { listOrders } from "./Redux/Actions/OrderActions";
import { initializeParse } from '@parse/react';

initializeParse(
  'YOUR_SERVER_URL',
  'YOUR_APPLICATION_ID',
  'YOUR_JAVASCRIPT_KEY'
);

const App = () => {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      dispatch(listProducts());
      dispatch(listOrders());
    }
  }, [dispatch, userInfo]);

  return (
    <>
      <Router >git remote add origin git@github.com:bethuyeh/admin-dashboard.git
        <Routes element = {<PrivateRouter/>}>
          <Route path="/products" element={<ProductScreen/>} />
          <Route path="/" element={<HomeScreen/>} exact />
          <Route path="/category" element={<CategoriesScreen/>} />
          <Route path="/orders" element={<OrderScreen/>} />
          <Route path="/order/:id" element={<OrderDetailScreen/>} />
          <Route path="/addproduct" element={<AddProduct/>} />
          <Route path="/users" element={<UsersScreen/>} />
          <Route
            path="/product/:id/edit"
            element={ProductEditScreen}
          />
          <Route path="/" exact element={<HomeScreen/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="*" element={NotFound} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
