import React, { useState } from 'react'
import Card from '../shared/Card'
import Button from '../shared/Button'
import TimeEstimateSelect from './TimeEstimateSelect'

function AgendaForm( { handleAdd }) {
    const [datetime, setDatetime] = useState('')
    const [timeEstimate, setTimeEstimate] = useState('30mins')
    const [text, setText] = useState('')
  
    const [btnDisabled, setBtnDisabled] = useState(false)
    const [message, setMessage] = useState('')

    const handleDatetimeChange = (e) => {
        setDatetime(e.target.value)
        if (datetime.length === '') {
            setBtnDisabled(true)
            setMessage('Please pick a date and time')
        }
    }

    const handleTextChange = (e) => {
        if (text === '') {
            setBtnDisabled(true)
            setMessage(null)
        } else if (text !== '' && text.trim().length < 5) {
            setBtnDisabled(true)
            setMessage('Text must be at least 5 characters')
        } else {
            setBtnDisabled(false)
            setMessage(null)
        }
        setText(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDeafult()
        if (e.trim().length > 5) {
            const newAgenda = {
                // timeEstimate,
                text
            }
    
            console.log(newAgenda);
        }
     
    }

  return (
    <div>
      <Card>
        <form onSubmit={handleSubmit}>
            <h2>Start a new agenda</h2>
            <TimeEstimateSelect select={(timeEstimate) => setTimeEstimate(timeEstimate)}/>
            <div className='input-group'>
                <input onChange={handleDatetimeChange} type='datetime-local' value={datetime}/>
                <input onChange={handleTextChange} type='text' 
                    placeholder='Agenda Description' value={text}/>
                <Button type='submit' isDisabled={btnDisabled}>Add</Button>
            </div>

            {message && <div className='message'>{message}</div>}

        </form>      
      </Card>
    </div>
  )
}

export default AgendaForm
