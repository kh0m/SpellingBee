import React, { useState } from "react";
import { StyleSheet, Text } from "react-native";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ButtonsContainer from "./ButtonsContainer";
import Cell from "./Cell";
import CellsContainer from "./CellsContainer";

interface InputAreaProps {
  text: string[];
};

const InputArea = ({text}: InputAreaProps) => {
  const [currentFont, setCurrentFont] = useState(36);

  const styles = StyleSheet.create(
    {
      containerStyle: {
        borderColor: 'gray',
        flexDirection: 'row',
        alignItems: 'center',
        borderRightColor: "gold",
        borderRightWidth: 4,
        paddingHorizontal: 8,
        height: 50,
        maxWidth: 300
      },
      textStyle: {
        fontSize: currentFont,
        fontWeight: "bold",
      }
    });

  return (
    <View style={styles.containerStyle}>
      <Text style={styles.textStyle}
      numberOfLines={ 1 }
       adjustsFontSizeToFit={true}
       onTextLayout={ (e) => {
        const { lines } = e.nativeEvent;
        if (lines.length > 1) {
          setCurrentFont(currentFont - 1);
        }
      } }>{text}</Text>
    </View>
  );
};

export default InputArea;