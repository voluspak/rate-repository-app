import { Platform } from 'react-native'

const theme = {
  appBar: {
    primary: '#24292e',
    textPrimary: '#fff',
    textSecondary: '#999'
  },
  colors: {
    textPrimary: '#24292e',
    textSecondary: '#7d7d7d',
    primary: '#0366d6',
    white: '#fff'
  },
  fontSizes: {
    body: 14,
    subHeading: 16
  },
  fonts: {
    main: Platform.select({
      ios: 'Arial',
      android: 'Roboto',
      default: 'System'
    })
  },
  fontWeights: {
    normal: '400',
    bold: '700'
  }
}

export default theme
