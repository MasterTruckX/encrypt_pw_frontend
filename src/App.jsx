import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
function App () {
  return (
    <>
      <Router>
        <div>
          <Routes>
            <Route path='/' element={Login} />
            <Route path='/' element={Register} />
            <Route path='/' element={Dashboard} />
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App
