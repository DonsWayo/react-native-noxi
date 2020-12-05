import React from 'react';
import { StyleSheet } from 'react-native';
import { Layout, Notification } from 'react-native-noxi';

const NotificationScreen = ({ navigation }) => {
  return (
    <Layout
      title="Notification"
      containerStyle={styles.container}
      canGoBack
      onPressBackIcon={() => navigation.goBack()}
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
