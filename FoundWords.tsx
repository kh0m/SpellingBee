import React, { useEffect, useState } from "react";
import { StyleSheet, Text } from "react-native";
import { View } from "react-native";

interface FoundWordsProps {
  words: string[];
};

const FoundWords = ({words}: FoundWordsProps) => {
  const [currentFont, setCurrentFont] = useState(36);

  const styles = StyleSheet.create(
    {
      containerStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 50,
        paddingHorizontal: 24,
        borderColor: 'lightgray',
        borderWidth: 2,
        marginHorizontal: 20
      },
      textStyle: {
        fontSize: currentFont,
        fontWeight: "bold",
      }
    });


  return (
    <View style={styles.containerStyle}>
      <Text numberOfLines={1}>{words.join('  ')}</Text>
      <Text style={{right: 14, position: 'absolute'}}>⬇</Text>
    </View>
  );
};

export default FoundWords;