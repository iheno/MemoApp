import React from 'react';
import { StyleSheet, View } from 'react-native';

import Appbar from './src/components/Appbar';
import MemoListScreen from './src/screens/MemoListScreen';

/*
import MemoList from './src/components/MemoList';
import CircleButton from './src/elements/CircleButton';
*/

// import BodyText from './src/elements/BodyText';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        {/*
        <Text> MemoApp! Start! </Text>
        <BodyText>Hi! Heno!</BodyText>
        */}
        {/*
          <MemoList />
          <CircleButton>+</CircleButton>
        */}
        <Appbar />
        <MemoListScreen />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
