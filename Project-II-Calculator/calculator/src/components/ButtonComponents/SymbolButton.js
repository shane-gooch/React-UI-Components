import React from 'react';
import './Button.css';


const SymbolButton = props => {
    return <button className={props.buttonStyle}>{props.text}</button>
}

export default SymbolButton; 