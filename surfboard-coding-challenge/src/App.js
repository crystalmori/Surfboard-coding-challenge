import React, { useState } from "react";
import AgendaItem from "./AgendaItem";
import Header from "./components/Header";
import AgendaData from "./data/AgendaData";
import AgendaList from "./AgendaList";
import AgendaStats from "./components/AgendaStats";
import AgendaForm from "./components/AgendaForm";
import { v4 as uuidv4} from 'uuid'


function App() {

    const [agenda, setAgenda ] = useState(AgendaData)

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
    
    // const addAgenda = (newAgenda) => {
    //     setAgenda([newAgenda, ...agenda])
    // }

    return (
        <>
            <Header/>
            <div className='container'>
                <AgendaForm handleAdd={addAgenda}/>
                <AgendaStats agenda={agenda} />
                <AgendaList agenda={agenda}
                    handleDelete={deleteAgenda}
                />
            </div>
        </>
    )
}

export default App;