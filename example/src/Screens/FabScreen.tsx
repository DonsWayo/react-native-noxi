import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { FAB, Layout } from 'react-native-noxi';

const FABScreen = ({ navigation }) => {
  const [visible, setvisible] = useState(true);
  const goBack = () => {
    setvisible(false);
    navigation.goBack();
  };

  useEffect(() => {
    setvisible(true);
  }, []);

  return (
    <Layout
      title="Avatars"
      containerStyle={styles.container}
      canGoBack
      onPressBackIcon={goBack}
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
