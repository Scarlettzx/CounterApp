import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Button } from "react-native";
import { FlatList } from "react-native";

const ReducerScreen = () => {
  const [color, setColor] = useState([]);

  // useEffect(()=> setColor(`rgb(10,20,30)`), []);

  useEffect(() => console.log(color), [color]);

  return (
    <View style={styles.container}>
      {/* <Text style={{ fontSize: 44, color: "white", marginBottom: 10 }}>
        {color}
      </Text> */}
      <Button
        title="Change a color"
        onPress={() => setColor([...color, randomRGB()])}
      ></Button>
      <FlatList
        data={color}
        keyExtractor={(item) => item}
        horizontal
        renderItem={({ item }) => {
          return (
            <View
              style={{
                height: 100,
                width: Math.floor(Math.random() * 10),
                backgroundColor: item,
              }}
            />
          );
        }}
      />
    </View>
  );
};
const randomRGB = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  return `rgb(${red},${green},${blue})`;
};

export default ReducerScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 15,
  },
});
