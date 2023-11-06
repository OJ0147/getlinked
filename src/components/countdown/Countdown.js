import {useState, useEffect } from 'react';
import './Countdown.css'
import { getRemainingTimeUntilMsTimestamp } from './Utils/CountdownUtils';

const defaultRemainingTime ={
    seconds: '00',
    minutes: '00',
    hours: '00',
 }

const Countdown = ({countdownTimestampMs }) => {
    const [remainingTime , setRemainigTime]  = useState(defaultRemainingTime);

    useEffect(()=>{
        const intervalid = setInterval(()=> {
            updateRemainingTime(countdownTimestampMs);

        }, 1000);
        return () => clearInterval(intervalid)
    },[countdownTimestampMs])
    function updateRemainingTime(countdown){
       setRemainigTime(getRemainingTimeUntilMsTimestamp(countdown));
    }
 
  return (
    <div className='countdown-wrapper'>
        <span className='time-value'>{remainingTime.hours}</span>
        <span className='time-alph'>H</span> &nbsp;
        <span className='time-value'>{remainingTime.minutes}</span>
        <span className='time-alph'>M</span> &nbsp;
        <span className='time-value'>{remainingTime.seconds}</span>
        <span className='time-alph'>S</span>
    </div>
  )
}

export default Countdown