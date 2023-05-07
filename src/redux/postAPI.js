import React, { useEffect,useState } from 'react';


const [nhacungcap, setnhacungcap] = useState([])
useEffect(() => {
    const tmpRow = [];
    for (let i = 1; i <= 100; i++) {
        tmpRow.push({
            mancc: 'NC0000' + i.toString(),
            namncc: 'Nhà cung cấp ' + i.toString(),
            danhmuc: "Ngành may mặc"+ i.toString(),
            macode: "322"+ i.toString(),
            macongno: "11111202" + i.toString(),
            phone: "0358749335",
            email: "abc123@gmail.com",
            diachi: "72 Núi Thành, Đà Nẵng",
            status: 1,
            id: i
        })
    }
    setnhacungcap(tmpRow)
},[]);

export const getPostData = () => {
    return nhacungcap;
}