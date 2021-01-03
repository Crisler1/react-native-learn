import React from 'react'
import {Button,  Text, View } from 'react-native'
import styles from './styles/styleSheet'
const App = () => {
  const [state, setState] = React.useState(0)
  return (
    <View style={styles.container}>
      <Text>{state }</Text>
      <Button
  onPress={() => setState(state + 1) }
  title="Learn More"
  color="#841584"
  />
    </View>
  )
}

export default App


