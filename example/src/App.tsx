import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button } from 'react-native-noxi';

export default function App() {
  return (
    <View style={styles.container}>
      <Button text={'This is an Button Component'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
