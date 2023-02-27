import { StyleSheet, Text, View, Button } from 'react-native'
import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native'

const CounterScreen = () => {
    const [count,setcount] = useState(0)

    const incretmentHandler = () =>{
        return setcount(count +1)
    }
    const decretmentHandler = () =>{
        return count === 0 ? null:setcount(count -1)
    }
    const resetHandler = () =>{
        return setcount(0)
    }
  return (
    <View style={styles.container}>
      <Text style={styles.textHead}>Counter</Text>
      <Text style={[styles.textHead,{fontSize: 50}]}>{count}</Text>
      <View style={styles.buttoncontainer}>
        <Button title="INCREATMENT"color='red' onPress={incretmentHandler}></Button>
        <Button title="DECREATMENT"color='green' onPress={decretmentHandler}></Button>
      </View>
      <TouchableOpacity onPress={resetHandler}>
        <Text style={styles.textclick}>Reset</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={resetHandler}>
        <Text style={[styles.textclick, {color:'blue'}]}>Random</Text>
      </TouchableOpacity>
    </View>
  )
}

export default CounterScreen

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textHead:{
        fontSize: 40,
        fontWeight: 'bold',
    },
    buttoncontainer:{
        margin: 10,
        padding: 15,    
        flexDirection: 'row'
    },
    textclick:{
        fontSize: 30,
        color:'red',
    }
})