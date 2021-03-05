---
id: text
title: Text
---

A basic button component that should render nicely on any platform. Supports a minimal level of customization.

```tsx
import { Text } from 'react-native-noxi';

  <Text type="h1">H1</Text>

```

## Example

```SnackPlayer name=Text%20Example
import React from 'react';
import { StyleSheet } from 'react-native';
import { Layout, SizeBox, Text } from 'react-native-noxi';

const TextsScreen = ({ navigation }) => {
  return (
    <Layout
      title="Texts"
      containerStyle={styles.container}
      canGoBack
      onPressBackIcon={() => navigation.goBack()}
    >
      <Text type="h1">H1</Text>
      <SizeBox />
      <Text type="h2">H2</Text>
      <SizeBox />
      <Text type="h3">H3</Text>
      <SizeBox />
      <Text type="h4">H4</Text>
      <SizeBox />
      <Text type="h5">H5</Text>
      <SizeBox />
      <Text type="h6">H6</Text>
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

export default TextsScreen;

```

---


___
