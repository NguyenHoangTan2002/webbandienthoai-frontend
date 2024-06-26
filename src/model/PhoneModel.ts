class PhoneModel {
    maDienThoai: number;
    tenDienThoai?:string;
    moTa?:string;
    boNho?:number;
    giaNiemYet?:number;
    giaBan?:number;
    soLuong?:number;
    trungBinhXepHang?:number;
    constructor(
        maDienThoai: number,
        tenDienThoai:string,
        moTa:string,
        boNho:number,
        giaNiemYet:number,
        giaBan:number,
        soLuong:number,
        trungBinhXepHang:number,
    ){
        this.maDienThoai=maDienThoai;
        this.tenDienThoai=tenDienThoai;
        this.moTa=moTa;
        this.boNho=boNho;
        this.giaNiemYet=giaNiemYet;
        this.giaBan=giaBan;
        this.soLuong=soLuong;
        this.trungBinhXepHang=trungBinhXepHang;
    }
}
export default PhoneModel;