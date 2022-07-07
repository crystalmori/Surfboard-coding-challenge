import { createContext, useState } from "react";
import { v4 as uuidv4} from 'uuid'

const AgendaContext = createContext()

export const AgendaProvider = ({children}) => {

    const [agenda, setAgenda] = useState([
        {
            id: 1,
            title: 'A list of meeting topics',
            timeEstimate: '15mins',
            text: 'This is context 1',
          },
          {
            id: 2,
            title: 'Navigate between topics',
            timeEstimate: '30mins',
            text: 'This is context 2',
          },
          {
            id: 3,
            title: 'Add, delete and edit topics',
            timeEstimate: '45mins',
            text: 'This is context 3',
          },
    ])

    const [agendaEdit, setAgendaEdit] = useState({
        item: {},
        edit: false
    })

    const updateAgenda = (id, updItem) => {
        setAgenda(
            agenda.map((item) => (
                item.id === id ? {...item, ...updItem} : item
            ))
        )
    }

    const deleteAgenda = (id) => {
        if (window.confirm('Are you sure you want to delete this agenda?')) {
            setAgenda(agenda.filter((item) => item.id !== id))
        }
    }  

    const addAgenda = (newAgenda) => {
        newAgenda.id = uuidv4()
        console.log(newAgenda);
        setAgenda([newAgenda, ...agenda])
    }

    const editAgenda = (item) => {
        setAgendaEdit({
            item,
            edit: true
        })
    }

    return <AgendaContext.Provider value={{
        agenda,
        deleteAgenda,
        addAgenda,
        editAgenda,
        agendaEdit,
        updateAgenda
    }}>
        {children}
    </AgendaContext.Provider>
}

export default AgendaContext