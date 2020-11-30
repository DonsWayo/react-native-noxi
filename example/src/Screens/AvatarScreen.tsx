import React from 'react';
import { StyleSheet } from 'react-native';
import { Avatar, Layout, SizeBox } from 'react-native-noxi';

const AvatarScreen = ({ navigation }) => {
  return (
    <Layout
      title="Avatars"
      containerStyle={styles.container}
      canGoBack
      onPressBackIcon={() => navigation.goBack()}
    >
      <Avatar text="JD" type="round" />
      <SizeBox />
      <SizeBox />
      <Avatar
        src={{
          uri:
            'https://static.wikia.nocookie.net/avatar/images/1/12/Azula.png/revision/latest/top-crop/width/360/height/450?cb=20150620181410&path-prefix=es',
        }}
        type="round"
      />
      <SizeBox />
      <Avatar
        src={{
          uri:
            'https://static.wikia.nocookie.net/avatar/images/1/12/Azula.png/revision/latest/top-crop/width/360/height/450?cb=20150620181410&path-prefix=es',
        }}
        type="square"
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

export default AvatarScreen;
