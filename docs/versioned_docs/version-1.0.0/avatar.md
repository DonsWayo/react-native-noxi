---
id: avatar
title: Avatar
---

A basic button component that should render nicely on any platform. Supports a minimal level of customization.

```tsx
import { Avatar } from 'react-native-noxi';

<Avatar text="Jhon Doe" type="round" />
```

## Example

```SnackPlayer name=Button%20Example
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Avatar, Layout, SizeBox } from 'react-native-noxi';

const App = () => {
  return (
    <View style={styles.container}>
      <Avatar text="Jhon Doe" type="round" />
      <SizeBox />
      <SizeBox />
      <Avatar
        src={{
          uri:'https://reactnative.dev/img/tiny_logo.png',
        }}
        type="round"
      />
      <SizeBox />
      <Avatar
        src={{
          uri:'https://reactnative.dev/img/tiny_logo.png',
        }}
        type="square"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;

```

---

# Reference

## Properties

### color

• `Optional` **color**: undefined \| string

___

### onPress

• `Optional` **onPress**: undefined \| (event: GestureResponderEvent) => void

___

### size

• `Optional` **size**: undefined \| number

___

### src

• `Optional` **src**: ImageSourcePropType

___

### style

• `Optional` **style**: `StyleProp<ViewStyle>`

___

### styleText

• `Optional` **styleText**: `StyleProp<TextStyle>`

___

### text

• `Optional` **text**: any

___

### textColor

• `Optional` **textColor**: undefined \| string

___

### theme

•  **theme**: [Theme]


___

### type

• `Optional` **type**: \"round\" \| \"square\"

