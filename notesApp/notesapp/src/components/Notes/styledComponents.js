// Style your elements here
// Style your elements here
import styled from 'styled-components'

export const NotesHeading = styled.h1`
  font-size:45px;
  font-family: "Bree Serif";
  color:#4c63b6;
`

export const NotesText = styled.p`
  font-size:20px;
  font-family: "Roboto";
  width:300px;
`
export const NotesContianer = styled.form`
 
 box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  width:800px;
  height:350px;
  border:1px solid #d8d8d8;
  border-radius:5px;
  padding:30px 30px 30px 30px;
  display:flex;
  flex-direction:column;
 
`
export const AddButton = styled.button`

  color: #ffffff;
  border-radius: 4px;
 border:none;
  background-color: #4c63b6;
  padding:10px 20px 10px 20px;
`
export const TitleInput = styled.input`
  font-size:20px;
  font-family: "Roboto";
  width:600px;
  height:40px;
  border:none;
  outline:none;
`
export const CommentInput = styled.textarea`
  font-size:20px;
  font-family: "Roboto";
  width:600px;
    border:none;
  outline:none;
  margin-top:20px;

`
export const ButtonContainer = styled.div`
display: flex;
justify-content:flex-end;
align-items:flex-end;
`
export const BodyContainer = styled.div`
display: flex;
flex-direction:column;
justify-content:center;
align-items:center;
`

export const UnorderedList = styled.ul`
display:flex;
flex-wrap:wrap;
width: 1000px;
`
export const EmptyNotesImage = styled.img`
width:200px;
height:200px;
margin-top:50px;
`
