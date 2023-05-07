import React, { useEffect,useRef } from 'react';
import { useDispatch } from 'react-redux';
import AppAction from 'redux/app/action';
import './Header.scss';
import { useState } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function HeaderContainer (props ) {
    let history = useHistory();
    let path = history.location.pathname
    let direct = path.split('/')
    const [pathurl,setpathurl] = useState(path)
    const [directurl,setdirecturl] = useState()

    // useEffect(() => {
    //    setdirecturl(direct)
    // }, []);
    // console.log(directurl);

    useEffect(() => {
        if(direct[2]=="add"){
            setdirecturl (<div style={{display:'flex'}}><div className='Item2'>
                <img src='../../images/Iconright.svg' alt='' />
                <span>Danh sách NCC</span>
                </div>
                <div className='Item2'>
                <img src='../../images/Iconright.svg' alt='' />
                <span>Tạo mới nhà cung cấp</span>
                </div>
                </div>)
        }else if(direct[2]=="detail"){
            setdirecturl (<div style={{display:'flex'}}><div className='Item2'>
                <img src='../../images/Iconright.svg' alt='' />
                <span>Danh sách NCC</span>
                </div>
                <div className='Item2'>
                <img src='../../images/Iconright.svg' alt='' />
                <span>Chi tiết nhà cung cấp</span>
                </div>
                </div>)
        }else if(direct[1]=="nhacungcap"){
            setdirecturl (<div style={{display:'flex'}}><div className='Item2'>
                <img src='../../images/Iconright.svg' alt='' />
                <span>Danh sách NCC</span>
                </div>
                </div>)
        }else if(direct[1]=="danhmucncc" ){
            setdirecturl (<div style={{display:'flex'}}><div className='Item2'>
                <img src='../../images/Iconright.svg' alt='' />
                <span>Danh mục NCC</span>
                </div>
                </div>)
        }else if(direct[1]=="lichsudathang" ){
            setdirecturl (<div style={{display:'flex'}}><div className='Item2'>
                <img src='../../images/Iconright.svg' alt='' />
                <span>Lịch sử đặt hàng</span>
                </div>
                </div>)
        }else if(direct[1]=="bangbaogia" ){
            setdirecturl (<div style={{display:'flex'}}><div className='Item2'>
                <img src='../../images/Iconright.svg' alt='' />
                <span>Bảng báo giá</span>
                </div>
                </div>)
        }else if(direct[1]=="lichsutheodoi" ){
            setdirecturl (<div style={{display:'flex'}}><div className='Item2'>
                <img src='../../images/Iconright.svg' alt='' />
                <span>Lịch sử theo dõi</span>
                </div>
                </div>)
        }else {
            setdirecturl (<div style={{display:'flex'}}><div className='Item2'>
                <img src='../../images/Iconright.svg' alt='' />
                <span>Tổng quan</span>
                </div>
                </div>)
        }
    }, []);
    
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch({
            type: AppAction.FETCH_SAMPLE_1,
            payload: {}
        })
    }, [])
    const [isClick, setIsClick] = useState(false);
    const timeoutRef = useRef(null);
    const [isHovering, setIsHovering] = useState(false);
    const popRef = useRef()

    useEffect(() =>
    {
        if (!isHovering) {
            setIsClick(isHovering);
        }
    }, [isHovering]);
    const handleMouseEnter = () =>
    {
        clearTimeout(timeoutRef.current);
        setIsHovering(true);
    };

    const handleMouseLeave = () =>
    {
        timeoutRef.current = setTimeout(() => setIsHovering(false), 200);
    };
    const [type, setType] = useState('none')
    return (
        <div className='Header'>
            <div className='Left'>
                <div className='Add'  
                onClick={() => { setIsClick(!isClick) }}
                ref={popRef}
                onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <img src="../../images/Icontaomoi.svg" alt="" onClick={(()=>{if(type){setType('')}else{setType('none')}})} />
                    <span>BÁN HÀNG</span>
                    <img src="../../images/Iconcot.svg" alt="" />
                    <div className={`modaltaoncc ${props.classNameBody ?? ""} ${isClick ? "show" : ""}`} id='modaltaoncc' onClick={()=>{history.push('/nhacungcap/add')}}>
                        <span>Tạo nhà cung cấp</span>
                    </div>
                </div>
                <div className='linkredict'>
                    <div className='Item1'>
                        <span>Nhà cung cấp</span>
                    </div>
                    {/* {
                        directurl && directurl.map((item,index)=>{
                            
                        })
                    } */}
                    {directurl}
                </div>
            </div>
            <div className='Right'>
                <div className='Icon'>
                    <img src="../../images/Iconmenuchamsvg.svg" alt="" />
                    <img src="../../images/icondashboard.svg" alt="" />
                    <img src="../../images/Icontaonhanh.svg" alt="" />
                    <div className='thongbao'>
                        <img src="../../images/Iconchuong.svg" alt="" />
                        <div className='numbertbao'>
                            <span>12</span>
                        </div>
                    </div>
                    <img src="../../images/iconhome.svg" alt="" />
                </div>
                <div className='Iconuser'>
                    <img src="../../images/IconUser.svg" alt="" />
                </div>
            </div>
        </div>
    )
}
export default HeaderContainer;