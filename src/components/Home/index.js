// Write your JS code here
import Header from '../Header'
import './index.css'

const Home = () => (
  <div className="bg-home-container">
    <Header />
    <div className="home-page-container">
      <div className="heading-para-container">
        <h1 className="home-page-heading">Clothes That Get YOU Noticed</h1>
        <p className="home-page-para">
          Fashion is part of the daily air and it does not quite help that it
          changes all the time. Clothes have been a marker of the era and we are
          in a revolution. Your fashion makes you have been seen and heard that
          way you are.so, celebrate the seasons new and exciting fashion in your
          way.
        </p>
        <button type="button" className="button-shopping">
          Shop Now
        </button>
      </div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
        alt="clothes that get you noticed"
        className="home-image"
      />
    </div>
  </div>
)

export default Home
