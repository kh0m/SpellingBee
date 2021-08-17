import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import Cell from "./Cell";

interface CellsContainerProps {
  letters: string[];
  onButtonPressed: (event: {text: string}) => void;
};

const CellsContainer = ({letters, onButtonPressed}: CellsContainerProps) => {
  const styles = StyleSheet.create(
    {
      containerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 6
      },
      top: {
        top: -4
      },
      topLeft: {
        left: -80,
        top: 214
      },
      topRight: {
        right: -80,
        top: 127
      },
      bottom: {
        bottom: -4
      },
      bottomLeft: {
        left: -80,
        bottom: 214
      },
      bottomRight: {
        right: -80,
        bottom: 127
      },
    });

  function pressButtonWith(event: {text: string}): void {
    onButtonPressed(event);
  }
  
  return (
    <View style={styles.containerStyle}>
      <TouchableOpacity onPress={(event) => {pressButtonWith({text: letters[3]})}} style={styles.topLeft}>
          <Cell letter={letters[3]}></Cell>
      </TouchableOpacity>
      <TouchableOpacity onPress={(event) => {pressButtonWith({text: letters[1]})}} style={styles.topRight}>
          <Cell letter={letters[1]}></Cell>
      </TouchableOpacity>
      <TouchableOpacity onPress={(event) => {pressButtonWith({text: letters[2]})}} style={styles.top}>
          <Cell letter={letters[2]}></Cell>
      </TouchableOpacity>
      <TouchableOpacity onPress={(event) => {pressButtonWith({text: letters[0]})}} >
        <Cell letter={letters[0]} required={true}></Cell>
      </TouchableOpacity>
      <TouchableOpacity onPress={(event) => {pressButtonWith({text: letters[4]})}} style={styles.bottom}>
          <Cell letter={letters[4]}></Cell>
      </TouchableOpacity>
      <TouchableOpacity onPress={(event) => {pressButtonWith({text: letters[5]})}} style={styles.bottomRight}>
          <Cell letter={letters[5]}></Cell>
      </TouchableOpacity>
      <TouchableOpacity onPress={(event) => {pressButtonWith({text: letters[6]})}} style={styles.bottomLeft}>
          <Cell letter={letters[6]}></Cell>
      </TouchableOpacity>
    </View>
  );
};

export default CellsContainer;