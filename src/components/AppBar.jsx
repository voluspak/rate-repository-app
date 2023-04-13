import React from 'react'
import { View, StyleSheet } from 'react-native'
import StyledText from './StyledText'
import theme from '../theme'
import Constants from 'expo-constants'
import { Link, useLocation } from 'react-router-native'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 10,
    backgroundColor: theme.appBar.primary,
    paddingTop: Constants.statusBarHeight + 10,
    paddingBottom: 10,
    paddingLeft: 10
  },
  text: {
    color: theme.appBar.textSecondary
  },
  active: {
    color: theme.appBar.textPrimary
  }
})

const AppBarTab = ({ children, to }) => {
  const { pathname } = useLocation()

  const active = pathname === to

  const textStyles = [
    styles.text,
    active && styles.active
  ]

  return (
    <Link to={to}>
      <StyledText fontWeight='bold' style={textStyles}>
        {children}
      </StyledText>
    </Link>
  )
}

const AppBar = () => {
  return (
    <View style={styles.container}>
      <AppBarTab active to='/'>Repositories</AppBarTab>
      <AppBarTab to='/signin'>Sign In</AppBarTab>
    </View>
  )
}

export default AppBar
