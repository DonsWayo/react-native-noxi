import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { SizeBox, TextInput } from 'react-native-noxi';

const TextInputScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TextInput iconLeftName="home" />
      <SizeBox />
      <TextInput iconRightName="github" />
      <SizeBox />
      <TextInput iconLeftName="home" iconRightName="github" />
      <SizeBox />
      <TextInput iconLeftName="home" iconRightName="github" editable={false} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
  },
});

export default TextInputScreen;
