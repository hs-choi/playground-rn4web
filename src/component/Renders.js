import React from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { useDispatch, useSelector } from 'react-redux';
import { chageText } from '../action/action';

const styles = StyleSheet.create({
  app: {
    height: '100%'
  },
  appText: {
    margin: 'auto',
    fontSize: '30px'
  }
});

const Renders = (props) => {
  const { onChange, testText } = props;
  // console.log(stateMsg);
  return (
    <View style={styles.app}>
      <Text style={styles.appText}>{testText}</Text>
      <Button
        title="change"
        onPress={onChange}
      >change</Button>
    </View>
  );
};

export default Renders;
