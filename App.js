import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// import BodyText from './src/elements/BodyText';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        {/*
        <Text> MemoApp! Start! </Text>
        <BodyText>Hi! Heno!</BodyText>
        */}
        <View style={styles.appbar}>
          <Text style={styles.appbarTitle}>MEMO</Text>
        </View>

        <View style={styles.memoList}>
          <View style={styles.momoListItem}>
            <Text style={styles.moemoTitle}>Lesson 1</Text>
            <Text style={styles.momoDate}>2018.01.01</Text>
          </View>
          <View style={styles.momoListItem}>
            <Text style={styles.moemoTitle}>Lesson 2</Text>
            <Text style={styles.momoDate}>2018.01.02</Text>
          </View>
          <View style={styles.momoListItem}>
            <Text style={styles.moemoTitle}>Lesson 3</Text>
            <Text style={styles.momoDate}>2018.01.03</Text>
          </View>
          <View style={styles.momoListItem}>
            <Text style={styles.moemoTitle}>Lesson 4</Text>
            <Text style={styles.momoDate}>2018.01.04</Text>
          </View>
          <View style={styles.momoListItem}>
            <Text style={styles.moemoTitle}>Lesson 5</Text>
            <Text style={styles.momoDate}>2018.01.05</Text>
          </View>
        </View>

        <View style={styles.memoAddButton}>
          <Text style={styles.memoAddButtonTitle}>+</Text>
        </View>

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
  memoAddButton: {
    position: 'absolute',
    bottom: 32,
    right: 32,
    width: 48,
    height: 48,
    backgroundColor: 'rgba(247, 36, 117, 1)',
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  memoAddButtonTitle: {
    fontSize: 32,
    color: '#fff',
    lineHeight: 32,
  },
  memoList: {
    width: '100%',
    flex: 1,
    paddingTop: 70,
  },
  momoListItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eaeaea',
  },
  memoTitle: {
    fontSize: 18,
    marginBottom: 4,
  },
  momoDate: {
    fontSize: 11,
    color: '#dfdfdf',
    paddingTop: 5,
  },
  appbar: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 70,
    paddingTop: 30,
    backgroundColor: '#f8f8f8',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    zIndex: 10,
  },
  appbarTitle: {
    color: '#101010',
    fontSize: 16,
    fontWeight: '600',
  },
});
