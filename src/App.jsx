import { Route, Routes, Navigate } from 'react-router-dom'
import './App.css'
import Sidebar from './components/Sidebar'
import Overview from './components/Overview'
import Transactions from './components/Transactions'

function App() {

  return (
    <div className='app'>
      <Sidebar />
      <Routes>
        <Route path='/' element={<Navigate to="/overview" />} />
        <Route path='/overview' element={<Overview />} />
        <Route path='/transactions' element={<Transactions />} />
      </Routes>
    </div>
  )
}

export default App