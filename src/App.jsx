import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import Header from './components/Header'
function App () {
  return (
    <>
      <Router>
        <Header />
        <div>
          <Routes>
            <Route path='/login' element={Login} />
            <Route path='/register' element={Register} />
            <Route path='/' element={Dashboard} />
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App
