import './index.css'

import {Component} from 'react'

class MultilingualGreetings extends Component {
  state = {
    activeImageUrl: this.props.languageGreetingsList[0].imageUrl,
    activeImageAltText: this.props.languageGreetingsList[0].imageAltText,
    activeImageId: this.props.languageGreetingsList[0].id,
  }

  onClickShowImage = imageId => {
    const {languageGreetingsList} = this.props
    const eachList = languageGreetingsList.find(
      eachItem => imageId === eachItem.id,
    )
    if (eachList) {
      this.setState({
        activeImageUrl: eachList.imageUrl,
        activeImageAltText: eachList.imageAltText,
        activeImageId: eachList.id,
      })
    }
  }

  render() {
    const {languageGreetingsList} = this.props
    const {activeImageUrl, activeImageAltText, activeImageId} = this.state
    return (
      <>
        <div>
          <div className="MultilingualContainer">
            <h1 className="multiHeading">Multilingual Greetings</h1>
            <ul className="buttonContainer">
              {languageGreetingsList.map(eachButton => {
                const isActive = eachButton.id === activeImageId
                return (
                  <li className="eachListItem" key={eachButton.id}>
                    <button
                      onClick={() => this.onClickShowImage(eachButton.id)}
                      className={`${
                        isActive ? 'isActiveTheme' : 'buttonStyles'
                      }`}
                    >
                      {eachButton.buttonText}
                    </button>
                  </li>
                )
              })}
            </ul>
            <img
              src={activeImageUrl}
              alt={activeImageAltText}
              className="languageImage"
            />
          </div>
        </div>
      </>
    )
  }
}

export default MultilingualGreetings
