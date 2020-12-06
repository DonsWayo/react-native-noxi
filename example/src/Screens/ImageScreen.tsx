import React from 'react';
import { StyleSheet } from 'react-native';
import { Layout, Image } from 'react-native-noxi';

const ImageScreen = ({ navigation }) => {
  return (
    <Layout
      title="Card"
      containerStyle={styles.container}
      canGoBack
      onPressBackIcon={() => navigation.goBack()}
    >
      <Image
        imageSource={{
          uri:
            'https://upload.wikimedia.org/wikipedia/commons/2/2e/Wikidata_Map_April_2016_Big.png',
        }}
        placeHolderSource={{
          uri: 'https://source.unsplash.com/random',
        }}
        style={{ width: 400, height: 800 }}
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

export default ImageScreen;
