
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MaskedInput from 'react-text-mask'

import './styles.scss'

export type FilterForm = {
    min?: string,
    max?: string,
}

type Props = {
    onSearch: (filter: FilterForm) => void;
}


const RecordFilters = ({ onSearch }: Props) => {

    const [minDate, setMinDate] = useState('');
    const [maxDate, setMaxDate] = useState('');


    const handleChangeMinDate = (min: string) => {
        setMinDate(min)
        if(min.length ===10 || min.length === 0){
            onSearch({ min, max: maxDate })
        }
        
    }
    const handleChangeMaxDate = (max: string) => {
        setMaxDate(max)
        if(max.length === 10 || max.length === 0){
            onSearch({ min: minDate, max })
        }

        
    }

    const clearFilters = () => {
        setMinDate('')
        setMaxDate('');

        onSearch({ min: (''), max: ('') })
    }


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
