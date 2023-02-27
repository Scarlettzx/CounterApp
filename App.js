import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from './src/screens/Homescreen';
import CounterScreen from './src/screens/Counterscreen';
import ReducerScreen from './src/screens/ReducerScreen';
import FormScreen from './src/screens/FormScreen';
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="Homescreen"
        component={HomeScreen}
        options={{ title: "Home" }}
      />
    <Stack.Screen name="Counterscreen" component={CounterScreen} options={{ title: "Counter" }}/>
    <Stack.Screen name="Reducerscreen" component={ReducerScreen} options={{ title: "Reducer" }}/>
    <Stack.Screen name="Formscreen" component={FormScreen} options={{ title: "Form" }}/>
    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
})