import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

 const App: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>Hello Worlda</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;