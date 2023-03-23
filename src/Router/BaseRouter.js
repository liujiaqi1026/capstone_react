import React, { useEffect } from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import axios from "axios";
import Home from '../Home/Home.js';
import Calculation from '../NewCalculation';
import Result from '../Result';
// import Room_list from '../Room/Room_list.js';
// import Order_list from '../Order/Order_list.js';
// import Success from '../StatusPage/Success.js';
// import Failed from '../StatusPage/Failed.js';
// import Page_403 from '../StatusPage/403.js';
// import Page_404 from '../StatusPage/404.js';
// import Page_500 from '../StatusPage/500.js';
// import { CSRF_TOKEN_URL } from '../Config/api_config.js';
// import { ClientID } from '../Config/oauth_config.js';
// import { gapi } from 'gapi-script';

/**
 * This is the Router.
 * We map every Routes with a url and the corresponding JS files.
 * Also, we set our clien id (for Google OAuth)
 * And we ask the backend to get the csrf token for later communication between the front and the back.
 */

function BasicRoute() {
    // // initialize the client id 
    // // Google need to know its users want to access our HotelPortal website
    // useEffect(() => {
    //     const initClient = () => {
    //         gapi.client.init({
    //             clientId: ClientID,
    //             scope: ''
    //         });
    //     };
    //     gapi.load('client:auth2', initClient);
    // });

    // // get csrf token from the backend
    // useEffect(() => {
    //     axios.get(CSRF_TOKEN_URL)
    //         .then(res => {
    //             window.sessionStorage.setItem('CSRF-Token', getCookie('csrftoken'));
    //         }).catch(() => {
    //             throw new Error("Get CSRF token failed");
    //         });
    // }, [])

    // // function to extract csrftoken from the cookies
    // function getCookie(cname) {
    //     var name = cname + "=";
    //     var ca = document.cookie.split(';');
    //     for (var i = 0; i < ca.length; i++) {
    //         var c = ca[i].trim();
    //         if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
    //     }
    //     return "";
    // }

    // Each Route is mapped with the url address and the specific js file
    return (
        <HashRouter>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/home" element={<Home />} />
                <Route exact path='/calculation' element={<Calculation />} />
                <Route exact path='/result' element={<Result />} />
                {/* <Route exact path="/room_list" element={<Room_list />} />
                <Route exact path="/order_list" element={<Order_list />} /> */}
                {/* <Route exact path="/success" element={<Success />} />
                <Route exact path="/failed" element={<Failed />} />
                <Route exact path="/403" element={<Page_403 />} />
                <Route exact path="/404" element={<Page_404 />} />
                <Route exact path="/500" element={<Page_500 />} /> */}
            </Routes>
        </HashRouter>
    );
};

export default BasicRoute;