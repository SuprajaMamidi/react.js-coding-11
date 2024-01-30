//index.js

import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {isFeedbackSelected: false}

  onClickEmoji = () => {
    this.setState({isFeedbackSelected: true})
  }
  renderFeedbackQuestion = () => {
    const {resources} = this.props
    const {emojis} = resources
    return (
      <div className="main-container">
        <div className="card">
          <h1 className="heading">
            How satisfied are you with our customer support performance?
          </h1>
          <ul className="emojis-list">
            {emojis.map(emoji => (
              <li key={emoji.id}>
                <buton
                  type="button"
                  className="btn"
                  onClick={this.onClickEmoji}
                >
                  <img
                    src={emoji.imageUrl}
                    alt={emoji.name}
                    className="emoji-img"
                  />
                  <br />
                  <span className="emoji-name">{emoji.name}</span>
                </buton>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }

  renderThankYouScreen = () => {
    const {resources} = this.props
    const {loveEmojiUrl} = resources
    return (
      <div className="main-container">
        <div className="app-container">
          <img src={loveEmojiUrl} alt="love emoji" className="emoji-love" />
          <h1 className="thank-you-text">Thank You!</h1>
          <p className="text">
            We will use your feedback to improve our customer support
            performance.
          </p>
        </div>
      </div>
    )
  }
  render() {
    const {isFeedbackSelected} = this.state
    return (
      <div className="container">
        <div className="feedback-card">
          {isFeedbackSelected
            ? this.renderThankYouScreen()
            : this.renderFeedbackQuestion()}
        </div>
      </div>
    )
  }
}
export default Feedback

//index.css
.main-container {
  background-image: linear-gradient(to right, #ffeeee, #ffebeb, #ffc0bb);
  background-size: cover;
  height: 100vh;
  padding: 20%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
}
@media screen and (min-width: 768px) {
  .card {
    background-color: #ffffff;

    padding: 50px;
  }
  .heading {
    font-size: 40px;
    text-align: center;
    margin-bottom: 60px;
  }
  .emoji-img {
    height: 60px;
    width: 60px;
  }
  .app-container {
    background-color: #ffffff;

    padding: 30px;
    text-align: center;
    padding-top: 30px;
  }
}
@media screen and (max-width: 768px) {
  .card {
    background-color: #ffffff;

    padding: 30px;
  }
  .heading {
    font-size: 20px;
    text-align: center;
  }
  .emoji-img {
    height: 40px;
    width: 40px;
  }
  .app-container {
    background-color: #ffffff;

    padding: 30px;
    text-align: center;
    padding-top: 30px;
  }
}

.emojis-list {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  list-style-type: none;
}
.emoji-name {
  font-size: 20px;
  text-align: center;
}

.emoji-love {
  height: 50px;
  width: 60px;
}

