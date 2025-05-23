import {Component} from 'react'

import './index.css'

class EditableTextInput extends Component {
  state = {
    inputText: '',
    isChange: true,
  }
  onChangeUserInput = event => {
    this.setState({inputText: event.target.value})
  }
  onClickSaveButton = () => {
    this.setState(prevState => ({isChange: !prevState.isChange}))
  }
  render() {
    const {inputText, isChange} = this.state
    return (
      <>
        <div className="bodyContainer">
          <div className="textInputContainer">
            <h1 className="heading">Editable Text Input</h1>
            <div className="inputContainer">
              {isChange ? (
                <input
                  type="text"
                  className="userInput"
                  value={inputText}
                  onChange={this.onChangeUserInput}
                />
              ) : (
                <p className="userText">{inputText}</p>
              )}

              <button
                type="button"
                className="saveButton"
                onClick={this.onClickSaveButton}
              >
                {isChange ? 'Save' : 'Edit'}
              </button>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default EditableTextInput
