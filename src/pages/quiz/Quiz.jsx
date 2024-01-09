import React from 'react';
import './Quiz.css'
import { useParams } from 'react-router-dom';

const Quiz = () => {
  const {difficulty,amount} =useParams();
  return (
    <div className='quiz'>
        {difficulty}   -  {amount}
    </div>
  )
}

export default Quiz