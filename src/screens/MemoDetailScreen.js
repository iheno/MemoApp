import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import CircleButton from '../elements/CircleButton';

class MemoDetailScreen extends React.Component {
  render() {
    return (
      <View>

        <View style={styles.memoHeader}>
          <Text style={styles.memoHeaderTitle}>Memo idea</Text>
          <Text style={styles.memoHeaderDate}>Today</Text>
        </View>

        <View style={styles.memoContents}>
          <Text>text text text ...</Text>
        </View>

        <CircleButton>+</CircleButton>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  memoHeader: {},
});
export default MemoDetailScreen;
