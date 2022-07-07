import React from 'react'
import {useContext} from 'react'
import AgendaContext from '../context/AgendaContext'

function AgendaStats() {

  const {agenda} = useContext(AgendaContext)

  return (
    <div>
      <h4 className='feedback-stats'>{agenda.length} Upcoming Meetings</h4>
    </div>
  )
}

export default AgendaStats
