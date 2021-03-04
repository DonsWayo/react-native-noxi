---
id: doc2
title: Usage
---

### Add the provider on the root

```jsx
import React from 'react';
import { AppRegistry } from 'react-native';
import App from './src/App';
import {
  LigthTheme,
  Provider as ReactNativeNoxiProvider,
} from 'react-native-noxi';

export default function Main() {
  return (
    <ReactNativeNoxiProvider theme={LigthTheme}>
      <App />
    </ReactNativeNoxiProvider>
  );
}

AppRegistry.registerComponent(appName, () => Main);
```