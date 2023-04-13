import React from 'react'
import { View, StyleSheet } from 'react-native'
import StyledText from './StyledText'

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 5,
    paddingTop: 5
  },
  strong: {
    color: '#09f',
    fontWeight: 'bold',
    marginBottom: 5
  }
})

const parseThousands = value => {
  return value >= 1000
    ? `${Math.round(value / 100) / 10}k`
    : String(value)
}

const RepositoryStats = props => {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
      <View>
        <StyledText align='center' fontWeight='bold'>Stars</StyledText>
        <StyledText align='center'>{parseThousands(props.stargazersCount)}</StyledText>
      </View>
      <View>
        <StyledText align='center' fontWeight='bold'>Forks</StyledText>
        <StyledText align='center'>{parseThousands(props.forksCount)}</StyledText>
      </View>
      <View>
        <StyledText align='center' fontWeight='bold'>Review</StyledText>
        <StyledText align='center'>{props.reviewCount}</StyledText>
      </View>
      <View>
        <StyledText align='center' fontWeight='bold'>Rating</StyledText>
        <StyledText align='center'>{props.ratingAverage}</StyledText>
      </View>
    </View>
  )
}

const RepositoryItem = (props) => {
  return (
    <View key={props.id} style={styles.container}>
      <StyledText fontSize='subHeading' fontWeight='bold'>Full Name: {props.fullName}</StyledText>
      <StyledText>Description: {props.description}</StyledText>
      <StyledText>Language: {props.language}</StyledText>
      <RepositoryStats {...props} />
    </View>
  )
}

export default RepositoryItem
