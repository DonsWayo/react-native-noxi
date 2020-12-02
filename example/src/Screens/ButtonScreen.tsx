import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Button, SizeBox } from 'react-native-noxi';

const ButtonScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Button size="small">button</Button>
      <SizeBox />
      <Button size="small" type="square" outline>
        button
      </Button>
      <SizeBox />
      <Button size="normal" type="square">
        button
      </Button>
      <SizeBox />
      <Button size="normal">button</Button>
      <SizeBox />
      <Button size="normal" loading>
        button
      </Button>
      <SizeBox />
      <Button size="normal" loading outline>
        button
      </Button>
      <SizeBox />
      <Button size="full">button</Button>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ButtonScreen;
