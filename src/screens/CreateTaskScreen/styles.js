import React from 'react'
import styled from 'styled-components'

export const Container = styled.SafeAreaView`
  flex: 1;
  align-self: stretch;
`

const InputContainer = styled.View`
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 10px;
`

const Input = styled.TextInput`
  height: 40px;
  margin-top: 12px;
  background-color: ${props => props.bgColor};
  border-radius: 15px;
  padding: 10px;
`

const Title = styled.Text``

export const Box = ({ title, bgColor }) => {
  <InputContainer>
    <Title>{title}</Title>
    <Input
      bgColor={bgColor}
    />
  </InputContainer>
}

