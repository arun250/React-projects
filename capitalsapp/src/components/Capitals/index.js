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
  state = {capitalId: countryAndCapitalsList[0].id}
  onchangeSelectItem = event => {
    this.setState({capitalId: event.target.value})
  }

  render() {
    const {capitalId} = this.state
    const selectedCountry = countryAndCapitalsList.find(
      eachItem => eachItem.id === capitalId,
    )
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1>Countries And Capitals</h1>
          <select
            name="capitals"
            id="capitals"
            onChange={this.onchangeSelectItem}
          >
            {countryAndCapitalsList.map(eachItem => (
              <option key={eachItem.id} value={eachItem.id}>
                {eachItem.capitalDisplayText}
              </option>
            ))}
          </select>
          <label htmlFor="capitals">is capital of which country?</label>
          <h1>{selectedCountry.country}</h1>
        </div>
      </div>
    )
  }
}

export default Capitals
