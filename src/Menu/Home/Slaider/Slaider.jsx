import React from 'react';
import './Slaider.sass'
import SlaiderItem from './SlaiderItem/SlaiderItem';
import { slaiderBd } from './slaider-bd';

function Slaider(props) {
    return (
        <div className='slaider'>
            <div className='slaider-translate'>
                {slaiderBd.map(el => <SlaiderItem key={el.id} style={el.style}/>)}
            </div>
        </div>
    );
}

export default Slaider;