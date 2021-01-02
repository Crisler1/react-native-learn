import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Text} from 'react-native';
import {NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import UserForm from './views/UserForm'
import UserList from './views/UserForm'

const Stack = createStackNavigator()

 const App: React.FC = () => {
   return (
   
     
   
     
    <View style={styles.container}>
       <Text>
         Hello World
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;