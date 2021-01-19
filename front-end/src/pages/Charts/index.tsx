import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Chart from 'react-apexcharts'
import axios from 'axios';
import './styles.scss'
import { barOptions, pieOptions } from './chart-options';
import { BASE_URL } from '../../core/utils/request';
import {buildBarSeries, getGenderChartData, getPlatformChartData} from './helpers'



type PieChartData = {
    labels: string[];
    series:number[];
}

type BarChartData = {
    x:string
    y:number
}

const initialPieData = {
    labels:[],
    series:[]
}

const Charts = () => {

    const [barChartData,setBarChartData] = useState<BarChartData[]>([]);
    const [platformData,setPlatformData] = useState<PieChartData>(initialPieData)
    const [genderData,setGenderData] = useState<PieChartData>(initialPieData)

    useEffect(()=> {
      async function getData() {
            const recordsResponse = await axios.get(`${BASE_URL}/records`);
            const gamesResponse = await axios.get(`${BASE_URL}/games`);



            const barData = buildBarSeries(gamesResponse.data, recordsResponse.data.content)
            setBarChartData(barData)

            const platformChartData = getPlatformChartData(recordsResponse.data.content);
            console.log(platformChartData)
            setPlatformData(platformChartData);

            const genderChartData = getGenderChartData(recordsResponse.data.content);
            console.log(genderChartData)
            setGenderData(genderChartData)

            
      }
        getData();
           
    },[])

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
                                height="450"
                                series = {[{data: barChartData}]}

                            />

                        </div>
                    </div>
                    <div className="charts">
                        <div className="platform-chart">
                            <h2 className="chart-title">Plataformas</h2>
                            <Chart
                                options={{...pieOptions, labels:platformData?.labels}}
                                type="donut"
                                series={platformData?.series}
                                width="350"
                            
                            />

                        </div>

                        <div className="gender-chart">
                            <h2 className="chart-title">Gêneros</h2>
                            <Chart
                                options={{...pieOptions, labels: genderData?.labels}}
                                type="donut"
                                series={genderData?.series}
                                width="350"
                            
                            />

                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Charts;