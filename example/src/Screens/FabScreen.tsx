import React from 'react';
import { StyleSheet } from 'react-native';
import { FAB, Layout } from 'react-native-noxi';

const FABScreen = ({ navigation }) => {
  return (
    <Layout
      title="Avatars"
      containerStyle={styles.container}
      canGoBack
      onPressBackIcon={() => navigation.goBack()}
    >
      <FAB icon="edit" position="bottom-right" />
      <FAB icon="delete" position="bottom-left" />
      <FAB icon="QQ" position="top-left" />
      <FAB icon="warning" position="top-right" />
      <FAB icon="github" position="top-right" style={{ top: 80, left: 150 }} />
      <FAB
        icon="github"
        position="top-right"
        style={{ top: 380, left: 150, backgroundColor: 'red' }}
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

export default FABScreen;
