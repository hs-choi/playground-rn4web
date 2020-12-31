import React from "react";
import { StyleSheet } from "react-native";
import { Provider } from 'react-redux';
import store from "./store";
import First from './component/First';

const styles = StyleSheet.create({
  app: {
    height: '100%'
  },
  appText: {
    margin: 'auto',
    fontSize: '30px'
  }
});

const App = () => {
  return (
    <Provider store={store}>
      <First />
    </Provider>
  );
};

export default App;
