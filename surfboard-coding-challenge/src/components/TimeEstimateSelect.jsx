import React, { useState } from 'react'

function TimeEstimateSelect( { select }) {

    const [selected, setSelected] = useState('30mins')
    const radioButtons = ['15mins', '30mins', '45mins', '60mins']

    const handleChange = (e) => {
        setSelected(e.currentTarget.value);
        select(e.currentTarget.value)
    }

    return (
        <ul className='rating'>
            {radioButtons.map((num, index) => (
                <li key={index}>
                    <input 
                    type='radio'
                    id={`num${num}`}
                    name='rating'
                    value={`${num}`}
                    onChange={handleChange}
                    checked={selected === num}
                    />
                    <label htmlFor={`num${num}`}>{`${num}`}</label>
                </li>
            ))}
        </ul>
    )

}

export default TimeEstimateSelect
