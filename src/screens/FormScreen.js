import { StyleSheet, Text, View, TextInput, FlatList } from "react-native";
import React, { useState, useEffect } from "react";
import { Picker } from "@react-native-picker/picker";
import { Button } from "react-native";
import { Alert } from "react-native";
import CustomerListScreen from "./CustomerListScreen";

const FormScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmpassword] = useState("");
  const [Customer, setCustomer] = useState([]);
  const [selectValue, setSelectedValue] = useState("Thailand");

  const handleRegistration = () => {
    if (!name || !email || !password) {
      Alert.alert("Register Error", "Please fill all fields");
    } else if (password !== ConfirmPassword) {
      Alert.alert("Register Error", `Password doesn't match!!`);
    } else {
      const newCustomer = {
        name,
        email,
        password,
        ConfirmPassword,
        selectValue,
      };
      setCustomer([...Customer, newCustomer]);
      console.log("New Customer: ", newCustomer);
      Alert.alert("Registration successful", "Already add new customer!!");

      setName("");
      setEmail("");
      setPassword("");
      setConfirmpassword("");
      setSelectedValue("Thailand");
    }
  };
  //   const [hidePass, setHidepass] = useState(true);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Form Registration</Text>
      <View style={styles.inputcontainer}>
        <Text style={styles.label}>Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Name"
          placeholderTextColor="thistle"
          selectionColor={"tomato"}
          //   ! autoCapitailize เปลี่ยนค่าในแป้น // characters, words, sentences, none
          autoCapitalize="words"
          value={name}
          onChangeText={setName} //! (input) => setName(input)
        />
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="thistle"
          selectionColor={"tomato"}
          autoCapitalize="none"
          keyboardType="email-address"
          inputMode="email"
          value={email}
          onChangeText={setEmail}
        />
        <Text style={styles.label}>Password</Text>
        <TextInput
          mode="outlined"
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="thistle"
          selectionColor={"tomato"}
          inputMode="numeric"
          secureTextEntry
          // ? keyboardType numeric number-pad
          keyboardType="number-pad"
          autoCapitalize="none"
          returnKeyType="next"
          maxLength={9}
          value={password}
          onChangeText={setPassword}
        />
        <Text style={styles.label}>Confirm Password</Text>
        <TextInput
          mode="outlined"
          style={styles.input}
          placeholder="Confirm Password"
          placeholderTextColor="thistle"
          selectionColor={"tomato"}
          secureTextEntry
          autoCapitalize="none"
          maxLength={9}
          value={ConfirmPassword}
          onChangeText={setConfirmpassword}
        />
      </View>
      <View style={styles.pickerContainer}>
        <Text style={styles.label}>Country:</Text>
        <Picker selectedValue={selectValue} onValueChange={setSelectedValue}>
          <Picker.Item
            label="Thailand"
            value="Thailand"
            color="indianred"
          ></Picker.Item>
          <Picker.Item label="Japan" value="Japan" color="tomato"></Picker.Item>
          <Picker.Item label="USA" value="USA" color="orange"></Picker.Item>
          <Picker.Item
            label="England"
            value="England"
            color="mediumseagreen"
          ></Picker.Item>
          <Picker.Item
            label="Other"
            value="Other"
            color="springgreen"
          ></Picker.Item>
        </Picker>
      </View>
      <Button title="Register" onPress={handleRegistration}></Button>
      {Customer.length > 0 ? (
        <Text style={styles.label}>List of Customers</Text>
      ) : null}
      <CustomerListScreen customers={Customer}></CustomerListScreen>
    </View>
  );
};
export default FormScreen;

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
    textShadowColor: "thistle",
    textShadowOffset: { width: 2, height: 3 },
    textShadowRadius: 4,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderStyle: "dashed",
    borderColor: "thistle",
    paddingHorizontal: 8,
    paddingVertical: 6,
    fontSize: 16,
    marginBottom: 8,
    underlineColor: "transparent",
    borderRadius: 10,
  },
});
