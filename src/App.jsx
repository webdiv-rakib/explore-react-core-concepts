import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './Todo'
import Actor from './Actor'
import Singer from './Singer'

function App() {
  const actors = ['Sakib', 'Raj', 'Jasim', 'Rubel', 'Salman Sha'];
  const singers = [
    { id: 1, name: 'Dr Mahfuzur Rahman', age: 68 },
    { id: 2, name: 'Eva Rahman', age: 38 },
    { id: 3, name: 'Shuvro Dev', age: 68 },
    { id: 4, name: 'Pritom', age: 28 }
  ]
  return (
    <>
      <h3>Vite + React</h3>
      {
        singers.map(singer => <Singer singer={singer}></Singer>)

      }




      <Actor name={'Bappa Raz'}></Actor>
      {
        actors.map(actor => <Actor name={actor}></Actor>)
      }
      {/* <Todo
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
      </Todo> */}
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
