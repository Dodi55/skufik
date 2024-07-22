import React from 'react';
import './ErrorComponent.sass'

function ErrorComponent(props) {
    return (
        <div className='error-block'>
            <div className="container">
                <h1 className='error-h1'>Ошибка 
                <span className='error-name'> 4</span>
                <span className='error-name'>0</span>
                <span className='error-name'>4</span>
                </h1>
            </div>
        </div>
    );
}

export default ErrorComponent;