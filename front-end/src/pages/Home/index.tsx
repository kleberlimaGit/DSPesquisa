import React from 'react';
import { Link } from 'react-router-dom';
import {ReactComponent as GamerImage} from '../../core/assets/GAMER.svg'
import StartButton from '../../core/components/ButtonStart';
import './styles.scss'

const Home = () => 
     (
        
        <div className="home-container">
        <div className="home-content">
            <div className="home-text">
                <h1>Quais jogos a<br/> galera gosta mais?</h1>
                <p>Clique no botão abaixo e saiba quais são os<br/> jogos que os gamers estão escolhendo!</p>
                <Link to="/records">
                    <StartButton/>
                </Link>
                
            </div>
            <div>
                <GamerImage className="gamer-img"/>
            </div>
        </div>
    </div>

    )


export default Home;