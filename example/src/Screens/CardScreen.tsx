import React from 'react';
import { StyleSheet } from 'react-native';
import { Layout, SizeBox, ImageCard, Text } from 'react-native-noxi';

const CardScreen = ({ navigation }) => {
  return (
    <Layout
      title="Card"
      containerStyle={styles.container}
      canGoBack
      onPressBackIcon={() => navigation.goBack()}
    >
      <ImageCard
        itemBottom={
          <Text style={{ color: 'white', fontSize: 18 }}>Centered text</Text>
        }
        itemHeader={
          <Text style={{ color: 'white', fontSize: 18 }}>Centered text</Text>
        }
      />
      <SizeBox />
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
