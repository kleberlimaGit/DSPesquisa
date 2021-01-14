import React from 'react';
import './styles.scss'
import {ReactComponent as GameIcon} from '../../assets/Vector.svg'
import { Link } from 'react-router-dom';

const Headers = () =>(
    <nav className="nav-bar">
        <GameIcon/>
        <Link to="/" className="Logo"><span>Big Game</span> Survey</Link>
    </nav>
);

export default Headers;