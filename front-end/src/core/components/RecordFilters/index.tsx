
import React, { useState } from 'react';
import './styles.scss'

export type FilterForm = {
    min?:string,
    max?:string,
}

type Props = {
    onSearch: (filter: FilterForm) => void;
    children?:React.ReactNode;
}


const RecordFilters = ({onSearch,children}:Props) => {

    const [minDate, setMinDate] = useState('');
    const [maxDate, setMaxDate] = useState('');
    

    const handleBlurMinDate = (min:string) => {
        setMinDate(min)

        onSearch({min, max: maxDate})
    }
    const handleBlurMaxDate = (max:string) => {
        setMaxDate(max)

        onSearch({min: minDate, max})
    }

    const clearFilters = () => {
        setMinDate('')
        setMaxDate('');

        onSearch({min:(''), max:('')})
    }

    return (
        
        <div className="option-bar">
                    
                        <input type="text" name="min"   value={minDate} 
                        onChange={event => handleBlurMinDate(event.target.value)}
                        placeholder="Data Inicial"/>


                        <input type="text" name="max" value={maxDate} 
                        onChange={event=> handleBlurMaxDate(event.target.value)}
                        placeholder="Data Final"/>
                        
                        <button onClick={clearFilters}>
                            Limpar Pesquisa
                        </button>


                </div>
    );
}

export default RecordFilters;
