import React from 'react'

function AgendaStats( {agenda}) {
  return (
    <div>
      <h4 className='feedback-stats'>{agenda.length} Upcoming Meetings</h4>
    </div>
  )
}

export default AgendaStats
