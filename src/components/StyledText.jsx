import React from 'react'
import { Text, StyleSheet } from 'react-native'
import theme from '../theme'

const styles = StyleSheet.create({
  subHeading: {
    fontSize: theme.fontSizes.subHeading
  },
  text: {
    fontSize: theme.fontSizes.body,
    color: theme.colors.textPrimary,
    fontFamily: theme.fonts.main,
    fontWeight: theme.fontWeights.normal
  },
  bold: {
    fontWeight: theme.fontWeights.bold
  },
  colorPrimary: {
    color: theme.colors.primary
  },
  colorSecondary: {
    color: theme.colors.textSecondary
  },
  textAlignCenter: {
    textAlign: 'center'
  }
})

const StyledText = ({ children, align, color, fontSize, fontWeight, style, ...restOfProps }) => {
  const textStyles = [
    styles.text,
    align === 'center' && styles.textAlignCenter,
    color === 'primary' && styles.colorPrimary,
    color === 'secondary' && styles.colorSecondary,
    fontSize === 'subHeading' && styles.subHeading,
    fontWeight === 'bold' && styles.bold,
    style
  ]

  return (
    <Text style={textStyles} {...restOfProps}>{children}</Text>
  )
}

export default StyledText
