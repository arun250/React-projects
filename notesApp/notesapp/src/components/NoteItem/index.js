import {NoteItemContianer, Notes, Heading} from './styledComponents'

const NoteItem = props => {
  const {addComment} = props
  const {title, comment} = addComment
  return (
    <>
      <NoteItemContianer>
        <Heading>{title}</Heading>
        <Notes>{comment}</Notes>
      </NoteItemContianer>
    </>
  )
}

export default NoteItem
