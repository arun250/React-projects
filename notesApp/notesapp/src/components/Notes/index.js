// Write your code here
import {v4 as uuidv4} from 'uuid'

import {useState} from 'react'

import NoteItem from '../NoteItem'

import {
  NotesContianer,
  NotesHeading,
  AddButton,
  TitleInput,
  CommentInput,
  BodyContainer,
  ButtonContainer,
  UnorderedList,
  EmptyNotesImage,
  NotesText,
} from './styledComponents'

const Notes = () => {
  const [title, setTitle] = useState('')
  const [comment, setComment] = useState('')
  const [addComment, setAddComment] = useState([])

  const onTitleInput = event => {
    setTitle(event.target.value)
  }

  const onCommentInput = event => {
    setComment(event.target.value)
  }

  const onClickAddButton = event => {
    event.preventDefault()
    const newComment = {
      id: uuidv4(),
      title,
      comment,
    }
    setAddComment(prevstate => [...prevstate, newComment])
    setTitle('')
    setComment('')
  }

  return (
    <>
      <BodyContainer>
        <NotesHeading>Notes</NotesHeading>
        <NotesContianer>
          <div>
            <TitleInput
              placeholder="Title"
              type="text"
              onChange={onTitleInput}
              value={title}
            ></TitleInput>
            <CommentInput
              placeholder="Take a Note..."
              rows="8"
              cols="50"
              onChange={onCommentInput}
              value={comment}
            ></CommentInput>
          </div>
          <ButtonContainer>
            <AddButton type="submit" onClick={onClickAddButton}>
              Add
            </AddButton>
          </ButtonContainer>
        </NotesContianer>

        {addComment.length === 0 ? (
          <>
            <EmptyNotesImage
              src="https://assets.ccbp.in/frontend/hooks/empty-notes-img.png"
              alt="notes empty"
            />
            <NotesHeading>No Notes Yet</NotesHeading>
            <NotesText>Notes you add will appear here</NotesText>
          </>
        ) : (
          <UnorderedList>
            {addComment.map(eachComment => (
              <NoteItem addComment={eachComment} key={eachComment.id} />
            ))}
          </UnorderedList>
        )}
      </BodyContainer>
    </>
  )
}

export default Notes
