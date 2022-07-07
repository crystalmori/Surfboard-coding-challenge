import React from 'react'
import Card from './shared/Card'
import PropTypes from 'prop-types'
import { FaTimes, FaEdit } from 'react-icons/fa'
import {useContext} from 'react'
import AgendaContext from './context/AgendaContext'

function AgendaItem({item}) {

  const {deleteAgenda, editAgenda} = useContext(AgendaContext)

  return (
    <Card>
      <div className='num-display'>{item.id}</div>
      <button onClick={() => deleteAgenda(item.id)} className='close'><FaTimes color='purple'/></button>
      <button onClick={() => editAgenda(item)} className='edit'>
        <FaEdit color='purple'/>
      </button>
      <div>{item.title}</div>
      <div>({item.timeEstimate})</div>
      <div className='text-display'>{item.text}</div>
      
    </Card>
  )
}

AgendaItem.propTypes = {
    item: PropTypes.object.isRequired
}


export default AgendaItem
