---
id: select
title: Select
---

A basic button component that should render nicely on any platform. Supports a minimal level of customization.

```tsx
import { SelectButton, SelectItem } from 'react-native-noxi';

<SelectButton label="Select">
      <SelectItem label="label" />
      <SelectItem label="laaabel" />
</SelectButton>
```

## Example

```SnackPlayer name=Notification%20Example
import React from 'react';
import { StyleSheet } from 'react-native';
import {
  Layout,
  SelectButton,
  SelectItem,
  Chip,
  SizeBox,
  LigthTheme,
  Provider as ReactNativeNoxiProvider,
} from 'react-native-noxi';

const SelectScreen = () => {
  return (
    <ReactNativeNoxiProvider theme={LigthTheme}>
    <Layout
      title="Selects"
      containerStyle={styles.container}
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

export default SelectScreen;


```

---

___
