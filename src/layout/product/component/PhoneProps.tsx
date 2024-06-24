import React from "react";
import Phone from "../../../model/Phone";


interface PhoneProps{
    phone:Phone;
}
const PhoneProps:React.FC<PhoneProps>=({phone})=>{
    return(
        <div className="col-md-3 mt-2">
            <div className="card">
                <img 
                src={phone.imageUrl}
                className="card-img-top text-align-center" 
                alt={phone.title}
                style={{ height: '180px' }}>
                </img>
            </div>
            <div className="card-body">
                <h5 className="card-title">{phone.title}</h5>
                <p className="card-text">{phone.description}</p>
                <div className="price">
                    <span className="original-price">
                        <del>{phone.originalPrice}</del>
                    </span>
                    <span className="discounted-price">
                        <strong>{phone.price}</strong>
                    </span>
                </div>
                <div className="row mt-2" role="group">
                        <div className="col-6">
                            <a href="#" className="btn btn-secondary btn-block">
                                <i className="fas fa-heart"></i>
                            </a>
                        </div>
                        <div className="col-6">
                            <button className="btn btn-danger btn-block">
                                <i className="fas fa-shopping-cart"></i>
                            </button>
                        </div>
                    </div>
            </div>
        </div>
    );

}
export default PhoneProps;