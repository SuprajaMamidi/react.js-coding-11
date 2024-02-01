//index.js 
import {Component} from 'react'

import './index.css'

const HEADS_IMG_URL = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'

const TAILS_IMG_URL = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {
    tossResultImage: HEADS_IMG_URL,
    headsCount: 0,
    tailsCount: 0,
  }

  onTossCoin = () => {
    const {headsCount, tailsCount} = this.state
    const toss = Math.floor(Math.random() * 2)
    console.log(toss)
    let tossImage = ''
    let latestHeadsCount = headsCount
    let latestTailscount = tailsCount

    if (toss === 0) {
      tossImage = HEADS_IMG_URL
      latestHeadsCount += 1
    } else {
      tossImage = TAILS_IMG_URL
      latestTailscount += 1
    }
    this.setState({
      tossResultImage: tossImage,
      headsCount: latestHeadsCount,
      tailsCount: latestTailscount,
    })
  }

  render() {
    const {tossResultImage, headsCount, tailsCount} = this.state
    const totalCount = headsCount + tailsCount
    return (
      <div className="bg-container">
        <div className="card">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="para">Heads (or) Tails</p>
          <img src={tossResultImage} alt="toss result" className="image" />
          <button type="button" onClick={this.onTossCoin} className="button">
            Toss Coin
          </button>
          <div className="count-container">
            <p className="count-text">Total:{totalCount} </p>
            <p className="count-text">Heads:{headsCount}</p>
            <p className="count-text">Tails:{tailsCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss


//.index.css
* {
  margin: 0px;
}

.bg-container {
  background-image: linear-gradient(to right, #f9d423, #e2a139);
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.card {
  background-color: #ffffff;
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
}
.heading {
  color: #a35200;
  font-size: 40px;
  font-weight: bold;
}
.para {
  color: #334155;
  font-size: 25px;
}
.image {
  height: 300px;
}
.button {
  background-color: #f9d423;
  color: #a35200;
  font-weight: bold;
  font-size: 20px;
  border: 0px;
  width: 120px;
  border-radius: 5px;
}
.count-text {
  color: #475569;
  padding-right: 30px;
}
.count-container {
  display: flex;
  justify-content: space-around;
}
@media screen and (max-width: 576px) {
  .heading {
    color: #a35200;
    font-size: 20px;
    font-weight: bold;
  }
  .para {
    color: #334155;
    font-size: 15px;
  }
  .card {
    background-color: #ffffff;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
  }
  .image {
    height: 150px;
  }
  .button {
    background-color: #f9d423;
    color: #a35200;
    font-weight: bold;
    font-size: 10px;
    border: 0px;
    width: 100px;
    border-radius: 5px;
  }
}

//App.js
import CoinToss from './components/CoinToss'

import './App.css'

const App = () => <CoinToss />

export default App
