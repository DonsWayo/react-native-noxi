---
id: button
title: Button
---

A basic button component that should render nicely on any platform. Supports a minimal level of customization.

```tsx
import { Button } from 'react-native-noxi';

<Button
  size="small"
  onPress={click}
  size="normal">
  button name!
</Button>
```

## Example

```SnackPlayer name=Button%20Example
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import {Button, SizeBox} from 'react-native-noxi';


export default function App() {
  return (
    <View style={styles.container}>
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

```

---

# Reference

## Properties

### children

•  **children**: React.ReactNode

___

### loading

• `Optional` **loading**: undefined \| false \| true

___

### onLayout

• `Optional` **onLayout**: undefined \| (event: any) => void

___

### onPress

• `Optional` **onPress**: undefined \| (event: GestureResponderEvent) => void

___

### size

• `Optional` **size**: \"small\" \| \"normal\" \| \"full\"

___

### style

• `Optional` **style**: `StyleProp<ViewStyle>`

___

### theme

•  **theme**: [Theme]

___
