import React from 'react';
import { View, StyleSheet } from 'react-native';

interface componentNameProps {
  height?: number | string;
  width?: number | string;
}

const componentName = ({ height = 10, width = 10 }: componentNameProps) => {
  return <View style={[styles.container, { height, width }]} />;
};

export default componentName;

const styles = StyleSheet.create({
  container: { backgroundColor: 'transparent' },
});
