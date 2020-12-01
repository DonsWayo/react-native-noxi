import React from 'react';
import { StyleSheet } from 'react-native';
import { Layout, SelectButton, SelectItem } from 'react-native-noxi';

const SelectScreen = ({ navigation }) => {
  return (
    <Layout
      title="Selects"
      containerStyle={styles.container}
      canGoBack
      onPressBackIcon={() => navigation.goBack()}
    >
      <SelectButton label="Select">
        <SelectItem label="logom" />
        <SelectItem label="logom2" />
        <SelectItem label="logom3" />
      </SelectButton>
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

export default SelectScreen;
