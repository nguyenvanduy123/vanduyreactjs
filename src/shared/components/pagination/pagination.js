import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import AppAction from 'redux/app/action';
import Dropdown from '../dropdown/dropdown';
import './pagination.scss';
import { useState } from 'react';

function Pagination (props) {

    const { NumberPage, value, ValueSelectLimit, id, placeholder, onChange, isHover, icon, top, style, OnChangeSelectNumPages, ShowStatus, CurrentPage, TotalRecord } = props;

    const [ValueSelect, setValueSelect] = useState({});
    const [Statuspage, setStatuspage] = useState("Hiển thị từ - trên tổng");

    useEffect(() =>
    {
        setValueSelect(ValueSelectLimit)
    }, [ValueSelectLimit]);

    useEffect(() =>
    {

        setValueSelect(ValueSelectLimit)
        setShowStatus()

    }, []);


    useEffect(() =>
    {

        setShowStatus()

    }, [ValueSelect]);
    useEffect(() =>
    {

        setShowStatus()

    }, [ValueSelectLimit, CurrentPage]);


    const setShowStatus = () =>
    {
        const start = ((CurrentPage - 1) * ValueSelect.value) + 1;
        const end = (CurrentPage * (ValueSelect.value));
        setStatuspage(`Hiển thị kết quả từ ${start ?? ""} - ${end} trên tổng ${TotalRecord ?? ""}`)
    }
    const [Options, setOptions] = useState(
        [{value:25,text:"25"},{value:10,text:"10"}
        ]
    )

    const [ValueStatus, setValueStatus] = useState(false);
    const onchangeStatus = (e) =>
    {
        setValueStatus(e)
        setValueSelect(e)
        OnChangeSelectNumPages(e)
    }
    return (
        <div className='Pagination'>
            <div className='numberPagination'>
                <span>Hiển thị</span>
                 <Dropdown  placeholder={"10 "} id="status" name="status"
                    Options={Options}
                    onChange={onchangeStatus}
                    value={ValueStatus.text}
                    style={{width:'53px',height:'24px',border: '1px solid #ACACAC',padding:'2px 2px 2px 5px'}}
                    topmodal={'-85px'}
                />
            </div>
            <div className='statusPagination'>
                 <span>{Statuspage}</span>

                </div>
            <div className='ListPagination'>
                    <ButtonNumber {...props} limit={ValueSelect.value}/>
                </div> 
        </div>
    )
}

function ButtonNumber(props){

    const { TotalRecord, CurrentPage, OnclickButtonChangePage, OnclickButtonNext, OnclickButtonPre, limit, LimitButton } = props;
    const renders = [];
    let totalVisiblePages = LimitButton
    let TotalPage = Math.ceil((TotalRecord / limit))

    let startPage = Math.max(1, CurrentPage - Math.floor(totalVisiblePages / 2));
    let endPage = Math.min(TotalPage, startPage + totalVisiblePages - 1);
    if (endPage - startPage < totalVisiblePages - 1) {
        startPage = Math.max(1, endPage - totalVisiblePages + 1);
    }
    if (TotalPage) {
        for (let i = startPage; i <= endPage; i++) {
            renders.push( <button className={` ${CurrentPage == i ? "active" : ""}`} onClick={(e) => OnclickButtonChangePage(e, i)}>{i}</button>)
        }
    }
    return (<>
        <button style={{marginRight:'10px',border:' 1px solid #D8D7D7'}} onClick={(e) => { OnclickButtonPre(e, CurrentPage <= 1 ? 1 : CurrentPage - 1) }}><img src="images/Iconright.svg" alt="" style={{transform:'rotate(180deg)'}}  /></button>
        {renders.map((item, index) =>
        {
            return <div key={index}>{item}</div>

        })}
        <button style={{marginLeft:'6px'}} onClick={(e) => OnclickButtonNext(e, CurrentPage >= TotalPage ? TotalPage : CurrentPage + 1)}><img src="images/Iconright.svg" alt="" /></button>
    </>

    )

}
export default Pagination;