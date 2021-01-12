import React from 'react';
import {Link} from 'react-router-dom'
import {ReactComponent as Seta} from '../../assets/Seta.svg'
import './styles.scss';
const StartButton = () => (
    <a href="#" className="button-start">
        <div className ="bg-blue-button">
            <p> QUERO SABER QUAIS SÃO</p>
        </div>
        <div className="bg-orang-button">
            <Seta/>
        </div>
    </a>
);

export default StartButton;