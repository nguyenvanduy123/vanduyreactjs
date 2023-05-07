import React, { useState, useEffect, useRef } from 'react';
import "./notification.scss"
function Notification(props)
{
    const {showbt,setShowbt} = props
    const [type,setType] = useState(true)
    const [show,setShow] = useState(showbt)

    useEffect(()=>{
        setShow(showbt)
    },[showbt])


    useEffect(() => {
        const timer = setTimeout(() => {
            setShowbt(false)
            setType(true)
            setShow(false);
        }, 5000);
        return () => clearTimeout(timer);
    }, [show]);
    return (
        type?<NotificationDel />:<NotificationSuccess />
    )
    function NotificationDel() {
        return (show && <div className={`notification ${props.classNameBody ?? ""} ${show ? "show" : ""}`} style={{width:'274px',borderBottom:'4px solid #3078F1',opacity:'1'}}><div className='delete'>
            <img src="images/Iconxacnhan.svg" alt="" />
            <span>Đang xóa nhà cung cấp</span>
            <button onClick={()=>{setType(false);setShow(true);}}>Hoàn tác</button>
        </div></div>)
    }
    function NotificationSuccess () {
        return show &&  <div className={`notification ${props.classNameBody ?? ""} ${show ? "show" : ""}`} style={{width:'240px',borderBottom:'4px solid #138300',opacity:'1'}}><div className='success'>
            <div className='success-contain'>
                <img src="images/iconluuthanhcong.svg" alt="" />
                <span>Hoàn tác</span>
            </div>
            <div className='success-iconclose'>
                <img src="images/Iconclosemini.svg" alt="" onClick={()=>{ setShowbt(false);setType(true);setShow(false)}}/>
            </div>
        </div></div>
    }
}


export default Notification;