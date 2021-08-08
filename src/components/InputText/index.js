import React from 'react'
import { TextInput, Text } from 'react-native'

export const InputText = ({}) => {
  return(
    <>
      <Text>Title</Text>
        <TextInput
          style={{height: 40,
            marginTop: 12,
            backgroundColor: '#E0E0E0',
            borderRadius: 5,
            padding: 10,}}
          onChangeText={onChangeText}
          value={text}
          placeholder="Title"
        />
    </>
  )
}