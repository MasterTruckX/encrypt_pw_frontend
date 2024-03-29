import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <header>
      <div>
        <Link to='/'>Safe Words</Link>
      </div>
      <ul>
        <li><Link to='/login'><FaSignInAlt /> Login</Link></li>
        <li><Link to='/register'><FaUser /> Register</Link></li>
        <li><Link to='/'><FaSignOutAlt /> Logout</Link></li>
      </ul>
    </header>
  )
}

export default Header
