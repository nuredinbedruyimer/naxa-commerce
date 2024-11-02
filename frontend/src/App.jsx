import "./App.css";
import { Routes, Route } from "react-router-dom";
import AuthLayout from "./components/auth/Layout";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";
import AdminLayout from "./components/admin/Layout";
import AdminDashboard from "./pages/admin/Dashboard";
import AdminProduct from "./pages/admin/Product";
import AdminOrders from "./pages/admin/Orders";
import AdminFeaturedProduct from "./pages/admin/FeaturedProduct";
import ShopLayout from "./components/shop/Layout";
import PageNotFoundLayout from "./components/PageNotFound/Layout";
import ShopHome from "./pages/shop/Home";
import ShopAccount from "./pages/shop/Account";
import ShopCheckout from "./pages/shop/Checkout";
import ShopListing from "./pages/shop/Listing";
import CheckAuth from "./components/common/CheckAuth";
import NotAllowedPage from "./pages/NotAllowedPage/NotAllowedPage";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { checkAuth } from "./features/auth/authSlice";
import { Skeleton } from "./components/ui/skeleton";

function App() {
  const { isAuthenticated, isLoading, user } = useSelector(
    (state) => state.auth
  );
  const dispatch = useDispatch();

  // console.log("isAuthenticated : ", isAuthenticated,"isLoading : ",  isLoading, "User", user)

  useEffect(() => {
    dispatch(checkAuth());
  }, [dispatch]);

  if (isLoading) {
    // console.log("isAuthenticated : ", isAuthenticated,"isLoading : ",  isLoading, "User", user)

    return <Skeleton className="w-[100px] h-[20px] rounded-full" />;
  }
  // console.log("isAuthenticated : ", isAuthenticated,"isLoading : ",  isLoading, "User", user)

  return (
    <div className="flex flex-col overflow-hidden bg-white">
      <Routes>
        {/* Authentication Route */}

        <Route
          path="/auth"
          element={
            <CheckAuth isAuthenticated={isAuthenticated} user={user}>
              <AuthLayout />
            </CheckAuth>
          }
        >
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
        </Route>

        {/* Admin Route */}
        <Route
          path="/admin"
          element={
            <CheckAuth isAuthenticated={isAuthenticated} user={user}>
              <AdminLayout />
            </CheckAuth>
          }
        >
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="products" element={<AdminProduct />} />
          <Route path="orders" element={<AdminOrders />} />
          <Route path="features" element={<AdminFeaturedProduct />} />
        </Route>

        {/*Shop Route  */}

        <Route
          path="/shop"
          element={
            <CheckAuth isAuthenticated={isAuthenticated} user={user}>
              <ShopLayout />
            </CheckAuth>
          }
        >
          <Route path="account" element={<ShopAccount />} />
          <Route path="checkout" element={<ShopCheckout />} />
          <Route path="home" element={<ShopHome />} />
          <Route path="listing" element={<ShopListing />} />
        </Route>
        <Route path="*" element={<PageNotFoundLayout />} />
        <Route path="/not-allowed" element={<NotAllowedPage />} />
      </Routes>
    </div>
  );
}

export default App;
