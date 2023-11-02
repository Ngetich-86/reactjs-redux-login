
import './App.css'
import ChangeColor from './Components/ChangeColor'
import Login from './Components/Login'
import Profile from './Components/Profile'


function App() {
  

  return (
    <>
      <div className="app">
        <Profile/>
        <Login/>
        <ChangeColor/>
      </div>
    </>
  )
}

export default App
