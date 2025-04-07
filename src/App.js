
import { useState } from 'react';
import './App.css';

function App() {
  const [weight, setWeight] = useState('')
  const [height, setHeight] = useState('')
  const [bmi, setBmi] = useState('')
  const [message, setMessage] = useState('')

  let calcBmi = (e) =>{
    e.preventDefault()

    if (weight === 0 || height === 0){
      alert('Please enter a valid weight and height')
    }else {
      let bmi = (weight / (height * height) * 703)
      setBmi(bmi.toFixed(1))

      if(bmi < 25){
        setMessage('You are underweight')
      }else if(bmi >=25 && bmi <= 30) {
        setMessage('You are a healthy weight')
      }else {
        setMessage('You are overweight')
      }
    }
  }
  let reload = () => {
    window.location.reload()
  }
  return (
    <div className="App">
      <div className="container">
        <h2 className='center'>BMI Calculator</h2>
        <form onSubmit={calcBmi}>

          <div className='label'>
            <label >Weight (lbs)</label>
            <input value={weight} onChange={e => setWeight(e.target.value)} placeholder='Enter Weight'/>
          </div>

          <div className='label'>
            <label>Height (in)</label>
            <input value={height} onChange={e => setHeight(e.target.value)} placeholder='Enter Height'/>
          </div>

          <div className='button'>
            <button className='btn' type='submit'>Submit</button>
            <button className='btn btn-outline' onClick={reload} type='submit'>Reload</button>
          </div>
        </form>

        <div className="center">
          <h3>Your BMI is: {bmi}</h3>
          <p>{message}</p>
        </div>

      </div>
    </div>
  );
}

export default App;
