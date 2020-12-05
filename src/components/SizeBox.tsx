import React from 'react';
import { View, StyleSheet } from 'react-native';

interface SizeBoxProps {
  height?: number | string;
  width?: number | string;
}

const SizeBox = ({ height = 10, width = 10 }: SizeBoxProps) => {
  return <View style={[styles.container, { height, width }]} />;
};

export default SizeBox;

const styles = StyleSheet.create({
  container: { backgroundColor: 'transparent' },
});
