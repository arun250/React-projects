import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import {formatDistanceToNow} from 'date-fns'
import './index.css'
import CommentItem from '../CommentItem'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here
class Comments extends Component {
  state = {
    contactsList: [],
    name: '',
    comment: '',
  }

  onAddComment = event => {
    event.preventDefault()
    const {name, comment} = this.state
    const backgroundColor =
      initialContainerBackgroundClassNames[
        Math.floor(Math.random() * initialContainerBackgroundClassNames.length)
      ]
    const newComment = {
      id: uuidv4(),
      name,
      comment,
      isLiked: false,
      date: new Date(),
      initialClassName: backgroundColor,
    }
    this.setState(prevState => ({
      contactsList: [...prevState.contactsList, newComment],
      name: '',
      comment: '',
    }))
  }

  toggleLike = id => {
    this.setState(prevstate => ({
      contactsList: prevstate.contactsList.map(eachComment => {
        if (id === eachComment.id) {
          return {...eachComment, isLiked: !eachComment.isLiked}
        }
        return eachComment
      }),
    }))
  }

  onChangename = event => {
    this.setState({name: event.target.value})
  }

  onChangecomment = event => {
    this.setState({comment: event.target.value})
  }

  deleteComment = id => {
    this.setState(prevState => ({
      contactsList: prevState.contactsList.filter(each => each.id !== id),
    }))
  }

  render() {
    const {name, comment, contactsList} = this.state
    return (
      <div className="bg-container">
        <div className="top-section">
          <div className="form-container">
            <h1>Comments</h1>
            <p>Say something about 4.0. Technologies</p>
            <form className="form-section" onSubmit={this.onAddComment}>
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={this.onChangename}
              />
              <br />
              <textarea
                name="comment"
                rows="10"
                cols="20"
                value={comment}
                onChange={this.onChangecomment}
                placeholder="Your Comment"
              >
                Your Comment
              </textarea>
              <br />
              <div>
                <button type="submit" className="add-comment-button">
                  Add Comment
                </button>
              </div>
            </form>
            <hr />
            <p>{contactsList.length} Comments</p>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
            className=""
            alt="comments"
          />
        </div>
        <hr />
        <ul className="unorderedlist">
          {contactsList.map(eachItem => (
            <CommentItem
              key={eachItem.id}
              commentData={eachItem}
              onLike={this.toggleLike}
              onDelete={this.deleteComment}
              postedTime={formatDistanceToNow(new Date(eachItem.date))}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default Comments
