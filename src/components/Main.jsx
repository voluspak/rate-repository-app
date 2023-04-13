import React from 'react'
import { View, Text } from 'react-native'
import Constants from 'expo-constants'
import RepositoryList from './RepositoryList'

const Main = () => {
  return (
    <View style={{ marginTop: Constants.statusBarHeight, flexGrow: 1 }}>
      <Text>Rate you Repository App</Text>
      <RepositoryList />
    </View>
  )
}

export default Main
