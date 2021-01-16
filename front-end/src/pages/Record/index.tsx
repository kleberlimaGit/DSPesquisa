import React, { useEffect, useState } from 'react';
import moment from 'moment';
import 'moment/locale/pt-br';
import { RecordResponse } from '../../core/types/Records';
import { makeRequest } from '../../core/utils/request';
import Pagination from '@material-ui/lab/Pagination';
import './styles.scss'
const Record = () =>{
    
    
    
    const [recordResponse, setRecordResponse] = useState<RecordResponse>();
    const [activePage,setActivePage] = useState(0);
    
    moment.locale('pt-br')
    

    useEffect(() => {
        const params = {
            page: activePage,
            linesPerPage:12
        }
        makeRequest({url: '/records', params})
        .then(response => {
            setRecordResponse(response.data)
        })
    },[activePage])
    

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
                        
                            {recordResponse?.content.map(record =>(
                                <>
                                <tr>
                                    <td>{moment(record.moment).format('L')}</td>
                                    <td>{record.name}</td>
                                    <td>{record.age}</td>
                                    <td>{record.gamePlatform}</td>
                                    <td>{record.genreName}</td>
                                    <td>{record.gameTitle}</td>
                                </tr>    
                                </>
                            ))}
                            
                       
                    </tbody>
                </table>

                {recordResponse && (
                    
                    <>
                        <div className="pagination-record">
                            <Pagination  color="primary" count={recordResponse.totalPages} page={activePage + 1} 
                            onChange={(event,page)=>{ setActivePage(page-1)}}
                            hideNextButton 
                            hidePrevButton />
                        </div>


                    </>

                )}               
        
            </div>
        </div>
    );
}

export default Record;