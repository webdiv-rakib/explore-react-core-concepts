import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <>
      <h1>Vite + React</h1>
      <Person></Person>
      <Student></Student>
    </>
  )
}

function Person() {
  const age = 25;
  const money = 500;
  const person = { name: 'Rakib', age: 26 }
  return <h3>I am {person.name} with age {person.age} and have {money} Taka</h3>
}

function Student() {
  return (
    <div>
      <h3>This is a Student</h3>
      <p>Name:</p>
      <p>Age:</p>
    </div>
  )
}

export default App
