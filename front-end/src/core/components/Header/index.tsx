import React from 'react';
import './styles.scss'
import {ReactComponent as GameIcon} from '../../assets/Vector.svg'

const Headers = () =>(
    <nav className="nav-bar">
        <GameIcon/>
        <p><span>Big Game</span> Survey</p>
    </nav>
);

export default Headers;