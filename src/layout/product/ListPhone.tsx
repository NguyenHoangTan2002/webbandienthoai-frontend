import React, { useEffect, useState } from "react";
import { getAllPhones } from "../../api/PhoneAPI";
import PhoneModel from "../../model/PhoneModel";
import PhoneProps from "./component/PhoneProps";

const ListPhone:React.FC=()=>{
    const [phoneProducts,setPhoneProducts]=useState<PhoneModel[]>([]);
    const [loading,setLoading]=useState(true);
    const [error,setError]=useState(null);
    useEffect(() => {
        getAllPhones().then(
            phoneData =>{
                setPhoneProducts(phoneData);
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
    return(
        <div className="container">
            <div className="row mt-4">
                {phoneProducts.map((phone)=>(
                    <PhoneProps key={phone.maDienThoai} phone={phone}/>
                ))}
            </div>
        </div>
    );
}
export default ListPhone;