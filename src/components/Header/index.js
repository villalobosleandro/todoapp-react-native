import * as React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export const Header = ({ title = Constant.titleApp, arrowBack = false, 
  iconRight = true, navigation }) => {
  return (
    <View style={{
      flexDirection: 'row', alignItems: 'center', justifyContent: iconRight ? 'space-between' : null, paddingHorizontal: 15,
      height: 50, borderBottomWidth: 1, borderBottomColor: Constant.colors.grayColor
    }}>

      {
        arrowBack && (
          <TouchableOpacity
            onPress={() => navigation.goBack()}
          >
            <Icon name={'chevron-left'} size={30} />
          </TouchableOpacity>
        )
      }
      <Text style={{paddingLeft: arrowBack ? 10 : 0}}>{title}</Text>

      {
        iconRight && (
          <View style={{ flexDirection: 'row', padding: 5 }}>
            <Icon name={'magnify'} size={30} />
            <Icon name={'bell'} size={30} style={{ paddingHorizontal: 15 }} />
            <Icon name={'menu'} size={30} />
          </View>
        )
      }


    </View>
  )
}