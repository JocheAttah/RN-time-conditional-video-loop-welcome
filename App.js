import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Welcome from './screens/Welcome';

const App = () => {
  return (
    <View style={{...styles.container}}>
      <Welcome />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
