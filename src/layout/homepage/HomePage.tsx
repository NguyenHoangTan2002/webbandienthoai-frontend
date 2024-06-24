import React from "react";

import ListPhone from "../product/ListPhone";
import Banner from "./component/Banner";
import Carousel from "./component/Carousel";

function HomePage(){
    return(
        <div>
            <Banner></Banner>
            <Carousel></Carousel>
            <ListPhone></ListPhone>
        </div>
    );  
}
export default HomePage;