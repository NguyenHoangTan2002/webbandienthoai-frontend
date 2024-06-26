import React from "react";


import Banner from "./component/Banner";
import Carousel from "./component/Carousel";
import ListPhone from "../product/ListPhone";


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