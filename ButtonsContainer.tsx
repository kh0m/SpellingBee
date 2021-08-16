import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { Button, StyleSheet, View } from "react-native";
import { color } from "react-native-reanimated";
import Cell from "./Cell";

const ButtonsContainer = () => {
  const styles = StyleSheet.create(
    {
      containerStyle: {
        flexDirection: 'row',
      },
      button: {
        width: 100,
        height: 50,
        borderWidth: 1,
        borderColor: "gray",
        borderRadius: 40,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
      },
      shuffle: {
        width: 50,
        height: 50,
        borderWidth: 1,
        borderColor: "gray",
        borderRadius: 40,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 16
      }
    });
  
  return (
    <View style={styles.containerStyle}>
      <TouchableOpacity onPress={()=>{}} style={styles.button} >
        <Text>Delete</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>{}} style={styles.shuffle} >
        <Text>🔀</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>{}} style={styles.button} >
        <Text>Enter</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ButtonsContainer;