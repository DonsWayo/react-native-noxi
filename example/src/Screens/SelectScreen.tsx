import React from 'react';
import { StyleSheet } from 'react-native';
import {
  Layout,
  SelectButton,
  SelectItem,
  Chip,
  SizeBox,
} from 'react-native-noxi';

const SelectScreen = ({ navigation }) => {
  return (
    <Layout
      title="Selects"
      containerStyle={styles.container}
      canGoBack
      onPressBackIcon={() => navigation.goBack()}
    >
      <SelectButton label="Select">
        <SelectItem label="label" />
        <SelectItem label="laaabel" />
      </SelectButton>
      <SizeBox />
      <SelectButton label="Select">
        <SelectItem label="label" icon="github" />
        <SelectItem label="laaabel" icon="github" />
      </SelectButton>
      <SizeBox />
      <SelectButton label="Select">
        <Chip icon="github">Basic Text</Chip>
        <SizeBox />
        <Chip icon="github">Basic Text</Chip>
        <SizeBox />
        <Chip icon="github">Basic Text</Chip>
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
