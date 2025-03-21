import './App.css';
import Header from './Header';
import Home from './Home';
import SideBar from './SideBar';
function App() {
  return (
    <div className='grid-container'>
      <Header/>
      <SideBar/>
      <Home/>
    </div>
  )
}

export default App
