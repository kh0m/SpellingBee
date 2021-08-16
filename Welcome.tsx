
import { StackNavigationProp } from "@react-navigation/stack/lib/typescript/src/types";
import React from "react"
import { Button, SafeAreaView, ScrollView, StatusBar, Text, useColorScheme, View } from "react-native"
import { Colors, DebugInstructions, Header, LearnMoreLinks, ReloadInstructions } from "react-native/Libraries/NewAppScreen";
import { RootStackParamList } from "./App";
import Section from "./Section";
import { styles } from "./styles";

type WelcomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Welcome'>;

type Props = {
  navigation: WelcomeScreenNavigationProp;
};

const Welcome = ({ navigation }: Props) => {
  const isDarkMode = useColorScheme() === 'dark';
  
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
    <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={backgroundStyle}>
      <Header />
      <View
        style={{
          backgroundColor: isDarkMode ? Colors.black : Colors.white,
        }}>
        <Section title="Play SpellingBee">
          <Button title="Launch Game" onPress={()=>{ navigation.navigate('Game')} }></Button>
        </Section>
        <Section title="Step One">
          Edit <Text style={styles.highlight}>App.js</Text> to change this
          screen and then come back to see your edits.
        </Section>
        <Section title="See Your Changes">
          <ReloadInstructions />
        </Section>
        <Section title="Debug">
          <DebugInstructions />
        </Section>
        <Section title="Learn More">
          Read the docs to discover what to do next:
        </Section>
        <LearnMoreLinks />
      </View>
    </ScrollView>
  </SafeAreaView>
  )
}


export default Welcome;
