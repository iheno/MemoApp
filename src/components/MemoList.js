import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class MemoList extends React.Component {
  render() {
    return (
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
    );
  }
}

const styles = StyleSheet.create({
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
});

export default MemoList;
