import React from 'react'
import Card from './shared/Card'
import PropTypes from 'prop-types'
import { FaTimes } from 'react-icons/fa'

function AgendaItem({item, handleDelete}) {

  return (
    <Card>
      <div className='num-display'>{item.id}</div>
      <button onClick={() => handleDelete(item.id)} className='close'><FaTimes color='purple'/></button>
      <div>{item.title}</div>
      <div>{item.timeEstimate}</div>
      <div className='text-display'>{item.text}</div>
      
    </Card>
  )
}

AgendaItem.propTypes = {
    item: PropTypes.object.isRequired
}


export default AgendaItem
