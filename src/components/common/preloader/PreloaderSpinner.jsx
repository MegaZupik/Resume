import React from 'react';
import preloaderSpinner from '../../../assets/img/Spinner.gif'



export default function PreloaderSpinner(props) {
    return (
        <div style={{ height: `${props.height}vh` }} className="PreloaderWrapp">
            <img className='PreloaderItem' src={preloaderSpinner} alt="" />
        </div>
    )
}