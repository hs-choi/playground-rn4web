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

const First = () => {
  const dispatch = useDispatch();
  const stateMsg = useSelector(state => {
    // console.log(state);
    return state.firstMsg
  });
  // console.log(stateMsg);
  return (
    <View style={styles.app}>
      <Text style={styles.appText}>{stateMsg}</Text>
      <Button
        title="change"
        onPress={() => dispatch(chageText())}
      >change</Button>
    </View>
  );
};

export default First;
