
import React from 'react';
import { Link } from 'react-router-dom';
import MaskedInput from 'react-text-mask'

import './styles.scss'


type Props = {
    handleChangeMinDate: (min:string) => void;
    handleChangeMaxDate:(max:string) => void;
    minDate:string,
    maxDate:string,
    clearFilters: () => void
}


const RecordFilters = ({minDate,maxDate,handleChangeMinDate,handleChangeMaxDate,clearFilters }: Props) => {




    


    return (

        <div className="option-bar">

        <div>
            <MaskedInput mask={[/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]}  
                placeholder="Data inicial"
                guide={false}
                value={minDate} 
                onChange={event => handleChangeMinDate(event.target.value)}
                
            />

            <MaskedInput mask={[/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]} placeholder="Data Final"
                value={maxDate}
                guide={false}
                onChange={event => handleChangeMaxDate(event.target.value)}
            />


            <button onClick={clearFilters}>
                Limpar Pesquisa
            </button>
        </div>

        <div>
            <Link to="/charts">
                <button className="chart-record-button">
                        Ver gráfico
                </button>
            </Link>
        </div>

        </div>
    );
}

export default RecordFilters;
