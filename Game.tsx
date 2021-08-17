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
  const [randomLetters, setRandomLetters] = useState(generateRandomLetters());


  const styles = StyleSheet.create(
    {
      containerStyle: {
        justifyContent: 'space-around',
        alignItems: 'center',
      }
    });

  function generateRandomLetters(): string[] {
    return ['A', 'B', 'C', 'D', 'E', 'F', 'G']
  }

  function addLetter(event: {text: string}) {
    const newText = text.concat(event.text)
    setText(newText)
  }

  function deleteLetter(): void {
    const newText = text.slice(0, -1)
    setText(newText)
  }

  function shuffle(): void {
    const requiredLetter = randomLetters[0]
    const lettersToShuffle = randomLetters.slice(1)

    let currentIndex = lettersToShuffle.length

    while (currentIndex != 0) {
      let randomIndex = Math.floor(Math.random() * currentIndex)
      currentIndex--

      [lettersToShuffle[currentIndex], lettersToShuffle[randomIndex]] = 
        [lettersToShuffle[randomIndex], lettersToShuffle[currentIndex]]
    }

    setRandomLetters([requiredLetter].concat(lettersToShuffle))
  }

  return (
    <SafeAreaView style={styles.containerStyle}>
      <View style={{height: 120}}></View>
      <InputArea text={text} requiredLetter={randomLetters[0]}></InputArea>
      <CellsContainer letters={randomLetters} onButtonPressed={(event) => addLetter(event)}></CellsContainer>
      <ButtonsContainer onDeleteLetter={deleteLetter} onShuffle={shuffle}></ButtonsContainer>
      <View style={{height: 120}}></View>
    </SafeAreaView>
  );
};

export default Game;