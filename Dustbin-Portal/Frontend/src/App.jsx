import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function LoginPage() {
  return (
      <div className='body'>
        <div className='submit'>
          <input type="text" placeholder=' username' className='usname'/>
          <input type="text" placeholder=' placeholder'className='psword'/>
          <button className='btn'>LOGIN</button>
          <p>Not Registered? <b>Create an Account</b></p>
        </div>
      </div>
  )
}

function Topbar() {
  return (
    <div className='top'>
      <img src="" alt="menu" />
      <input type="text" placeholder="Search" />
    </div>
  )
}

function HomePage() {
  return (
    <>
    <Topbar/>
      <div>
        <img className='Map' src="https://www.goodfreephotos.com/albums/other-photos/globe-of-world-map.jpg" alt="Map Image" />
      </div>
      <div className='Home'>
        <h1>Welcome Back</h1>
        <h2>username</h2>
      </div>
      <footer className='footer'>
      <img src="./assets/home.png" alt="home" />
      <img src="./assets/alert.png" alt="alert" />
      <img src="./assets/location.png" alt="location" />
      <img src="./assets/bubble-chat.png" alt="complaints" />
      </footer>
    </>
  )
}

function AlertPage() {
  const [alert, setAlert] = useState(null)
  return (
    <>
    <Topbar/>
    <h2>Welcome to Alert Page</h2>

    </>
  )
}

function ComplainPage() {
  const [complain, setComplain] = useState(null)
  return (
    <>
    <Topbar/>
    <h2>Welcome to Complain Page</h2>

    </>
  )
}

function App() {

  return (
    <LoginPage/>
  )
}

export default App
