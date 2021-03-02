---
id: dialog
title: Dialog
---

A basic button component that should render nicely on any platform. Supports a minimal level of customization.

```tsx
import { Dialog } from 'react-native-noxi';

<Dialog show={showDialog} title="Title" message="Hi all!">
    <Button size="small" onPress={() => setshowDialog(false)}>
      close
    </Button>
    <Button size="small" onPress={() => setshowDialog(false)}>
      ok
  </Button>
</Dialog>
```

## Example

```SnackPlayer name=Dialog%20Example&supportedPlatforms=ios,android
import React, { useState } from 'react';
import { Image, StyleSheet } from 'react-native';
import { Button, Dialog, Layout, SizeBox } from 'react-native-noxi';
import {
  LigthTheme,
  Provider as ReactNativeNoxiProvider,
} from 'react-native-noxi';

const App = () => {
  const [showDialog1, setshowDialog1] = useState(false);
  const [showDialog2, setshowDialog2] = useState(false);
  const [showDialog3, setshowDialog3] = useState(false);
  const [showDialog4, setshowDialog4] = useState(false);

  return (
    <ReactNativeNoxiProvider theme={LigthTheme}>
    <Layout
      title="Dialogs"
      containerStyle={styles.container}
    >
      <Button size="normal" onPress={() => setshowDialog1(true)}>
        show dialog 1
      </Button>
      <Dialog
        show={showDialog1}
        title="Title"
        header={
          <Image
            style={{ width: 100, height: 100 }}
            source={{
              uri:
                'https://images.squarespace-cdn.com/content/v1/592e86ee9de4bb6e73d8c154/1514032294927-RQFIXIR332YVK2D58E64/ke17ZwdGBToddI8pDm48kKDpgNR86wHb9rK2Z-rJDk5Zw-zPPgdn4jUwVcJE1ZvWEtT5uBSRWt4vQZAgTJucoTqqXjS3CfNDSuuf31e0tVFgVnh1ouJBzzcVsowoUcyUM2gKs4UUyTig_7oGFCP1TmQ6l2WM7tn7mqHTODzkmeM/32078472-5053adea-baa7-11e7-9034-519002f12ac7.png',
            }}
          />
        }
      >
        <Button size="small" onPress={() => setshowDialog1(false)}>
          close
        </Button>
      </Dialog>
      <SizeBox />
      <Button size="normal" onPress={() => setshowDialog2(true)}>
        show dialog 2
      </Button>
      <Dialog show={showDialog2} title="Title">
        <Button size="small" onPress={() => setshowDialog2(false)}>
          close
        </Button>
        <Button size="small" onPress={() => setshowDialog2(false)}>
          ok
        </Button>
      </Dialog>
      <SizeBox />
      <Button size="normal" onPress={() => setshowDialog3(true)}>
        show dialog 3
      </Button>
      <Dialog
        show={showDialog3}
        title="LOL"
        message="long very long message that says something that is matter"
      >
        <Button size="small" onPress={() => setshowDialog3(false)}>
          ok
        </Button>
      </Dialog>
      <SizeBox />
      <Button size="normal" onPress={() => setshowDialog4(true)}>
        show dialog 4
      </Button>
      <Dialog
        show={showDialog4}
        backgroundColorOverlay="red"
        title="Red bg"
        message="change overlay"
      >
        <Button size="small" onPress={() => setshowDialog4(false)}>
          ok
        </Button>
      </Dialog>
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
