import React, { useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';
import { Layout, Text } from 'react-native-noxi';

const LayoutScreen = ({ navigation }) => {
  const [state, setstate] = useState([]);

  function getData() {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=1000')
      .then((res) => res.json())
      .then((data) => {
        setstate(data);
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    getData();
  }, []);

  const Item = ({ title }) => (
    <View style={{ height: 40 }}>
      <Text type="h4">{title}</Text>
    </View>
  );

  const renderItem = ({ item }) => <Item title={item.title} />;

  return (
    <Layout
      title="ExampleLayout"
      canGoBack
      containerStyle={{ flexGrow: 1 }}
      onPressBackIcon={() => navigation.goBack()}
    >
      <FlatList
        data={state}
        contentContainerStyle={{ flex: 1 }}
        style={{ flex: 1 }}
        nestedScrollEnabled
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </Layout>
  );
};

export default LayoutScreen;
