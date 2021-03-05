---
id: notification
title: Notification
---

A basic button component that should render nicely on any platform. Supports a minimal level of customization.

```tsx
import { Notification } from 'react-native-noxi';

<Notification />
```

## Example

```SnackPlayer name=Notification%20Example
import React from 'react';
import { StyleSheet } from 'react-native';
import { Layout, Notification } from 'react-native-noxi';

const NotificationScreen = ({ navigation }) => {
  return (
    <Layout
      title="Notification"
      containerStyle={styles.container}
    >
      <Notification />
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

export default NotificationScreen;

```

---

___
