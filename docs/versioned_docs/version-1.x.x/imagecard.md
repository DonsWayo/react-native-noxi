---
id: imagecard
title: Image Card
---

A basic button component that should render nicely on any platform. Supports a minimal level of customization.

```tsx
import { ImageCard } from 'react-native-noxi';

<ImageCard
        itemBottom={
          <Text style={{ color: 'white', fontSize: 18 }}>Centered text</Text>
        }
        itemHeader={
          <Text style={{ color: 'white', fontSize: 18 }}>Centered text</Text>
        }
      />
```

## Example

```SnackPlayer name=ImageCard%20Example
import React from 'react';
import { StyleSheet } from 'react-native';
import { Layout, SizeBox, ImageCard, Text } from 'react-native-noxi';

const CardScreen = ({ navigation }) => {
  return (
    <Layout
      title="Card"
      containerStyle={styles.container}
    >
      <ImageCard
        automaticSize={false}
        width={200}
        height={200}
        itemBottom={
          <Text style={{ color: 'white', fontSize: 18 }}>Centered text</Text>
        }
      />
      <SizeBox />
      <ImageCard
        automaticSize={false}
        itemBottom={
          <Text style={{ color: 'white', fontSize: 18 }}>Centered text</Text>
        }
      />
      <SizeBox />
      <ImageCard
        itemBottom={
          <Text style={{ color: 'white', fontSize: 18 }}>Centered text</Text>
        }
        itemHeader={
          <Text style={{ color: 'white', fontSize: 18 }}>Centered text</Text>
        }
      />
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

export default CardScreen;

```

---

___
