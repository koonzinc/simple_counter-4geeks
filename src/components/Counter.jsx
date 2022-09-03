import React, { useEffect, useState } from 'react';
import {ImClock} from 'react-icons/im';

const Counter = () => {
    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [hours, setHours] = useState(0);
    const [days, setDays] = useState(0);
    const [weeks, setWeeks] = useState(0);
    const [months, setMonths] = useState(0);
    
    
/*
    useEffect(() => {
        const secondInterval = setInterval(() => {
            setSeconds(seconds => seconds + 1);
        }, 1000);
        return () => clearInterval(secondInterval);
    }, []);
*/

    useEffect(() => {
        const secondInterval = setInterval(() => {
            setSeconds(seconds+1)
            if(seconds===60){
                setSeconds(0);
                setMinutes(minutes+1);
            }
            if(minutes===60){
                setMinutes(0);
                setHours(hours+1);
            }
            if(hours===24){
                setHours(0);
                setDays(days+1);
            }
            if(days===7){
                setDays(0);
                setWeeks(weeks+1);
            }
            if(weeks===4){
                setWeeks(0);
                setMonths(months+1);
            }
            if(months===12){
                setMonths(0);
            }
        }, 1000);
        return() => {
            clearInterval(secondInterval)
        }
    })



  return (
    <div className='container-fluid bg-dark'>
        <div className='row text-center text-white py-4 display-1' style={{margin: '0rem 12rem'}}>
            <div className='col-sm'>
                <div className='bg-secondary py-3' style={{height: '160px', borderRadius: '16px'}}>
                    <ImClock className='pb-3' />
                </div>
            </div>
            <div className='col-sm'>
                <div className='bg-secondary py-3 font-weight-bold' style={{height: '160px', borderRadius: '16px'}}>
                    {months}
                </div>
            </div>
            <div className='col-sm'>
                <div className='bg-secondary py-3 font-weight-bold' style={{height: '160px', borderRadius: '16px'}}>
                    {weeks}
                </div>
            </div>
            <div className='col-sm'>
                <div className='bg-secondary py-3 font-weight-bold' style={{height: '160px', borderRadius: '16px'}}>
                    {days}
                </div>
            </div>
            <div className='col-sm'>
                <div className='bg-secondary py-3 font-weight-bold' style={{height: '160px', borderRadius: '16px'}}>
                    {hours}
                </div>
            </div>
            <div className='col-sm'>
                <div className='bg-secondary py-3 font-weight-bold' style={{height: '160px', borderRadius: '16px'}}>
                    {minutes}
                </div>
            </div>
            <div className='col-sm'>
                <div className='bg-secondary py-3 font-weight-bold' style={{height: '160px', borderRadius: '16px'}}>
                    {seconds}
                </div>
            </div>
           
            
        </div>
    </div>
  )
}

export default Counter