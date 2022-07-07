import React from 'react'
import AgendaItem from './AgendaItem'
import { motion, AnimatePresence } from 'framer-motion'


function AgendaList({agenda, handleDelete}) {
    if (!agenda || agenda.length === 0) {
        return <p>No agendas Yet</p>
    }


    return (
        <div className='feedback-list'>
        <AnimatePresence>
            {agenda.map((item) => (
                <motion.div
                    key={item.id}
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}
                >
                <AgendaItem key={item.id} item={item}
                handleDelete={handleDelete} />
                </motion.div>
            ))}
        </AnimatePresence>
        </div>
    )
}


export default AgendaList