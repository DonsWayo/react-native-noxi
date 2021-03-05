---
id: textinput
title: Text Input
---

A basic button component that should render nicely on any platform. Supports a minimal level of customization.

```tsx
import { TextInput } from 'react-native-noxi';

<TextInput iconLeftName="home"  />
```

## Example

```SnackPlayer name=TextInput%20Example&supportedPlatforms=ios,android
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { SizeBox, TextInput } from 'react-native-noxi';

const TextInputScreen = () => {
  return (
    <View style={styles.container}>
      <TextInput iconLeftName="home" />
      <SizeBox />
      <TextInput iconRightName="github" />
      <SizeBox />
      <TextInput iconLeftName="home" iconRightName="github" />
      <SizeBox />
      <TextInput iconLeftName="home" iconRightName="github" editable={false} />
    </View>
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


```

---

___
