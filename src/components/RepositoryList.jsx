import React from 'react'
import { Text, View } from 'react-native'
import repositories from '../data/repositories'

function RepositoryList () {
  return (
    <View>
      {repositories.map(repo => {
        const { id } = repo
        return (
          <View key={id}>
            <Text>{id}</Text>
          </View>
        )
      })}
    </View>
  )
}

export default RepositoryList
