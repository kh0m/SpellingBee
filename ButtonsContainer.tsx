import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { StyleSheet, View } from "react-native";


interface ButtonsContainerProps {
  onDeleteLetter: () => void;
  onShuffle: () => void;
  onSubmit: () => void;
};

const ButtonsContainer = ({onDeleteLetter, onShuffle, onSubmit}: ButtonsContainerProps) => {
  const styles = StyleSheet.create(
    {
      containerStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flex: 2,
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

  function deleteLetter(): void {
    onDeleteLetter();
  }

  function shuffle(): void {
    onShuffle();
  }

  function submit(): void {
    onSubmit();
  }
  
  return (
    <View style={styles.containerStyle}>
      <TouchableOpacity onPress={()=>{deleteLetter()}} style={styles.button} >
        <Text>Delete</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>{shuffle()}} style={styles.shuffle} >
        <Text>🔀</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>{submit()}} style={styles.button} >
        <Text>Enter</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ButtonsContainer;