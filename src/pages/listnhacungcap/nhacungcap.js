import React from 'react';
import MenuContainer from 'shared/components/Menu/menu';
import HeaderContainer from 'shared/components/Header/Header';
import FilterContainer from 'shared/components/Filter/Filter';
import TableContent from 'shared/components/TableContent/TableContent';
import './nhacungcap.scss';
function Nhacungcap(props) {
    return (

        <div className='nhacungcap'>
            <FilterContainer />
            <TableContent />
        </div>
    )
}
export default Nhacungcap;