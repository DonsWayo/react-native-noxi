import React from 'react';
import { StyleSheet } from 'react-native';
import { Layout, SizeBox, TextInput } from 'react-native-noxi';

const TextInputScreen = ({ navigation }) => {
  return (
    <Layout
      title="Text Input"
      containerStyle={styles.container}
      canGoBack
      onPressBackIcon={() => navigation.goBack()}
    >
      <TextInput iconLeftName="home" />
      <SizeBox />
      <TextInput iconRightName="github" />
      <SizeBox />
      <TextInput iconLeftName="home" iconRightName="github" />
      <SizeBox />
      <TextInput iconLeftName="home" iconRightName="github" editable={false} />
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default TextInputScreen;
