import { Route, Routes } from 'react-router-dom';
import './App.css'
import HomePage from './pages/HomePage';
import StandingPage from './pages/StandingPage';
import ProtectedRoutes from './pages/ProtectedRoutes';
import TeamPage from './pages/TeamPage';

function App() {

  //?https://apifootball.com/documentation/

  return (
  <div className='app'>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route element={<ProtectedRoutes/>}>
      <Route path='/standings' element={<StandingPage/>}/>
      <Route path='/teams' element={<TeamPage/>}/>
      </Route>
    </Routes>
  </div>
  )
}

export default App;