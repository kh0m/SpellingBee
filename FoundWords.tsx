import React, { useEffect, useState } from "react";
import { Dimensions, Modal, Pressable, ScrollView, StyleSheet, Text, TouchableOpacity } from "react-native";
import { View } from "react-native";

interface FoundWordsProps {
  words: string[];
  onOpenFullList: ()=>void
};

const FoundWords = ({words, onOpenFullList}: FoundWordsProps) => {

  const styles = StyleSheet.create(
    {
      containerStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 50,
        paddingHorizontal: 24,
        borderColor: 'lightgray',
        borderWidth: 2,
        marginHorizontal: 20,
        opacity: 100
      },
      textStyle: {
        textTransform: 'capitalize'
      }
    });

  function openFullList() {
    onOpenFullList()
  }

  return (
    <Pressable style={styles.containerStyle} onPress={()=>{openFullList()}}>
      <Text numberOfLines={1} style={styles.textStyle}>{(words).join('  ')}</Text>
      <Text style={{right: 14, position: 'absolute'}}>⬇</Text>
    </Pressable>
  );
};

export default FoundWords;