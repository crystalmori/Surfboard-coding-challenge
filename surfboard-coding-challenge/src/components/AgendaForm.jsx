import React, { useState, useContext, useEffect } from 'react'
import Card from '../shared/Card'
import Button from '../shared/Button'
import TimeEstimateSelect from './TimeEstimateSelect'
import AgendaContext from '../context/AgendaContext'

function AgendaForm( { handleAdd }) {
    // const [datetime, setDatetime] = useState('')
    const [title, setTitle] = useState('')
    const [timeEstimate, setTimeEstimate] = useState('30mins')
    const [text, setText] = useState('')
  
    const [btnDisabled, setBtnDisabled] = useState(false)
    const [message, setMessage] = useState('')

    const { addAgenda, agendaEdit, updateAgenda } = useContext(AgendaContext)

    useEffect(() => {
        if (agendaEdit.edit === true) {
            setBtnDisabled(false)
            setTitle(agendaEdit.item.title)
            setTimeEstimate(agendaEdit.item.timeEstimate)
            setText(agendaEdit.item.text)
        }
    }, [agendaEdit])
    // const handleDatetimeChange = (e) => {
    //     setDatetime(e.target.value)
    //     if (datetime.length === '') {
    //         setBtnDisabled(true)
    //         setMessage('Please pick a date and time')
    //     }
    // }

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

    const handleTitleChange = (e) => {
        if (title === '') {
            setBtnDisabled(true)
            setMessage(null)
        } else if (title !== '' && title.trim().length < 5) {
            setBtnDisabled(true)
            setMessage('Text must be at least 5 characters')
        } else {
            setBtnDisabled(false)
            setMessage(null)
        }
        setTitle(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (text.trim().length > 5) {
            const newAgenda = {
                text, 
                timeEstimate,
                title
            }

            if (agendaEdit.edit === true) {
                updateAgenda(agendaEdit.item.id, newAgenda)
            } else {
                addAgenda(newAgenda)
            }
            
            setTitle('')
            setText('')
        }
    }


  return (
    <div>
      <Card>
        <form onSubmit={handleSubmit}>
            <h2>Start a new agenda</h2>
            <TimeEstimateSelect select={(timeEstimate) => setTimeEstimate(timeEstimate)}/>
            <div className='input-group'>
                <input onChange={handleTitleChange} type='text' 
                    placeholder='Agenda Title' value={title}/>
                {/* <input onChange={handleDatetimeChange} type='datetime-local' value={datetime}/> */}
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
