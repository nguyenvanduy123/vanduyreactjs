import React, { useState, useEffect, useRef } from 'react';
import "./dropdown.scss"
function Dropdown(props)
{

    const [Position, setPosition] = useState({ top: 0, bottom: 0, left: 0, right: 0, });
    const [isClick, setIsClick] = useState(false);
    const popRef = useRef()
    const { Options, value, id, placeholder, onChange,style,topmodal } = props;
    const [isTitle, setIsTitle] = useState("");
    const [heightDropdown, setHeightDropdown] = useState("");
    const [isHovering, setIsHovering] = useState(false);
    const timeoutRef = useRef(null);
    useEffect(() =>
    {
        const pop = popRef.current;
        const Optionslen = Options.length;
        setHeightDropdown(Optionslen * 10);
        setPosition({ top: pop.offsetHeight, bottom: 0, left: 0, right: 0 })
    }, []);
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
    return (
        <div
            className={`selectbox  ${props.className ?? ""}`}
            id='dropdown'
            style={{ ...props.style ?? "" }}
            onClick={() => { setIsClick(!isClick) }}
            ref={popRef}
            onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
        >
            <div className='dropdown' >
                <input className='' id={id ?? ""} name={props.name ?? ""} placeholder={placeholder ?? ""}
                    value={value ?? ""} 
                    autoComplete={("off").toString()} />
                <img src='../../images/Icondropdown.svg' className='icon_' />
                {props.children}
            </div>
            <div className={`dropdown-content ${props.classNameBody ?? ""} ${isClick ? "show" : ""}`}
                style={{
                    top: topmodal??"",
                    // bottom: Position.bottom,
                    // left: Position.left,
                    // right: Position.right,
                    // ...props.BodyStyle ?? "",
                }}>
                
                {Options && Options.map((item, index) =>
                {
                    return <div className='item' key={index} onClick={() => { setIsTitle(item); onChange(item) }} >{item.text}</div>
                })}
            </div>
        </div>
    )
}


export default Dropdown;