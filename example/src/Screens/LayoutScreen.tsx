import React, { useEffect, useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import { Layout } from 'react-native-noxi';

const LayoutScreen = ({ navigation }) => {
  const [state, setstate] = useState([]);

  function getData() {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=100')
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
      <Text>{title}</Text>
    </View>
  );

  const renderItem = ({ item }) => <Item title={item.title} />;

  return (
    <Layout
      title="ExampleLayout"
      canGoBack
      onPressBackIcon={() => navigation.goBack()}
    >
      <FlatList
        data={state}
        nestedScrollEnabled
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </Layout>
  );
};

export default LayoutScreen;
