import React from 'react';
import {
  Button,
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';

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
    id: 'c1b1-46c2-aed5-3ad53abb28ba',
    title: 'TextInput',
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
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
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
