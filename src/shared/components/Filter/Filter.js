import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import AppAction from 'redux/app/action';
import Dropdown from '../dropdown/dropdown';
import './Filter.scss';
import { useState } from 'react';

function FilterContainer (props) {
    const [type, setType] = useState(0)
    const [typedp, setTypedp] = useState('none')
    const [typedc, setTypedc] = useState(0)
    const [typedcdp, setTypedcdp] = useState('none')

    const [title, setTitle] = useState("Trạng thái")
    const [titledc, setTitledc] = useState("Địa chỉ")

    const [Options, setOptions] = useState(
        [{value:1,text:"Trạng thái"},
        {value:2,text:"Trạng thái 1"},
        {value:3,text:"Trạng thái 2"},
        {value:4,text:"Trạng thái 3"}]
    )

    const [optiondc, setOption2] = useState(
        [{value:1,text:"Địa chỉ"},
        {value:2,text:"Địa chỉ 1"},
        {value:3,text:"Địa chỉ 2"},
        {value:4,text:"Địa chỉ 3"}]
    )
    const [ValueStatus, setValueStatus] = useState(false);
    const [ValueAddress, setValueAddress] = useState(false);
    const [ValueSearch, setValueSearch] = useState(false);
    const onchangeStatus = (e) =>
    {

        setValueStatus(e)

    }
    const onchangeAddress = (e) =>
    {
        setValueAddress(e)

    }
    const onchangeSearch = (e) =>
    {
        setValueSearch(e)

    }
    return (
        <div className='Filter'>
            <div className='inputFilter'>
                <div className='search'>
                    <img src="../../images/Iconkinhlup.svg" alt=""/>
                    <input type="text" placeholder='Tìm kiếm mã NCC, tên NCC, email, '/>
                </div>
                {/* <div className='selectbox'>
                    <div className="dropdown" onClick={(()=>{if(type==0){setType(1);setTypedp('')}else{setType(0);setTypedp('none')}})}>
                        <span>{title}</span>
                        <img src="../../images/Icondropdown.svg" alt="" />
                    </div>
                    <div className="dropdown-content" style={{opacity:type,display:typedp}}>
                        {option && option.map((item,id)=>{
                            return <div className='item' key={id} onClick={(()=> {setTitle(item.text); setType(0);setTypedp('none')})}>{item.text}</div>
                        })}
                    </div>
                </div> */}
                 <Dropdown  placeholder={"Trạng thái "} id="status" name="status"
                    Options={Options}
                    onChange={onchangeStatus}
                    value={ValueStatus.text}
                />
                <Dropdown  placeholder={"Địa chỉ "} id="status" name="status"
                    Options={optiondc}
                    onChange={onchangeAddress}
                    value={ValueAddress.text}
                />
                {/* <div className='selectbox'>
                    <div className="dropdown" onClick={(()=>{if(typedc==0){setTypedc(1);setTypedcdp('')}else{setTypedc(0);setTypedcdp('none')}})}>
                        <span>{titledc}</span>
                        <img src="../../images/Icondropdown.svg" alt="" />
                    </div>
                    <div className="dropdown-content" style={{opacity:typedc,display:typedcdp}}>
                        {optiondc && optiondc.map((item,id)=>{
                            return <div className='item' key={id} onClick={(()=> {setTitledc(item.text); setTypedc(0);setTypedcdp('none')})}>{item.text}</div>
                        })}
                    </div>
                </div> */}
            </div>
            <div className='btnFilter'>
                <button className='btnSetup'>Thiết lập lại</button>
                <button className='btnSearch'>Tìm kiếm</button>
                <img src="../../images/iconloccaidat.svg" alt="" className='iconloccaidat'/>
                <img src="../../images/iconxemchitiet.svg" alt="" className='iconxemchitiet'/>
            </div>
        </div>
    )
}
export default FilterContainer;