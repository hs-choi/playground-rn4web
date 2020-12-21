import React from "react";
import { Text, View, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  app: {
    height: '100%'
  },
  appText: {
    margin: 'auto'
  }
});

const App = () => {
  return (
    <View style={styles.app}>
      <Text style={styles.appText}>hello world!</Text>
    </View>
  );
};

export default App;
