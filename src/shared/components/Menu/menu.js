import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import AppAction from 'redux/app/action';
import './menu.scss';
import { useState } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
function MenuContainer (props) {
    let history = useHistory();
    const dispatch = useDispatch()
    const { data, loading } = useSelector(state => state.App.sampleData)
    useEffect(() => {
        dispatch({
            type: AppAction.FETCH_SAMPLE_1,
            payload: {}
        })
    }, [])

    const [menu,SetMenu] = useState([
        {id:1,icon:'../../images/icontongquan.svg',title:'Tổng quan',url:'/'},
        {id:2,icon:'../../images/danhmuc.svg',title:'Danh mục NCC',url:'/danhmucncc'},
        {id:3,icon:'../../images/dsnhacungcap.svg',title:'Danh sách NCC',url:'/nhacungcap'},
        {id:4,icon:'../../images/iconlsnhaphang.svg',title:'Lịch sử đặt hàng',url:'/lichsudathang'},
        {id:5,icon:'./../images/Iconbanggia.svg',title:'Bảng báo giá',url:'/bangbaogia'},
        {id:6,icon:'../../images/Iconlstheodoi.svg',title:'Lịch sử theo dõi',url:'/lichsutheodoi'}
    ])
    const [path,SetPath] = useState(history.location.pathname)
    const onChangeMenu = (id) => {
        switch (id) {
            case 1:
                history.push('/')
                SetPath('/')
                break;
            case 2:
                history.push('/danhmucncc')
                SetPath('/danhmucncc')
                break;
            case 3:
                history.push('/nhacungcap')
                SetPath('/nhacungcap')

                break;
            case 4:
                history.push('/lichsudathang')
                SetPath('/lichsudathang')

                break;
            case 5:
                history.push('/bangbaogia')
                SetPath('/bangbaogia')

                break;
            case 6:
                history.push('/lichsutheodoi')
                SetPath('/lichsutheodoi')
                break;
            
            default:
                break;
        }
    }

    const oncheckurl =(url,id) =>{
        var ac = ""
        if(path=='/'){
            ac = id==1?"active":""
        }else{
            if(id!=1){
                ac = path.includes(url) ? "active" : ""
            }
        }
        return ac
    }
    return (
        <div className='Menu'>
            <div className='Container'>
                <div className='Top'>
                    <img src="../../images/Iconmenu.svg" alt="" />
                    <img src="../../images/Logo.svg" alt="" />
                </div>
                <div className='Content'>
                    {menu && menu.map((item,index)=>{
                        return <div className={`Item ${props.classNameBody ?? ""} ${oncheckurl(item.url,item.id)}`} onClick={()=>{onChangeMenu(item.id)}} key={index}>
                        <img src={item.icon} alt="" />
                        <span>{item.title}</span>
                        </div>
                    })}
                    
                    
                </div>
            </div>
        </div>
    )
}
export default MenuContainer;