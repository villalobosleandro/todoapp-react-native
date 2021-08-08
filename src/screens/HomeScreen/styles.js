import React from 'react'
import styled from 'styled-components'

export const ListContainer = styled.View`
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 15px;
  flex: 1;
`

export const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
`

export const Container = styled.SafeAreaView`
  flex: 1;
  align-self: stretch;
`

export const ButtonContainer = styled.View`
  align-items: center;
  justify-content: flex-end;
  margin-bottom: 20px;
`

const Button = styled.TouchableOpacity`
  width: 90%;
  background-color: ${props => props.bgColor};
  align-items: center;
  justify-content: center;
  height: 50px;
  border-radius: 10px;
`;
const ButtonText = styled.Text`
  color: ${props => props.textColor};
`;
export const PressableButton = ({ onPress, bgColor, title, textColor }) => (
  <Button onPress={onPress} bgColor={bgColor}>
    <ButtonText textColor={textColor}>{title}</ButtonText>
  </Button>
);
