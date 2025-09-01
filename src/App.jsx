import './App.css'
import Login from './Components/Login'
import Profile from './Components/Profile'
import Usercontextprovider from './context/Usercontextprovider'

function App() {
  
  return (
    <Usercontextprovider>
      <h1>Context API in  React </h1>
      <Login/>
      <Profile/>
    </Usercontextprovider>
  )
}

export default App
