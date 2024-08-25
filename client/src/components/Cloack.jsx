import React, { useState, useEffect } from 'react'

const formateTime = (date) => {
    const h = date.getHours().toString().padStart(2, '0')
    const m = date.getMinutes().toString().padStart(2, '0')
    
    return (`${h} : ${m}`)
}

const Cloack = () => {
    const [time, setTime] = useState(formateTime(new Date()))

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(formateTime(new Date()))
        }, 1000)

        return () => {
            clearInterval(interval)
        }
    }, [])

    return <span className='clock'>{time}</span>
}

export default Cloack;
