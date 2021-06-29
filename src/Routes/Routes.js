import React from "react";
import Home from "../Pages/Home";
import SearchDetails from "../Pages/SearchDetails";

/**
 * Predefined pages to use in hookrouter
 * @type {{/: (()=>XML), /search-details: (()=>XML)}}
 */
const Routes = {
    "/": () => <Home />,
    "/search-details": () => <SearchDetails />,
};

export default Routes;