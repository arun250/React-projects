// Write your code here
import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import {format} from 'date-fns'
import './index.css'
import AppointmentItem from '../AppointmentItem'

class Appointments extends Component {
  state = {
    appointmentList: [],
    title: '',
    appointmentDate: '',
    isStarredFilterActive: false,
  }

  onAddAppointment = event => {
    event.preventDefault()
    const {title, appointmentDate} = this.state
    const newAppointment = {
      id: uuidv4(),
      title,
      appointmentDate,
      isStarred: false,
    }
    this.setState(prevstate => ({
      appointmentList: [...prevstate.appointmentList, newAppointment],
      title: '',
      appointmentDate: '',
    }))
  }

  toggleStar = id => {
    this.setState(prevstate => ({
      appointmentList: prevstate.appointmentList.map(eachAppointment => {
        if (id === eachAppointment.id) {
          return {...eachAppointment, isStarred: !eachAppointment.isStarred}
        }
        return eachAppointment
      }),
    }))
  }

  toggleStarFilterActive = () => {
    this.setState(prevstate => ({
      isStarredFilterActive: !prevstate.isStarredFilterActive,
    }))
  }

  getFilteredAppointments = () => {
    const {appointmentList, isStarredFilterActive} = this.state
    if (isStarredFilterActive) {
      return appointmentList.filter(each => each.isStarred)
    }
    return appointmentList
  }

  onChangeTitle = event => {
    this.setState({title: event.target.value})
  }

  onChangeDate = event => {
    this.setState({appointmentDate: event.target.value})
  }

  render() {
    const {appointmentList, isStarredFilterActive, title, appointmentDate} =
      this.state
    const filteredAppointments = this.getFilteredAppointments()
    return (
      <div className="bg-container">
        <div className="card-container">
          <div className="top-section">
            <div className="AddAppointmentContainer">
              <h1>Add Appointment</h1>
              <form onSubmit={this.onAddAppointment}>
                <label htmlFor="name">TITLE:</label>
                <br />
                <input
                  className="title"
                  id="name"
                  type="text"
                  placeholder="title"
                  onChange={this.onChangeTitle}
                  value={title}
                />
                <br />
                <label htmlFor="date">DATE</label>
                <br />
                <input
                  className="date"
                  id="date"
                  type="date"
                  placeholder="title"
                  onChange={this.onChangeDate}
                  value={appointmentDate}
                />
                <br />
                <button className="addButton" type="submit">
                  Add
                </button>
              </form>
            </div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png "
              alt="appointments"
            />
          </div>
          <hr />
          <div className="bottom-section">
            <h1>Appointments</h1>
            <button
              className={`starredButton ${
                isStarredFilterActive ? 'active-star-button' : ' '
              }`}
              onClick={this.toggleStarFilterActive}
            >
              Starred
            </button>
          </div>
          <ul>
            <div>
              {filteredAppointments.map(eachItem => (
                <AppointmentItem
                  key={eachItem.id}
                  appointmentList={eachItem}
                  date={format(
                    new Date(eachItem.appointmentDate),
                    'dd MMMM yyyy, EEEE',
                  )}
                  toggleStar={this.toggleStar}
                />
              ))}
            </div>
          </ul>
        </div>
      </div>
    )
  }
}

export default Appointments
