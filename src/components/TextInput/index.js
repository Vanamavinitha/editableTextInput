import {Component} from 'react'

import {
  AppContainer,
  CardContainer,
  Heading,
  InputContainer,
  Paragraph,
  Button,
  Input,
} from './styledComponents'

class TextInput extends Component {
  state = {isButtonClicked: false, userInput: ''}

  onClickSave = event => {
    event.preventDefault()
  }

  onClickButton = () => {
    this.setState(prevState => ({
      isButtonClicked: !prevState.isButtonClicked,
    }))
  }

  onChangeInput = event => {
    this.setState({userInput: event.target.value})
  }

  render() {
    const {userInput, isButtonClicked} = this.state
    const buttonText = isButtonClicked ? 'Edit' : 'Save'

    return (
      <AppContainer>
        <CardContainer>
          <Heading>Editable Text Input</Heading>
          <InputContainer>
            {isButtonClicked ? (
              <Paragraph>{userInput}</Paragraph>
            ) : (
              <Input
                type="text"
                value={userInput}
                onChange={this.onChangeInput}
              />
            )}
            <Button onClick={this.onClickButton} type="button">
              {buttonText}
            </Button>
          </InputContainer>
        </CardContainer>
      </AppContainer>
    )
  }
}
export default TextInput
