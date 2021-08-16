import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ButtonsContainer from "./ButtonsContainer";
import Cell from "./Cell";
import CellsContainer from "./CellsContainer";
import InputArea from "./InputArea";

const Game = () => {
  const [text, setText] = useState([] as string[]);

  const styles = StyleSheet.create(
    {
      containerStyle: {
        justifyContent: 'space-around',
        alignItems: 'center',
      }
    });

  const randomLetters = generateRandomLetters()

  function generateRandomLetters(): string[] {
    return ['A', 'B', 'C', 'D', 'E', 'F', 'G']
  }

  function buttonPressed(event: {text: string}) {
    const newText = (text).concat(event.text)
    setText(newText)
  }

  return (
    <SafeAreaView style={styles.containerStyle}>
      <View style={{height: 120}}></View>
      <InputArea text={text}></InputArea>
      <CellsContainer letters={randomLetters} buttonPressed={(event) => buttonPressed(event)}></CellsContainer>
      <ButtonsContainer></ButtonsContainer>
      <View style={{height: 120}}></View>
    </SafeAreaView>
  );
};

export default Game;