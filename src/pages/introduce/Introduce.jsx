import React, {useState} from 'react';
import './Introduce.css'
import Dropdown from '../../components/dropdown/Dropdown';
import { useNavigate } from 'react-router-dom';

const Introduce = () => {

    const difficulty = ["easy","medium","hard"]
    const [difficultyChange, setDifficultyChange] =useState('');
    console.log(difficultyChange)
    const navigate = useNavigate();
    const Total_Questions = 7;

    const startQuiz = () => {
        if(difficultyChange){
            navigate(`/quiz/${difficultyChange}/${Total_Questions}`)
        }
    }

  return (
    <div className='introduce'>
       <div className="introduce-container">
        <img src="data:image/png;base64,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" alt="" />
        <Dropdown data={difficulty} setDifficultyChange={setDifficultyChange} />
        <div onClick={startQuiz} className='introduce-btn'>Başla</div>
       </div>
    </div>
  )
}

export default Introduce;