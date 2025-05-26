import {Component} from 'react'

import Header from '../Header'

import {Link} from 'react-router-dom'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Home extends Component {
  state = {courseList: [], apiStatus: apiStatusConstants.initial}

  componentDidMount() {
    this.getCourseList()
  }

  onClickRetryButton = () => {
    this.getCourseList()
  }

  getCourseList = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const apiUrl = 'https://apis.ccbp.in/te/courses'
    const response = await fetch(apiUrl)
    if (response.ok === true) {
      const courseData = await response.json()
      const updatedData = courseData.courses.map(course => ({
        id: course.id,
        name: course.name,
        logoUrl: course.logo_url,
      }))
      this.setState({
        courseList: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  renderFailureView = () => {
    return (
      <>
        <div className="failureContianer">
          <img
            src="https://assets.ccbp.in/frontend/react-js/tech-era/failure-img.png"
            alt="failure view"
            className="failureViewImage"
          />
          <h1 className="wrongheading">Oops! Something Went Wrong</h1>
          <p className="wrongDescription">
            We cannot seem to find the page you are looking for
          </p>
          <button className="retryButton" onClick={this.onClickRetryButton}>
            Retry
          </button>
        </div>
      </>
    )
  }

  renderLoadingView = () => (
    <div className="failureContianer">
      <div className="products-loader-container" data-testid="loader">
        <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
      </div>
    </div>
  )

  renderCourseList = () => {
    const {courseList} = this.state
    return (
      <>
        <div className="courseContianer">
          <h1>Courses</h1>
          <ul className="courseList">
            {courseList.map(course => (
              <Link
                to={`/courses/${course.id}`}
                key={course.id}
                className="courseIconLink"
              >
                <li className="courseIconContianer">
                  <img
                    src={course.logoUrl}
                    alt={course.name}
                    className="courseIcon"
                  />
                  <p className="courseName">{course.name}</p>
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </>
    )
  }

  renderSwitch = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()

      case apiStatusConstants.failure:
        return this.renderFailureView()

      case apiStatusConstants.success:
        return this.renderCourseList()
      default:
        return null
    }
  }

  render() {
    return (
      <>
        <Header />
        {this.renderSwitch()}
      </>
    )
  }
}

export default Home
