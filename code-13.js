//App.js
import Capitals from './components/Capitals'

import './App.css'

const App = () => <Capitals />

export default App

//index.js
import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here
class Capitals extends Component {
  state = {
    activeCapitalId: countryAndCapitalsList[0].id,
  }
  onChangeCapital = event => {
    this.setState({activeCapitalId: event.target.value})
  }
  getCountry = () => {
    const {activeCapitalId} = this.state
    const activeCountryAndCapital = countryAndCapitalsList.find(
      eachCapital => eachCapital.id === activeCapitalId,
    )
    return activeCountryAndCapital.country
  }
  render() {
    const {activeCapitalId} = this.state
    const country = this.getCountry(activeCapitalId)

    return (
      <div className="bg-container">
        <div className="card">
          <h1 className="heading">Countries And Capitals</h1>
          <div className="question-container">
            <select
              onChange={this.onChangeCapital}
              value={activeCapitalId}
              className="select"
            >
              {countryAndCapitalsList.map(eachCapital => (
                <option
                  key={eachCapital.id}
                  value={eachCapital.id}
                  className="option"
                >
                  {eachCapital.capitalDisplayText}
                </option>
              ))}
            </select>
            <p className="question">is capital of which country?</p>
          </div>
          <p className="country">{country}</p>
        </div>
      </div>
    )
  }
}
export default Capitals


//index.css
* {
  margin: 0px;
}
.bg-container {
  background-color: #93c5fd;
  background-size: cover;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.card {
  background-color: #f8fafc;
  border-radius: 16px;
  width: 96%;
  max-width: 345px;
  padding: 30px;
}
@media screen and (min-width: 768px) {
  .card {
    padding-top: 44px;
    padding-right: 64px;
    max-width: 520px;
    padding-left: 64px;
  }
}
.heading {
  color: #1e293b;
  font-size: 24px;
  font-weight: 500;
  font-family: 'roboto';
}
@media screen and (min-width: 768px) {
  .heading {
    text-align: left;
    font-size: 32px;
  }
}
.question-container {
  display: flex;
  align-items: center;
}
.select {
  background-color: #f8fafc;
  font-family: 'roboto';
  font-size: 12px;
  font-weight: 500;
  width: 100px;
  height: 40px;
  border: 1px solid #cbd2d9;
  border-radius: 4px;
  padding-top: 4px;
  padding-bottom: 4px;
  padding-left: 8px;
  outline: none;
}
@media screen and (min-width: 768px) {
  .select {
    padding-top: 8px;
    padding-bottom: 8px;
    padding-left: 16px;
    width: 180px;
    font-size: 16px;
  }
}
.option {
  color: #323f4b;
  font-family: 'roboto';
  font-size: 12px;
  font-weight: 500;
}
@media screen and (min-width: 768px) {
  .option {
    font-size: 14px;
  }
}
.question {
  color: #000000;
  font-family: 'roboto';
  font-size: 12px;
  margin-left: 8px;
}
@media screen and (min-width: 768px) {
  .question {
    font-size: 16px;
  }
}
.country {
  color: #1e293b;
  font-family: 'roboto';
  font-size: 16px;
  font-weight: 500;
}
@media screen and (min-width: 768px) {
  .country {
    font-family: 'roboto';
    font-size: 24px;
  }
}
