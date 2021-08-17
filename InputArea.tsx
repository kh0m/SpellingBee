import React, { useEffect, useState } from "react";
import { StyleSheet, Text } from "react-native";
import { View } from "react-native";

interface InputAreaProps {
  text: string[];
  requiredLetter: string
};

const InputArea = ({text, requiredLetter}: InputAreaProps) => {
  const [currentFont, setCurrentFont] = useState(36);

  const [showCursor, setShowCursor] = useState(true);

  function blink() {
    const interval = setInterval(() => {
      setShowCursor((showCursor) => !showCursor);
    }, 500);
    return interval
  }

  useEffect(() => {
    const interval = blink()
    return () => clearInterval(interval);
  }, []);

  const styles = StyleSheet.create(
    {
      containerStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRightColor: showCursor ? "gold" : "transparent",
        borderRightWidth: 4,
        paddingHorizontal: 6,
        height: 50,
        maxWidth: 300,
      },
      textStyle: {
        fontSize: currentFont,
        fontWeight: "bold",
      },
      textStyleYellow: {
        fontSize: currentFont,
        fontWeight: "bold",
        color: "gold"
      }
    });

  function onTextLayout(e: { nativeEvent: { lines: any; }; }) {
    const { lines } = e.nativeEvent;
    if (lines.length > 1) {
      setCurrentFont(currentFont - 1);
    }
  }

  const innerText = text.map((letter, index) => {
    return <Text key={index} style={letter == requiredLetter ? styles.textStyleYellow : styles.textStyle}>{letter}</Text>
  })

  return (
    <View style={styles.containerStyle}>
      <Text style={styles.textStyle}
        numberOfLines={ 1 }
        adjustsFontSizeToFit={true}
        onTextLayout={ onTextLayout }>{
          innerText
        }</Text>
    </View>
  );
};

export default InputArea;