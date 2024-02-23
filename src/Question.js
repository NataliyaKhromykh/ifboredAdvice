import { useState } from 'react';
import picture from './picture.png'

function Question(){

    const [advice, setAdvice] = useState('');



    const getCurrentDate = () => {
        const currentDate = new Date();
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        return currentDate.toLocaleDateString('en-US', options);
    };

    const getAdvice = async() =>{
        const response = await fetch(`http://www.boredapi.com/api/activity`);
        const data = await response.json();
        setAdvice(data.activity);
    }

    return(
        <div className='mainDiv'>
            <img className='backgroundPic' src={picture} alt='backgroundpic' />
            <div className='box'>
            <p className='date'>{getCurrentDate()}</p>
        <button onClick={getAdvice} className='btnSearch'>
        Maybe...
        </button>
        <p className='text'>{advice}</p>


    </div>

        </div>
    )
}
export default Question;
