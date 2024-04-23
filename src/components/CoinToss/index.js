// Write your code here
import {Component} from 'react'

import './index.css'

class CoinToss extends Component {
  state = {
    tossImageUrl: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
    headsCount: 0,
    tailsCount: 0,
  }

  onClickTossCoin = () => {
    const {headsCount, tailsCount} = this.state
    const tossResult = Math.floor(Math.random() * 2)
    let tossImage = ''
    let newHeadCount = headsCount
    let newTailsCount = tailsCount

    if (tossResult === 0) {
      tossImage = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
      newHeadCount += 1
    } else {
      tossImage = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'
      newTailsCount += 1
    }

    this.setState({
      tossImageUrl: tossImage,
      headsCount: newHeadCount,
      tailsCount: newTailsCount,
    })
  }

  render() {
    const {tossImageUrl, headsCount, tailsCount} = this.state
    const totalCount = headsCount + tailsCount
    return (
      <div className="bg-container">
        <div className="coin-toss-card">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="options">Heads (or) Tails</p>
          <img src={tossImageUrl} alt="toss result" className="toss-coin-img" />
          <button
            className="button"
            type="button"
            onClick={this.onClickTossCoin}
          >
            Toss Coin
          </button>
          <div className="result-card">
            <p className="result total-count">Total: {totalCount}</p>
            <p className="result heads-count">Heads: {headsCount}</p>
            <p className="result tails-count">Tails: {tailsCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
