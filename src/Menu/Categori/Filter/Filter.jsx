import React from 'react';
import './Filter.sass'
function Filter(props) {
    return (
        <>
        
        <div className='filter-base'>
            <p>Фильтры:</p>
            <FILTER-ELEMENT name={'model'} modelItem={['1','2','3']}/>
            <FILTER-ELEMENT name={'price'} price={[10,10000]}/>
            <FILTER-ELEMENT color={'color'} modelItem={['...']}/>
        </div>
        
        </>
    );
}

export default Filter;