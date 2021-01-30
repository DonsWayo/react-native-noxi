import React from 'react';
import { StyleSheet } from 'react-native';
import { Button, Layout, SizeBox } from 'react-native-noxi';

const ButtonScreen = ({ navigation }) => {
  return (
    <Layout
      title="Buttons"
      containerStyle={styles.container}
      canGoBack
      onPressBackIcon={() => navigation.goBack()}
    >
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

export default ButtonScreen;
