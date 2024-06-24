import React from "react";
import Phone from "../../model/Phone";
import PhoneProps from "./component/PhoneProps";

const ListPhone:React.FC=()=>{
    const phones:Phone[]=[
        {   
            id: 1,
            title: 'Iphone 13 Promax',
            description: 'Description for Iphone 13 Promax',
            originalPrice: 50000,
            price: 45000,
            imageUrl: '../../images/iphone-13-pro-max-blue.png',
        },
        {   
            id: 2,
            title: 'Iphone 14 Promax',
            description: 'Description for Iphone 14 Promax',
            originalPrice: 50000,
            price: 45000,
            imageUrl: '../../images/iphone-14-pro-max-purple-1.png',
        },
        {   
            id: 3,
            title: 'Iphone 15 Promax',
            description: 'Description for Iphone 15 Promax',
            originalPrice: 50000,
            price: 45000,
            imageUrl: '../../images/iphone-15-pro-max-blue-titanium.png',
        },
        {   
            id: 3,
            title: 'Iphone 15 Promax',
            description: 'Description for Iphone 15 Promax',
            originalPrice: 50000,
            price: 45000,
            imageUrl: '../../images/iphone-15-pro-max-blue-titanium.png',
        },
        {   
            id: 3,
            title: 'Iphone 15 Promax',
            description: 'Description for Iphone 15 Promax',
            originalPrice: 50000,
            price: 45000,
            imageUrl: '../../images/iphone-15-pro-max-blue-titanium.png',
        },
        {   
            id: 3,
            title: 'Iphone 15 Promax',
            description: 'Description for Iphone 15 Promax',
            originalPrice: 50000,
            price: 45000,
            imageUrl: '../../images/iphone-15-pro-max-blue-titanium.png',
        }

    ];
    return(
        <div className="container">
            <div className="row mt-4">
                {phones.map((phone)=>(
                    <PhoneProps phone={phone}/>
                ))}
            </div>
        </div>
    );
}
export default ListPhone;