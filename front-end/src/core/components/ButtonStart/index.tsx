import React from 'react';
import {ReactComponent as Seta} from '../../assets/Seta.svg'
import './styles.scss';
const StartButton = () => (
    <div className="button-start">
        <div className ="bg-blue-button">
            <p className="color-text"> QUERO SABER QUAIS SÃO</p>
        </div>
        <div className="bg-orang-button">
            <Seta className="button-arrow"/>
        </div>
    </div>
);

export default StartButton;