import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

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

const RepositoryItem = (props) => {
  return (
    <View key={props.id} style={styles.container}>
      <Text style={styles.strong}>ID: {props.id}</Text>
      <Text>Full Name: {props.fullName}</Text>
      <Text>Description: {props.description}</Text>
      <Text>Language: {props.language}</Text>
      <Text>Stars: {props.stargazersCount}</Text>
      <Text>Forks: {props.forksCount}</Text>
      <Text>Reviews: {props.reviewCount}</Text>
      <Text>Ratings: {props.ratingAverage}</Text>
    </View>
  )
}

export default RepositoryItem
