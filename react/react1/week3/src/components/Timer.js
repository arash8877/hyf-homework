import {useState, useEffect} from 'react';
import './Timer.css'

const Timer = () => {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
      const timer = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);

      }, 1000);
  
      return () => clearInterval(timer);
    }, []);
  
    return <div className='timer'>{`You have been on the website for ${seconds} seconds`}</div>;
}

export default Timer;