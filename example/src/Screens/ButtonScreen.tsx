import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import { Button } from 'react-native-noxi';

const ButtonScreen = () => {
  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={styles.container}>
        <Button text={'This is an Button Component'} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
});

export default ButtonScreen;
