import React, { useState, useEffect, useRef } from 'react';
import "./buttondropdown.scss"
function ButtonDropdown(props)
{
    const [Position, setPosition] = useState({ top: 0, bottom: 0, left: 0, right: 0, });
    const [isClick, setIsClick] = useState(false);
    const popRef = useRef()
    const { Options, value, id, placeholder, onChange ,text,backgroudcolor} = props;
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
    const [val, setValue] = useState(value)
    const setTextstatus = (status) =>
    {   
       var cs = Options.filter((i)=>{
            return status==i.value
        })
        return cs[0].text;
    }
    
    return (
        <div
            className={`btnselectbox  ${props.className ?? ""}`}
            id='dropdown'
            style={{ ...props?.style ?? "" }}
            onClick={() => { setIsClick(!isClick) }}
            ref={popRef}
            onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
        >
            <div className='btndropdown' style={{background:backgroudcolor}}>
                <input className='' id={id ?? ""} name={props.name ?? ""} placeholder={placeholder ?? ""}
                    autoComplete={("off").toString()} 
                    value={setTextstatus(value) ?? ""}/>
                <img src='../../images/Icondropdown2.svg' />
            </div>
            <div className={`btndropdown-content ${props.classNameBody ?? ""} ${isClick ? "show" : ""}`}
                style={{
                    // top: top??"",
                    // bottom: 0,
                    // left: Position.left,
                    // right: Position.right,
                    // ...props.BodyStyle ?? "",
                }}>

                {Options && Options.map((item, index) =>
                {   
                    if(val != item.value){
                        return <div className='item' key={index} onClick={() => { setIsTitle(item); onChange(item);setValue(item.value)}} >{item.text}</div>
                    }
                })}
            </div>
        </div>
    )
}


export default ButtonDropdown;