import React, { useState, useEffect, useRef } from 'react';
import "./popupmodal.scss"
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import AppAction from 'redux/app/action';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useParams,
    useHistory
  } from "react-router-dom";
function Popupmodal(props)
{
    let history = useHistory();
    let path = history.location.pathname
    let nhacungcap = history.location.state
    const [isClick, setIsClick] = useState(false);
    const popRef = useRef()
    const { Options, idncc,text,backgroudcolor, setShowbt} = props;
    const [isHovering, setIsHovering] = useState(false);
    const timeoutRef = useRef(null);
    
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
    const dispatch = useDispatch()

    
    return (
            <div 
            className={`setupbtn  ${props.className ?? ""}`}
            id='dropdown'
            style={{ ...props?.style ?? "" }}
            
            ref={popRef}
            onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>

                <img src="../../images/Iconcaidat.svg" alt="" onClick={() => { setIsClick(!isClick) }}/>
                <div className={`dropdown-setup ${props.classNameBody ?? ""} ${isClick ? "show" : ""}`}>
                {Options && Options.map((item, index) =>
                {   
                    return <div className='item' key={index} onClick={()=>{index==1?setShowbt(true):history.push(path+'/edit/'+idncc)}}>
                        <img src={item.linkicon} alt="" />
                        <span style={{color:item.color}}>{item.text}</span></div>
                })}
                </div>
            </div>
       
    )
}


export default Popupmodal;