import React from 'react'
import AgendaItem from './AgendaItem'


function AgendaList({agenda, handleDelete}) {
    if (!agenda || agenda.length === 0) {
        return <p>No agendas Yet</p>
    }


    return (
        <div className='feedback-list'>
            {agenda.map((item) => (
                <AgendaItem key={item.id} item={item}
                handleDelete={handleDelete} />
            ))}
        </div>
    )
}


export default AgendaList