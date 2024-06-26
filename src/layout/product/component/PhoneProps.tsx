import React, { useEffect, useState } from "react";
import PhoneModel from "../../../model/PhoneModel";
import { getAllImages } from "../../../api/ImageAPI";
import ImageModel from "../../../model/ImageModel";


interface PhoneInterface{
    phone:PhoneModel;
}
const PhoneProps: React.FC<PhoneInterface> = (props) => {
    const maDienThoai=props.phone.maDienThoai;
    const [images,setImages]=useState<ImageModel[]>([]);
    const [loading,setLoading]=useState(true);
    const [error,setError]=useState(null);
    useEffect(() => {
        getAllImages(maDienThoai).then(
            imageData =>{
                setImages(imageData);
                setLoading(false);
            }
        ).catch(
            error => {
                setLoading(false);
                setError(error.message);
            }
        );
    }, [] // Chi goi mot lan
    )
    
    if(loading){
        return(
            <div>
                <h1>Đang tải dữ liệu</h1>
            </div>
        );
    }
    if(error){
        return(
            <div>
                <h1>Gặp lỗi{error}</h1>
            </div>
        );
    }
    let duLieuAnh:string="";
    if(images[0]&& images[0].duLieuAnh){
        duLieuAnh=images[0].duLieuAnh;
    }
    return (
        <div className="col-md-3 mt-2">
            <div className="card">
                <img
                    src={duLieuAnh}
                    className="card-img-top"
                    alt={props.phone.tenDienThoai}
                    style={{height:'200px' }}
                />
                <div className="card-body">
                    <h5 className="card-title">{props.phone.tenDienThoai}</h5>
                    <p className="card-text">{props.phone.moTa}</p>
                    <div className="price">
                        <span className="original-price">
                            <del>{props.phone.giaNiemYet}</del>
                        </span>
                        <span className="discounted-price">
                            <strong>{props.phone.giaBan}</strong>
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
        </div>
    );
}
export default PhoneProps;