import React from 'react';
import { Button, FlatList, StatusBar, StyleSheet, View } from 'react-native';
import { Layout } from 'react-native-noxi';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Button',
  },
  {
    id: 'bd7acbeawe-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'BottomMenu',
  },
  {
    id: 'c1db1-4d6c2d-aedd5-3ad53abb28ba',
    title: 'TextInput',
  },
  {
    id: 'c1db-aedd5-3ad53abb28ba',
    title: 'Layout',
  },
  {
    id: 'c1db-aedd5',
    title: 'Dialog',
  },
  {
    id: 'c1db-aedsdsdd5',
    title: 'Avatar',
  },
];

const HomeScreen = ({ navigation }) => {
  const Item = ({ title }) => (
    <View style={styles.item}>
      <Button title={title} onPress={() => navigation.navigate(title)} />
    </View>
  );

  const renderItem = ({ item }) => <Item title={item.title} />;

  return (
    <Layout title="Noxi" showSearchComponent={false}>
      <FlatList
        data={DATA}
        nestedScrollEnabled
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 8,
  },
  title: {
    fontSize: 32,
  },
});

export default HomeScreen;
