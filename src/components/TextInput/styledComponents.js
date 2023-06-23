import styled from 'styled-components'

export const AppContainer = styled.div`
display:flex;
flex-direction:column
background-color:#f5d0fe ;
height:100vh;
justify-content:center;
align-items:center;
border-width:5px;
`

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  height: 200px;
  padding: 30px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
`
export const Heading = styled.h1`
  color: #000000;
  font-size: 25px;
  font-family: 'Roboto';
  font-weight: bold;
`
export const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`
export const Paragraph = styled.p`
  font-size: 15px;
  font-family: 'Roboto';
  font-weight: bold;
  margin-right: 15px;
`
export const Button = styled.button`
  background-color: #d946ef;
  font-size: 13px;
  border-radius: 5px;
  padding: 10px;
  color: #ffffff;
  font-family: 'Roboto';
  color: #ffffff;
  height: 35px;
  width: 55px;
  cursor: pointer;
`
export const Input = styled.input`
  height: 30px;
  width: 250px;
  outline: none;
  padding: 10px;
  margin-right: 15px;
`
