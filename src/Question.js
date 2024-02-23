import { useState } from 'react';
import picture from './picture.png'

function Question(){

    const [advice, setAdvice] = useState('');



    const getCurrentDate = () => {
        const currentDate = new Date();
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        return currentDate.toLocaleDateString('en-US', options);
    };

  const getAdvice = async () => {
    try {
      const response = await fetch(`http://www.boredapi.com/api/activity`);
      const data = await response.json();

      if (data.activity) {
        setAdvice(data.activity);
      } else {
        setAdvice('No advice available at the moment.');
      }
    } catch (error) {
      console.error('Error fetching advice:', error);
      setAdvice('An error occurred while fetching advice.');
    }
  };

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
