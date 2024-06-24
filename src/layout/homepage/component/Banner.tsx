import React from "react";
function Banner() {
    return (
        <div className="p-2 mb-2 bg-white">
                <div className="container-fluid py-5 text-white d-flex 
                justify-content-center align-items-center" >
                    <div>
                        <img src={require('./../../../images/Banner1.png')} width={'1500px'} height={'500px'}></img>                        
                    </div>
                </div>
        </div>
    );
}
export default Banner;