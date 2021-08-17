import React, { useState } from "react";
import { Dimensions, StyleSheet, Text } from "react-native";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { alphabet } from "./alphabet";
import ButtonsContainer from "./ButtonsContainer";
import CellsContainer from "./CellsContainer";
import FoundWords from "./FoundWords";
import InputArea from "./InputArea";

const Game = () => {
  const [text, setText] = useState([] as string[]);
  const [randomLetters, setRandomLetters] = useState(generateRandomLetters());
  const [points, setPoints] = useState(123);
  const [foundWords, setFoundWords] = useState(['Test', 'Found', 'Apple']);


  const styles = StyleSheet.create(
    {
      containerStyle: {
        justifyContent: 'space-between',
        alignItems: 'center',
        height: Dimensions.get('window').height
      }
    });

  function getRandomIndex(): number {
    return Math.floor(Math.random() * alphabet.length)
  }

  function generateRandomLetters(): string[] {
    let array = [] as string[]
    let index = 0

    while (index < 7) {
      const randomIndex = getRandomIndex()
      if (!array.includes(alphabet[randomIndex])) {
        array = array.concat(alphabet[randomIndex])
        index++
      }
    }

    return array
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
      <View style={{flex: 2}}></View>
      <View style={{flex: 1}}>
        <Text style={{fontSize: 20}}>Points: {points}</Text>
      </View>
      <View style={{flex: 1, width: '100%', alignContent: 'center'}}>
        <FoundWords words={foundWords}></FoundWords>
      </View>
      <View style={{flex: 2}}></View>
      <View style={{flex: 2}}>
        <InputArea text={text} requiredLetter={randomLetters[0]}></InputArea>
      </View>
      <CellsContainer letters={randomLetters} onButtonPressed={(event) => addLetter(event)}></CellsContainer>
      <View style={{flex: 1}}></View>
      <ButtonsContainer onDeleteLetter={deleteLetter} onShuffle={shuffle}></ButtonsContainer>
      <View style={{flex: 1}}></View>
    </SafeAreaView>
  );
};

export default Game;