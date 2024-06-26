import React from "react";
import PhoneModel from "../model/PhoneModel";


export async function my_request(url:string) {
    const response =await fetch(url);

    if(!response.ok){
        throw(`Không thể truy cập ${url}`)
    }
    return response.json();
}

export async function getAllPhones():Promise<PhoneModel[]> {
    const result:PhoneModel[]=[];

    const url:string='http://localhost:8080/dien-thoai';

    const response= await my_request(url);

    const responseData = response._embedded.dienThoais;
    //console.log(responseData);

    for(const key in responseData){
        result.push({
            maDienThoai:responseData[key].maDienThoai,
            tenDienThoai: responseData[key].tenDienThoai,
            moTa:responseData[key].moTa,
            boNho:responseData[key].boNho,
            giaNiemYet:responseData[key].giaNiemYet,
            giaBan:responseData[key].giaBan,
            soLuong:responseData[key].soLuong,
            trungBinhXepHang:responseData[key].trungBinhXepHang
    });
    }
    return result;
}