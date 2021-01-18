import React from 'react'
import { Link } from 'react-router-dom';
import Chart from 'react-apexcharts'
import './styles.scss'
import { barOptions } from './chart-options';


const chartData = [
    {

    }
]

const Charts = () => {
    return (
        <div className="charts-container">
            <div className="charts-content">
                <div className="option-bar">
                   <Link to="/records"> 
                        <button>Ver tabela</button>
                    </Link>
                </div>

                <div className="show-chart">
                    <div className="top-related">
                        <h1 className="top-related-title">Jogos mais votados</h1>
                        
                        <div className="games-container">
                            <Chart
                                options={barOptions}
                                type="bar"
                                width="900"
                                height="150"
                               
                            />

                        </div>
                    </div>
                    <div className="platform-chart">
                        <h2 className="chart-title">Plataformas</h2>
                            
                    </div>

                    <div className="gender-chart">
                        <h2 className="chart-title">Gêneros</h2>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default Charts;