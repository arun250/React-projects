// Write your code here
import {Component} from 'react'
import './index.css'

class AppointmentItem extends Component {
  render() {
    const {appointmentList, date, toggleStar} = this.props
    const {id, title, isStarred} = appointmentList

    const starUrl = !isStarred
      ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    return (
      <li className="list-item-container">
        <div>
          <div className="appointment-container">
            <p>{title}</p>
            <button
              className="star-button "
              onClick={() => toggleStar(id)}
              data-testid="star"
            >
              <img src={starUrl} alt="star" />
            </button>
          </div>
          <p>{date}</p>
        </div>
      </li>
    )
  }
}

export default AppointmentItem
