import React from 'react';
import { StyleSheet } from 'react-native';
import { Avatar, Layout, SizeBox, Chip } from 'react-native-noxi';

const ChipScreen = ({ navigation }) => {
  return (
    <Layout
      title="Avatars"
      containerStyle={styles.container}
      canGoBack
      onPressBackIcon={() => navigation.goBack()}
    >
      <Chip>Basic Text</Chip>
      <SizeBox />
      <Chip type="square">Basic Square</Chip>
      <SizeBox />
      <Chip icon="github">Basic Text</Chip>
      <SizeBox />
      <Chip
        itemLeft={
          <Avatar
            size={25}
            src={{
              uri:
                'https://static.wikia.nocookie.net/avatar/images/1/12/Azula.png/revision/latest/top-crop/width/360/height/450?cb=20150620181410&path-prefix=es',
            }}
            type="round"
          />
        }
      >
        Avatar Text
      </Chip>
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

export default ChipScreen;
