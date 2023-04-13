import React from 'react'
import { View, StyleSheet, Image } from 'react-native'
import StyledText from './StyledText'
import theme from '../theme'

const parseThousands = value => {
  return value >= 1000
    ? `${Math.round(value / 100) / 10}k`
    : String(value)
}

const RepositoryStats = props => {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
      <View>
        <StyledText align='center'>{parseThousands(props.stargazersCount)}</StyledText>
        <StyledText align='center' fontWeight='bold'>Stars</StyledText>
      </View>
      <View>
        <StyledText align='center'>{parseThousands(props.forksCount)}</StyledText>
        <StyledText align='center' fontWeight='bold'>Forks</StyledText>
      </View>
      <View>
        <StyledText align='center'>{props.reviewCount}</StyledText>
        <StyledText align='center' fontWeight='bold'>Review</StyledText>
      </View>
      <View>
        <StyledText align='center'>{props.ratingAverage}</StyledText>
        <StyledText align='center' fontWeight='bold'>Rating</StyledText>
      </View>
    </View>
  )
}

const RepositoryItemHeader = ({ ownerAvatarUrl, fullName, description, language }) => (
  <View style={{ flexDirection: 'row', paddingBottom: 2 }}>
    <View style={{ paddingRight: 10 }}>
      <Image style={styles.image} source={{ uri: ownerAvatarUrl }} />
    </View>
    <View style={{ flex: 1 }}>
      <StyledText fontWeight='bold'>{fullName}</StyledText>
      <StyledText color='secondary'>{description}</StyledText>
      <StyledText style={styles.language}>{language}</StyledText>
    </View>
  </View>
)

const RepositoryItem = (props) => {
  return (
    <View key={props.id} style={styles.container}>
      <RepositoryItemHeader {...props} />
      <RepositoryStats {...props} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 5
  },
  language: {
    padding: 4,
    marginVertical: 4,
    color: theme.colors.white,
    backgroundColor: theme.colors.primary,
    alignSelf: 'flex-start',
    borderRadius: 4
  },
  image: {
    width: 48,
    height: 48,
    borderRadius: 4
  }
})

export default RepositoryItem
