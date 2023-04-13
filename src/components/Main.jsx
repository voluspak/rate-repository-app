import React from 'react'
import SignIn from './SignIn'
import { View } from 'react-native'
import RepositoryList from './RepositoryList'
import AppBar from './AppBar'
import { Route, Routes } from 'react-router-native'

const Main = () => {
  return (
    <View style={{ flex: 1 }}>
      <AppBar />
      <Routes>
        <Route path='/' Component={RepositoryList} exact />
        <Route path='/signin' Component={SignIn} exact />
      </Routes>
    </View>
  )
}

export default Main
