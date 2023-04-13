import React from 'react'
import { Text, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  blue: { color: 'blue' },
  big: { fontSize: 20 },
  text: { fontSize: 12, color: 'grey' },
  bold: { fontWeight: 'bold' },
  small: { fontSize: 10 }
})

const StyledText = ({ children, blue, bold, big, small }) => {
  const textStyles = [
    styles.text,
    blue && styles.blue,
    bold && styles.bold,
    big && styles.big,
    small && styles.small

  ]

  return (
    <Text style={textStyles}>{children}</Text>
  )
}

export default StyledText
