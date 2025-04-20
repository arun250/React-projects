import './index.css'

const CommentItem = props => {
  const {commentData, onLike, onDelete, postedTime} = props
  const {id, name, comment, isLiked, initialClassName} = commentData

  const likeText = isLiked ? 'Liked' : 'Like'
  const likeImgUrl = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const initial = name ? name[0].toUpperCase() : 'A'

  return (
    <li className="list-container">
      <div className="comment-container">
        <div className="person-container">
          <p className={`initialcontainer ${initialClassName}`}>{initial}</p>
          <div>
            <p className="username">{name}</p>
            <p className="time">{postedTime} ago</p>
          </div>
        </div>
        <p className="comment">{comment}</p>
        <div className="icon-container">
          <button className="icon-button" onClick={() => onLike(id)}>
            <img src={likeImgUrl} alt="like" className="like-icon" />
            {likeText}
          </button>
          <button
            className="icon-button"
            onClick={() => onDelete(id)}
            data-testid="delete"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
              alt="delete"
              className="delete-icon"
            />
          </button>
        </div>
      </div>
    </li>
  )
}

export default CommentItem
