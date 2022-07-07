import React from "react";
import Header from "./components/Header";
import AgendaList from "./AgendaList";
import AgendaStats from "./components/AgendaStats";
import AgendaForm from "./components/AgendaForm";
import { AgendaProvider } from "./context/AgendaContext";

function App() {

    return (
        <AgendaProvider>
            <Header/>
            <div className='container'>
                <AgendaForm />
                <AgendaStats />
                <AgendaList />
            </div>
        </AgendaProvider>
    )
}

export default App;