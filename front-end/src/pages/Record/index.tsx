import React from 'react';
import './styles.scss'

const Record = () =>{
    return (
        <div className="record-container">
            <div className="record-content">
                <div className="option-bar">
                    <form action="#">
                        <input type="text" name="min" id="start-date" placeholder="Data Inicial"/>
                        <input type="text" name="max" id="start-date" placeholder="Data Final"/>
                        <span>Limpar Pesquisa</span>

                        <button className="button-submit">Ver Gráfico</button>
                    </form>
                </div>

                <table className="table-record" cellPadding="0" cellSpacing="0">
                    <thead>
                        <tr>
                            <th>Instante</th>
                            <th>Nome</th>
                            <th>Idade</th>
                            <th>Plataforma</th>
                            <th>Gênero</th>
                            <th>Título do game</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>20/08/2020 13:45</td>
                            <td>João da Silva</td>
                            <td>23</td>
                            <td>Playstation</td>
                            <td>Ação - Aventura</td>
                            <td>The Last of Us 2</td>
                        </tr>
                    </tbody>
                </table>


            </div>
        </div>
    );
}

export default Record;