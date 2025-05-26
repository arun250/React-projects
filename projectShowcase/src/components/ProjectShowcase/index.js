import './index.css'

import {Component} from 'react'

import ProjectCard from '../ProjectCard'

import Loader from 'react-loader-spinner'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class ProjectShowcase extends Component {
  state = {
    projectList: [],
    selectedInput: this.props.categoriesList[0].id,
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getProjects()
  }

  getProjects = async () => {
    const {projectList, selectedInput} = this.state
    this.setState({apiStatus: apiStatusConstants.inProgress})

    const apiUrl = `https://apis.ccbp.in/ps/projects?category=${selectedInput}`
    const response = await fetch(apiUrl)
    if (response.ok === true) {
      const data = await response.json()
      const updatedData = data.projects.map(project => ({
        id: project.id,
        name: project.name,
        imageUrl: project.image_url,
      }))
      this.setState({
        projectList: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderProjects = () => {
    const {projectList} = this.state
    return (
      <>
        <ul className="unorderedList">
          {projectList.map(eachItem => (
            <ProjectCard projectList={eachItem} key={eachItem.id} />
          ))}
        </ul>
      </>
    )
  }

  onClickRetryButton = () => {
    this.getProjects()
  }

  renderFailureView = () => {
    return (
      <>
        <div className="failureViewContainer">
          <img
            src="https://assets.ccbp.in/frontend/react-js/projects-showcase/failure-img.png"
            alt="failure view"
            className="failureView"
          />
          <h1 className="failureHeading">Oops! Something Went Wrong</h1>
          <p className="failureDesc">
            We cannot seem to find the page you are looking for .
          </p>
          <button className="retryButton" onClick={this.onClickRetryButton}>
            Retry
          </button>
        </div>
      </>
    )
  }
  renderLoadingView = () => (
    <div className="loadingView">
      <div className="products-loader-container" data-testid="loader">
        <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
      </div>
    </div>
  )
  renderNavbar = () => {
    return (
      <>
        <nav className="navbarContainer">
          <img
            src="https://assets.ccbp.in/frontend/react-js/projects-showcase/website-logo-img.png "
            alt="website logo"
            className="websiteLogo"
          />
        </nav>
      </>
    )
  }

  onChangeFilterInputs = event => {
    this.setState({selectedInput: event.target.value}, this.getProjects)
  }

  renderFilterInputs = () => {
    const {categoriesList} = this.props
    const {selectedInput} = this.state
    const {apiStatus} = this.state
    if (apiStatus === apiStatusConstants.initial) return null
    return (
      <>
        <select
          onChange={this.onChangeFilterInputs}
          className="selectInputs"
          value={selectedInput}
        >
          {categoriesList.map(category => (
            <option key={category.id} value={category.id}>
              {category.displayText}
            </option>
          ))}
        </select>
      </>
    )
  }

  renderSwitchView = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderProjects()

      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  render() {
    return (
      <>
        {this.renderNavbar()}
        {this.renderFilterInputs()}
        {this.renderSwitchView()}
      </>
    )
  }
}

export default ProjectShowcase
