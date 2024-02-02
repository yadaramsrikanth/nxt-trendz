// Write your JS code here
import './index.css'

const Header = () => (
  <nav className="nav-container">
    <img
      src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
      alt="website logo"
      className="website-logo"
    />
    <div className="list-container">
      <li className="list-item">Home</li>
      <li className="list-item">Products</li>
      <li className="list-item">cart</li>
      <li className="logout-button">
        <button type="button">Logout</button>
      </li>
    </div>
  </nav>
)

export default Header
