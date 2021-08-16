import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface CellProps {
  letter: String;
  required?: Boolean
};

const Cell = (props: CellProps) => {
  const styles = StyleSheet.create({
    hexagon: {
      width: 100,
      height: 86.6,
      justifyContent: "center",
      alignItems: "center",
      display: "flex",
      flexDirection: "row",
    },
    hexagonInner: {
      width: 50,
      height: 86.6,
      backgroundColor: props.required ? "gold" : "lightgray",
    },
    hexagonBefore: {
      borderTopWidth: 43.3,
      borderTopColor: "transparent",
      borderBottomWidth: 43.3,
      borderBottomColor: "transparent",
      borderRightWidth: 25,
      borderRightColor: props.required ? "gold" : "lightgray",
    },
    hexagonAfter: {
      borderTopWidth: 43.3,
      borderTopColor: "transparent",
      borderBottomWidth: 43.3,
      borderBottomColor: "transparent",
      borderLeftWidth: 25,
      borderLeftColor: props.required ? "gold" : "lightgray",
    },
    letter: {
      fontSize: 28,
      fontWeight: "bold",
      position: "absolute"
    }
  });

  return (
    <View style={styles.hexagon}>
      <View style={styles.hexagonBefore} />
      <View style={styles.hexagonInner} />
      <View style={styles.hexagonAfter} />
      <Text style={styles.letter}>{props.letter}</Text>
    </View>
  );
};



export default Cell;