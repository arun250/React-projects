import {Component} from 'react'

import './index.css'

import Header from '../Header'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class CourseItemDetail extends Component {
  state = {courseItem: {}, apiStatus: apiStatusConstants.initial}

  componentDidMount() {
    this.getCourseItemList()
  }

  onClickRetryButton = () => {
    this.getCourseItemList()
  }

  getCourseItemList = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})

    const {match} = this.props
    const {params} = match
    const {id} = params
    const apiUrl = `https://apis.ccbp.in/te/courses/${id}`
    const response = await fetch(apiUrl)
    if (response.ok === true) {
      const courseData = await response.json()
      const courseDetails = courseData.course_details
      const updatedData = {
        id: courseDetails.id,
        name: courseDetails.name,
        imageUrl: courseDetails.image_url,
        description: courseDetails.description,
      }
      this.setState({
        courseItem: updatedData,
        apiStatus: apiStatusConstants.success,
      })
      console.log(updatedData)
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderCourseList = () => {
    const {courseItem} = this.state
    const {id, name, imageUrl, description} = courseItem
    return (
      <div className="CourseItemDetailsContainer">
        <div className="CourseItemCard">
          <img src={imageUrl} alt={name} className="courseItemImage" />
          <div className="textContainer">
            <h1 className="courseHeading">{name}</h1>
            <div>
              <p className="courseDescription">{description}</p>
            </div>
          </div>
        </div>
      </div>
    )
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

export default CourseItemDetail
