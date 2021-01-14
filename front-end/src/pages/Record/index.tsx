import React from 'react';
import './styles.scss'

const Record = () =>{
    return (
        <div className="record-container">
            <div className="record-content">
                <div className="option-bar">
                    <form action="#">
                        <input type="text" name="startDate" id="start-date" placeholder="Data Inicial"/>
                        <input type="text" name="endDate" id="start-date" placeholder="Data Final"/>
                        <span>Limpar Pesquisa</span>

                        <button className="button-submit">Ver Gráfico</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Record;