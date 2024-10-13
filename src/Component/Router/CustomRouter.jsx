import React from "react";
import { Navbar } from "../Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "../Home/Home";
import RestaurantDetails from "../Restaurant/RestaurantDetail";
import Cart from "../Cart/Cart";
import Profile from "../Profile/Profile";
import { Auth } from "../Auth/Auth";

const CustomRouter =()=>{
    return(
        <div>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/account/:register" element={<Home />} />
                <Route path="/restaurant/:city/:title/:id" element={<RestaurantDetails />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/my-profile/*" element={<Profile />} />
            </Routes>
            <Auth/>
        </div>
    )
}
export default CustomRouter