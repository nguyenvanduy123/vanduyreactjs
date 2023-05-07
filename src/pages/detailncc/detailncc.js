import React,{useState,useRef,useEffect} from 'react';
import './detailncc.scss';
import Dropdown from 'shared/components/dropdown/dropdown';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useParams,
    useHistory
  } from "react-router-dom";
function Detailncc(props) {
    let { id } = useParams();
    let history = useHistory();
    let path = history.location.pathname
    let nhacungcap = history.location.state
    const [option, setOption] = useState(
        [{value:1,text:"Giao dịch"},
        {value:2,text:"Tạm dừng"}]
    )
    const [isClick, setIsClick] = useState(false);
    const timeoutRef = useRef(null);
    const [isHovering, setIsHovering] = useState(false);
    const [status, setstatus] = useState(nhacungcap.status);
    const [trangthai, setTrangthai] = useState("");
    const [color, setcolor] = useState("");

    const popRef = useRef()

    useEffect(() => {
        if(status==2){
            setTrangthai("Tạm dừng")
            setcolor("#FF3434")
        }else {
            setTrangthai("Giao dịch")
            setcolor("#008A5A")
        }
    }, [status]);
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
        <div className='detailncc'>
            <div className='detailncc-top' 
             onClick={() => { setIsClick(!isClick) }}
             ref={popRef}
             onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
            >
                <div className='detailncc-top_contain'>
                    <img src="images/Icondoilai.svg" alt="" />
                    <span>Trạng thái</span>
                </div>
                <div className={`detailncc-top_modal ${props.classNameBody ?? ""} ${isClick ? "show" : ""}`}>
                
                    {option && option.map((item, index) =>
                    {
                        return <div className='item' key={index} onClick={()=>{setstatus(item.value)}}>{item.text}</div>
                    })}
                </div>
            </div>
            <div className='detailncc-content'>
                <span className='detailncc-content_title'>Thông tin nhà cung cấp</span>
                <div className='detailncc-content_contain'>
                    <div className='detailncc-content_item'>
                        <span className='_name'>Tên nhà cung cấp</span>
                        <span className='_context'>: {nhacungcap.namncc}</span>
                    </div>
                    <div className='detailncc-content_item'>
                        <span  className='_name'>Danh mục</span>
                        <span className='_context'>: {nhacungcap.danhmuc}</span>
                    </div>
                    <div className='detailncc-content_item'>
                        <span  className='_name'>Điện thoại</span>
                        <span className='_context'>: {nhacungcap.phone}</span>
                    </div>
                    <div className='detailncc-content_item'>
                        <span  className='_name'>Email</span>
                        <span className='_context'>: {nhacungcap.email}</span>
                    </div>
                    <div className='detailncc-content_item'>
                        <span  className='_name'>Công nợ</span>
                        <span className='_context'>: {nhacungcap.macongno}</span>
                    </div>
                    <div className='detailncc-content_item'>
                        <span className='_name'>Mã code</span>
                        <span className='_context'>: {nhacungcap.macode}</span>
                    </div>
                    <div className='detailncc-content_item'>
                        <span className='_name'>Trạng thái</span>
                        <span className='_context' style={{color:color}}>: {trangthai}</span>
                    </div>
                    <div className='detailncc-content_item'>
                        <span className='_name'>Tỉnh/ thành phố</span>
                        <span className='_context'>: {nhacungcap.diachi}</span>
                    </div>
                    <div className='detailncc-content_item'>
                        <span className='_name'>Quận/ huyện</span>
                        <span className='_context'>: {nhacungcap.diachi}</span>
                    </div>
                    <div className='detailncc-content_item'>
                        <span className='_name'>Phường/ xã</span>
                        <span className='_context'></span>
                    </div>
                    <div className='detailncc-content_item'>
                        <span className='_name'>Địa chỉ cụ thể</span>
                        <span className='_context'>: {nhacungcap.diachi}</span>
                    </div>
                </div>
            </div>
            <div className='detailncc-bottom'>
                <div className='detailncc-bottom_back' onClick={()=>{history.push('/nhacungcap')}}>
                    <img src="images/Icondropdown.svg" alt="" />
                    <span>Quay lại</span>
                </div>
                <div className='detailncc-bottom_btn'>
                    <button className='detailncc-bottom_btndel'>Xóa</button>
                    <button className='detailncc-bottom_btnedit'>Sửa</button>
                </div>
            </div>
        </div>
    )
}
export default Detailncc;