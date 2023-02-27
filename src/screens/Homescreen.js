import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";
import { Colors } from "react-native/Libraries/NewAppScreen";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button
        title="CotunerScreen"
        onPress={() => navigation.navigate("Counterscreen")}
      />
      <Button
        title="ReducerScreen"
        onPress={() => navigation.navigate("Reducerscreen")}
      />
      <Button
        title="FormScreen"
        color='green'
        onPress={() => navigation.navigate("Formscreen")
      }
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
