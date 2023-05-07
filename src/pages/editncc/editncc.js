import React,{useState,useEffect} from 'react';
import './editncc.scss';
import ButtonDropdown from 'shared/components/buttondropdown/buttondropdown';
import Dropdown from 'shared/components/dropdown/dropdown';
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
function Editncc(props) {
    let { id } = useParams();
    let history = useHistory();
    let path = history.location.pathname
    const [option, setOption] = useState(
        [{value:1,text:"Giao dịch"},
        {value:2,text:"Tạm dừng"}]
    )
    const [ValueStatus, setValueStatus] = useState(false);
    const onchangeStatus = (e) =>
    {
        setValueStatus(e)
    }
    const dispatch = useDispatch()
    const { data, loading } = useSelector(state => state.App.superliData)
    const [nhacungcap, setnhacungcap] = useState([])
    useEffect(() =>
    {
        dispatch({
            type: AppAction.FETCH_GET_DATA_ID,
            payload: {
                data: id
            }
        })
    }, [])
    useEffect(() =>
    {
        console.log(data);

        setnhacungcap(data)
    }, [data])
    // const mangedit = ()=>{
    //     return nhacungcap.filter((item,index)=>{
    //         item.id == id
    //     })
    // }
    // console.log(nhacungcap);
    return (
        <div className='editncc'>
            <div className='editncc-content'>
                <span className='editncc-content_title'>Thông tin nhà cung cấp</span>
                <div className='editncc-content_contain'>
                    <div className='editncc-content_item'>
                        <span className='_name'>Tên nhà cung cấp <span className='noted'>*</span></span>
                        <input className='_context' placeholder='Nhập tên nhà cung cấp'/>
                    </div>
                    <div className='editncc-content_item'>
                        <span className='_name'>Mã code <span className='noted'>*</span></span>
                        <input className='_context' placeholder='Nhập mã code'/>
                    </div>
                   
                    <div className='editncc-content_item'>
                        <span className='_name'>Tỉnh/ thành phố <span className='noted'>*</span></span>
                        <Dropdown  placeholder={"Tỉnh/ thành phố"} id="status" name="status"
                            Options={option}
                            onChange={onchangeStatus}
                            value={ValueStatus.text}
                            style={{width:'346px'}}
                        />
                    </div>
                    <div className='editncc-content_item'>
                        <span className='_name'>Địa chỉ cụ thể </span>
                        <input className='_context' placeholder='Địa chỉ cụ thể'/>
                    </div>
                   
                    <div className='editncc-content_item'>
                        <span  className='_name'>Danh mục <span className='noted'>*</span></span>
                        <Dropdown  placeholder={"Danh mục"} id="status" name="status"
                            Options={option}
                            onChange={onchangeStatus}
                            value={ValueStatus.text}
                            style={{width:'346px'}}
                        />
                    </div>
                    <div className='editncc-content_item'>
                        <span  className='_name'>Công nợ <span className='noted'>*</span></span>
                        <Dropdown  placeholder={"Nhập mã công nợ"} id="status" name="status"
                            Options={option}
                            onChange={onchangeStatus}
                            value={ValueStatus.text}
                            style={{width:'346px'}}
                        />
                    </div>
                    <div className='editncc-content_item'>
                        <span className='_name'>Quận/ huyện <span className='noted'>*</span></span>
                        <Dropdown  placeholder={"Quận/ huyện"} id="status" name="status"
                            Options={option}
                            onChange={onchangeStatus}
                            value={ValueStatus.text}
                            style={{width:'346px'}}
                        />
                    </div>
                    <div className='editncc-content_item'>
                        <span className='_name'>Trạng thái</span>
                        <Dropdown  placeholder={"Giao dịch"} id="status" name="status"
                            Options={option}
                            onChange={onchangeStatus}
                            value={ValueStatus.text}
                            style={{width:'346px'}}
                        />
                        
                    </div>
                    <div className='editncc-content_item'>
                        <span  className='_name'>Số điện thoại <span className='noted'>*</span></span>
                        <input className='_context' placeholder='Nhập số điện thoại'/>
                    </div>
                    <div className='editncc-content_item'>
                        <span  className='_name'>Email</span>
                        <input className='_context' placeholder='abc@gmail.com'/>
                    </div>
                    <div className='editncc-content_item'>
                        <span className='_name'>Phường/ xã <span className='noted'>*</span></span>
                        <Dropdown  placeholder={"Phường/ xã"} id="status" name="status"
                            Options={option}
                            onChange={onchangeStatus}
                            value={ValueStatus.text}
                            style={{width:'346px'}}
                        />
                    </div>
                   
                </div>
            </div>
            <div className='editncc-bottom'>
                <div className='editncc-bottom_back' onClick={()=>{history.push('/nhacungcap')}}>
                    <img src="images/Icondropdown.svg" alt="" />
                    <span>Quay lại</span>
                </div>
                <div className='editncc-bottom_btn'>
                    <button className='editncc-bottom_btndel'>Hủy bỏ</button>
                    <button className='editncc-bottom_btnedit'>Lưu</button>
                </div>
            </div>
        </div>
    )
}
export default Editncc;