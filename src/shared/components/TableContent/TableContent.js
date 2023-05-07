import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import AppAction from 'redux/app/action';
import { useState } from 'react';
import { check } from 'prettier';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import './TableContent.scss';
import ButtonDropdown from '../buttondropdown/buttondropdown'
import Popupmodal from '../popupmodal/popupmodal'
import PaginationTable from '../pagination/pagination';
import Notification from '../notification/notification';

// import { connect } from 'react-redux';

// import {getListPost as getListPostAction} from 'redux/app/saga';
// import {getPostData} from 'redux/postAPI';



function TableContent () {
    let history = useHistory();
    let path = history.location.pathname
    const [keycol, setKeycol] = useState(false)
    const dispatch = useDispatch()
    const { data, loading } = useSelector(state => state.App.superliData)

    

    const [option, setOption] = useState(
        [{value:1,text:"Giao dịch"},
        {value:2,text:"Tạm dừng"}]
    )
    const [otsetup, setOtsetup] = useState(
        [{value:1,text:"Sửa",linkicon:"../../images/Iconsua.svg",color:"#138300"},
        {value:2,text:"Xóa",linkicon:"../../images/iconxoa.svg",color:"#FF3434"}]
    )
    const [nhacungcap, setnhacungcap] = useState([
        // {id:1,mancc:"NC00001",namncc:"Nhà cung cấp 1",danhmuc:"Ngành may mặc",macode:"322",macongno:"111112021",phone:"0358749335",email:"abc123@gmail.com",diachi:"72 Núi Thành, Đà Nẵng",status:1},
        // {id:2,mancc:"NC00001",namncc:"Nhà cung cấp 1",danhmuc:"Ngành may mặc",macode:"322",macongno:"111112021",phone:"0358749335",email:"abc123@gmail.com",diachi:"72 Núi Thành, Đà Nẵng",status:2},
        // {id:3,mancc:"NC00001",namncc:"Nhà cung cấp 1",danhmuc:"Ngành may mặc",macode:"322",macongno:"111112021",phone:"0358749335",email:"abc123@gmail.com",diachi:"72 Núi Thành, Đà Nẵng",status:1}
    ])
    useEffect(() =>
    {
        dispatch({
            type: AppAction.FETCH_GET_DATA,
            payload: {
                data: {}
            }
        })
        setnhacungcap(data)
    }, [])
    // useEffect(() => {
    //     const tmpRow = [];
    //     for (let i = 1; i <= 100; i++) {
    //         tmpRow.push({
    //             mancc: 'NC0000' + i.toString(),
    //             namncc: 'Nhà cung cấp ' + i.toString(),
    //             danhmuc: "Ngành may mặc"+ i.toString(),
    //             macode: "322"+ i.toString(),
    //             macongno: "11111202" + i.toString(),
    //             phone: "0358749335",
    //             email: "abc123@gmail.com",
    //             diachi: "72 Núi Thành, Đà Nẵng",
    //             status: 1,
    //             id: i
    //         })
    //     }
    //     setnhacungcap(tmpRow)
    // },[]);
    const onChangeStatus = (e,id) =>
    {
        nhacungcap[id].status=e.value
        setDataRowShow(DataRowShow)
        setKeycol(!keycol)
    }
    const [checkchange, setCheckchange] = useState(false);
    const [checked, setChecked] = useState([
    ]);


    const [CurrentPage, setCurrentPage] = useState(1);
    const [ValueSelectLimit, setValueSelectPage] = useState({});
    const [numberOption,setnumberOption] = useState([])
    const [isChangeData, setisChangeData] = useState(false);
    const [isChangeIndex, setisChangeIndex] = useState("");
    const [DataRowShow, setDataRowShow] = useState([]);

    useEffect(()=>{
        renderOptionlimit()
    },[nhacungcap])
    useEffect(() =>
    {
        const indexOfLastData = CurrentPage * ValueSelectLimit.value;
        const indexOfFirstData = indexOfLastData - ValueSelectLimit.value;
        const currentData = nhacungcap.slice(indexOfFirstData, indexOfLastData);
        setDataRowShow(currentData)
    }, [ValueSelectLimit, CurrentPage])
    
    const renderOptionlimit = () => {
        const result = [];

        const dataLen = nhacungcap.length;

        var n = nhacungcap.length<10?1:10;
        for (let i = 1; i <= n; i++) {
            const dataPerpage = Math.ceil(((dataLen) / n)) * i
            result.push({ value: dataPerpage, text: dataPerpage });

        }
        setValueSelectPage(result[0]);
        setnumberOption(result);
    }

    const onChangeSelectNumPages = (e) =>
    {
        setValueSelectPage(e)
    }
    const OnchangePage = (e, i) =>
    {
        setCurrentPage(i)
    }
    const OnchangePageNext = (e, i) =>
    {
        setCurrentPage(i)
    }
    const OnchangePagePre = (e, i) =>
    {
        setCurrentPage(i)
    }
    const onChangeInput = (e,id,type)=>{
        if(type){
            if(e.target.checked){
                DataRowShow.map((its,i)=>{
                    checked.push(i)
                })
                setChecked(checked)
                setCheckchange(!checkchange)
            }else {
                setChecked([]);
            }
        }else {
            if(e.target.checked){
                checked.push(id)
                setChecked(checked)
                setCheckchange(!checkchange)
            }else {
                const new_arr = checked.filter(item => item != id);
                setChecked(new_arr);
            }
        }
    }
    
    const [showbt,setShowbt] = useState(false)
    return (
        <div>
            <Notification showbt={showbt} setShowbt={setShowbt}/>

            <div className='TableContent'>
                <table cellPadding={0} cellSpacing={0}>
                    <thead>
                        <tr>
                        <th style={{paddingLeft: '15px'}}><div className="CheckBox" id='checkboxall'><input type="checkbox" name="" id="check" onChange={(e)=>onChangeInput(e,'',true) } /><label htmlFor='check'></label></div></th>
                        <th>Mã NCC</th>
                        <th>Tên nhà cung cấp</th>
                        <th>Danh mục</th>
                        <th>Mã Code</th>
                        <th>Mã công nợ</th>
                        <th>Điện thoại</th>
                        <th>Email</th>
                        <th>Địa chỉ</th>
                        <th>Trạng thái</th>
                        <th style={{paddingRight: '15px'}}>Tác vụ</th>
                        </tr>
                    </thead>
                    <tbody>
                        {DataRowShow && DataRowShow.map((item,it)=>{
                            return <tr key={it} style={{background:checked.includes(it)?'#FBFAF4':''}} >
                                <td style={{paddingLeft: '15px'}}>
                                    <div className="CheckBox" id='checkbox'>
                                        <input type="checkbox" id={it} value={""} onChange={(e)=>onChangeInput(e,it) } checked={checked.includes(it)} />
                                        <label htmlFor={it}></label>
                                    </div>
                                </td>
                                
                                <td style={{color:'#0054E1',cursor:'pointer'}} onClick={()=>{history.push(path+'/detail/'+item.id,item)}}>{item.mancc}</td>
                                <td>{item.namncc}</td> 
                                <td>{item.danhmuc}</td> 
                                <td >{item.macode}</td> 
                                <td style={{color:'#0054E1',cursor:'pointer'}}>{item.macongno}</td> 
                                <td>{item.phone}</td> 
                                <td>{item.email}</td> 
                                <td>{item.diachi}</td> 
                                <td style={{width:'98px'}}>
                                    <ButtonDropdown  placeholder={"Giao dịch "} id="status" name="status"
                                        Options={option}
                                        onChange={(e)=>{onChangeStatus(e,it)}}
                                        value={item.status}
                                        backgroudcolor={item.status==1?'#008A5A':'#F85555'}
                                    />
                                </td>
                                
                                <td style={{cursor:'pointer',paddingRight: '15px'}} >
                                    <Popupmodal  id="status" name="status"
                                        Options={otsetup}
                                        setShowbt={setShowbt}
                                        idncc={item.id}
                                    />
                                </td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
            <div className='PaginationContain'>
                <PaginationTable 
                    TotalRecord={nhacungcap.length}
                    Options={numberOption}
                    OnChangeSelectNumPages={onChangeSelectNumPages}
                    ValueSelectLimit={ValueSelectLimit}
                    CurrentPage={CurrentPage}
                    ShowStatus={true}
                    LimitButton={10}
                    OnclickButtonChangePage={OnchangePage}
                    ShowNextPre={true}
                    OnclickButtonNext={OnchangePageNext}
                    OnclickButtonPre={OnchangePagePre}
                />
            </div>
        </div>
        
    )
}
export default TableContent;