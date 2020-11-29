import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import { Button, SizeBox } from 'react-native-noxi';

const ButtonScreen = () => {
  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={styles.container}>
        <Button size="small">button</Button>
        <SizeBox />
        <Button size="normal">button</Button>
        <SizeBox />
        <Button size="normal" loading>
          button
        </Button>
        <SizeBox />
        <Button size="full">button</Button>
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
