import React from "react";
import ImageModel from "../model/ImageModel";
import { my_request } from "./PhoneAPI";

export async function getAllImages(maDienThoai:number):Promise<ImageModel[]> {
    const result:ImageModel[]=[];

    const url:string=`http://localhost:8080/dien-thoai/${maDienThoai}/danhSachHinhAnh`;

    const response =await my_request(url);
    const responseData = response._embedded.hinhAnhs;
    //console.log(responseData);

    for(const key in responseData){
        result.push({
            maHinhAnh:responseData[key].maHinhAnh,
            tenHinhAnh: responseData[key].tenHinhAnh,
            icon:responseData[key].icon,
            duongDan:responseData[key].duongDan,
            duLieuAnh:responseData[key].duLieuAnh
    });
    }
    return result;
}