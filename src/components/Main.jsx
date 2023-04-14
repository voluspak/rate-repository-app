import React from 'react'
import { View } from 'react-native'
import RepositoryList from './RepositoryList'
import AppBar from './AppBar'
import { Route, Routes } from 'react-router-native'
import LogInPage from '../pages/LogInPage'

const Main = () => {
  return (
    <View style={{ flex: 1 }}>
      <AppBar />
      <Routes>
        <Route path='/' Component={RepositoryList} exact />
        <Route path='/signin' Component={LogInPage} exact />
      </Routes>
    </View>
  )
}

export default Main
