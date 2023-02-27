import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";

const CustomerListScreen = ({ customers }) => {
  return (
    <FlatList
      data={customers}
      keyExtractor={(item, index) => item.index}
      contentContainerStyle={{ paddingVertical: 16 }}
      renderItem={({ item }) => {
        return (
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={{fontSize: 16, fontWeight: 'bold'}}>{item.name} </Text>
            <Text style={{fontSize: 14}}>{item.email} </Text>
            <Text style={{fontSize: 14}}>{item.selectValue} </Text>
          </View>
        );
      }}
    ></FlatList>
  );
};

export default CustomerListScreen;

const styles = StyleSheet.create({});
