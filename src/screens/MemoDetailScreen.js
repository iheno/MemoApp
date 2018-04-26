import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import CircleButton from '../elements/CircleButton';

class MemoDetailScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <View style={styles.memoHeader}>
            <View>
              <Text style={styles.memoHeaderTitle}>Memo idea</Text>
              <Text style={styles.memoHeaderDate}>Today</Text>
            </View>
          </View>
        </View>

        <View style={styles.memoContents}>
          <Text>
            text text text text text
          </Text>
        </View>

        <CircleButton color="white" style={styles.editButton}>+</CircleButton>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  memoHeader: {
    height: 80,
    backgroundColor: '#101010',
    justifyContent: 'center',
    padding: 10,
  },
  memoHeaderTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 4,
    color: '#fff',
  },
  memoHeaderDate: {
    fontSize: 12,
    color: '#fff',
  },
  memoContents: {
    padding: 20,
    flex: 1,
  },
  editButton: {
    top: 55,
  },
});

export default MemoDetailScreen;
