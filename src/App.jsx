import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './Todo'

function App() {
  return (
    <>
      <h3>Vite + React</h3>
      <Todo
        task='Learn React'
        isDone={true}>
      </Todo>

      <Todo
        task='Explore Core Concept'
        isDone={false}>
      </Todo>

      <Todo
        task='Try JSX'
        isDone={true}>
      </Todo>
      {/* <Device name='laptop' price='55'></Device>
      <Device name='mobile' price='17000'></Device>
      <Device name='watch' price='3000'></Device>
      <Person></Person>
      <Student grade='7' score='99'></Student>
      <Student grade={12}score={85}></Student>
      <Student></Student>
      <Developer></Developer> */}
    </>
  )
}

function Device(props) {
  // console.log(props);
  return <h2>This device: {props.name}price: {props.price} </h2>
}

function Person() {
  const age = 25;
  const money = 500;
  const person = { name: 'Rakib', age: 26 }
  return <h3>I am {person.name} with age {person.age} and have {money} Taka</h3>
}

// const { grade, score } = { grade: '7', score: '99' };
function Student({ grade = 1, score = 0 }) {
  console.log(grade, score);
  return (
    <div className='student'>
      <h3>This is a Student</h3>
      <p>Grade: {grade}</p>
      <p>Score: {score}</p>
    </div>
  )
}

function Developer() {
  return (
    <div style={{
      margin: '20px',
      padding: '20px',
      border: '2px solid purple',
      borderRadius: '20px'
    }}>
      <h5>Devo devo</h5>
      <p>Coding: </p>
    </div>
  )
}

export default App
