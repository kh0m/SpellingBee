import React, { useState } from "react";
import { Dimensions, Modal, Pressable, StyleSheet, Text } from "react-native";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { alphabet } from "./alphabet";
import ButtonsContainer from "./ButtonsContainer";
import CellsContainer from "./CellsContainer";
import { DictionaryService } from "./dictionary-service";
import { ErrorMessage } from "./error-message";
import FoundWords from "./FoundWords";
import InputArea from "./InputArea";

const Game = () => {
  const [text, setText] = useState([] as string[]);
  const [randomLetters, setRandomLetters] = useState(generateRandomLetters());
  const [points, setPoints] = useState(0);
  const [foundWords, setFoundWords] = useState([] as string[]);
  const [alphabetizedWords, setalphabetizedWords] = useState([] as string[]);

  const [showModal, setShowModal] = useState(false)

  const styles = StyleSheet.create(
    {
      containerStyle: {
        justifyContent: 'space-between',
        alignItems: 'center',
        height: Dimensions.get('window').height
      },
      modalStyle: {
        paddingVertical: 40,
        paddingHorizontal: 20,
        height: 600,
        borderColor: 'lightgray',
        borderWidth: 2,
        marginVertical: 60,
        marginHorizontal: 20,
      },
      foundWordsTextStyle: {
        fontSize:16,
        padding: 6,
        paddingTop: 10,
        textTransform: 'capitalize',
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

  function showError(message: ErrorMessage) {
    console.error(message)
    setText([''])
  }

  function countPoints(text: string): number {
    if (text.length == 4) {
      return 1
    } else if (text.length < 7) {
      return text.length
    } else {
      return 7 + text.length
    }
  }

  function addWordToFoundList(newWord: string): void {
    setFoundWords([newWord].concat(foundWords))
  }

  async function submit(): Promise<void> {
    const newWord = text.join('')

    if (newWord.length == 0) { return }

    if (newWord.length < 4) {
      showError(ErrorMessage.tooFewLetters)
      return
    }

    if (!newWord.includes(randomLetters[0])) {
      showError(ErrorMessage.missingCenterLetter)
      return
    }
    
    try {
      const wordFound = await DictionaryService.checkWord(newWord)
      if (!wordFound) {
        showError(ErrorMessage.notFound)
        return
      }

      if (foundWords.includes(newWord)) {
          showError(ErrorMessage.alreadyFound)
          return
      }
      setPoints(points + countPoints(newWord))
      addWordToFoundList(newWord)

    } catch(e) {
      console.error(e)
      showError(ErrorMessage.somethingWentWrong)
    }

    setText([''])
  }

  function openFullList() {
    setalphabetizedWords([...foundWords].sort())
    setShowModal(true)
  }

  return (
    <SafeAreaView style={styles.containerStyle}>
      <View style={{flex: 2}}></View>
      <View style={{flex: 1}}>
        <Text style={{fontSize: 20}}>Points: {points}</Text>
      </View>
      <View style={{flex: 1, width: '100%', alignContent: 'center'}}>
        <FoundWords words={foundWords} onOpenFullList={openFullList}></FoundWords>
      </View>
      <View style={{flex: 2}}></View>
      <View style={{flex: 2}}>
        <InputArea text={text} requiredLetter={randomLetters[0]}></InputArea>
      </View>
      <CellsContainer letters={randomLetters} onButtonPressed={(event) => addLetter(event)}></CellsContainer>
      <View style={{flex: 1}}></View>
      <ButtonsContainer onDeleteLetter={deleteLetter} onShuffle={shuffle} onSubmit={submit}></ButtonsContainer>
      <View style={{flex: 1}}></View>

      {/* Should be custom component */}
      <Modal visible={showModal} transparent={false} animationType="fade" onRequestClose={()=>{setShowModal(false)}}>
        <SafeAreaView>
            <Pressable style={styles.modalStyle} onPress={()=>setShowModal(false)}>
              <Text style={{fontSize:24, fontWeight:'bold', marginBottom: 18}}>Found Words:</Text>
              {
                alphabetizedWords.map((word, index) => {
                  return <View key={index} style={{borderBottomColor: 'gray', borderBottomWidth:1}}>
                    <Text key={index} style={styles.foundWordsTextStyle}>{word}</Text>
                  </View>
                })
              }
            </Pressable>
        </SafeAreaView>
      </Modal>
    </SafeAreaView>
  );
};

export default Game;