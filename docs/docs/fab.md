---
id: fab
title: FAB
---

A basic button component that should render nicely on any platform. Supports a minimal level of customization.

```tsx
import { FAB } from 'react-native-noxi';

<FAB icon="edit" position="bottom-right" visible={visible} />
```

## Example

```SnackPlayer name=Button%20Example
import React, { useState } from 'react';
import { Image, StyleSheet } from 'react-native';
import { Button, FAB, Layout, SizeBox } from 'react-native-noxi';
import {
  LigthTheme,
  Provider as ReactNativeNoxiProvider,
} from 'react-native-noxi';

const App = () => {
  const [visible, setvisible] = useState(true);

  return (
    <ReactNativeNoxiProvider theme={LigthTheme}>
    <Layout
      title="FAB"
      containerStyle={styles.container}
    >
      <FAB icon="edit" position="bottom-right" visible={visible} />
      <FAB icon="delete" position="bottom-left" visible={visible} />
      <FAB icon="QQ" position="top-left" visible={visible} />
      <FAB icon="warning" position="top-right" visible={visible} />
      <FAB
        icon="github"
        position="top-right"
        style={{ top: 80, left: 150 }}
        visible={visible}
      />
      <FAB
        icon="github"
        position="top-right"
        style={{ top: 380, left: 150, backgroundColor: 'red' }}
        visible={visible}
      />
    </Layout>
    </ReactNativeNoxiProvider>
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

### backgroundColorOverlay

• `Optional` **backgroundColorOverlay**: undefined \| string

___

### children

• `Optional` **children**: ReactNode
___

### duration

• `Optional` **duration**: undefined \| string
___

### header

• `Optional` **header**: ReactNode

___

### message

• `Optional` **message**: undefined \| string

___

### show

• `Optional` **show**: undefined \| false \| true

___

### theme

•  **theme**: [Theme]
___

### title

• `Optional` **title**: undefined \| string
