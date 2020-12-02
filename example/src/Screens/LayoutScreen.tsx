import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { Layout, ListItem, Avatar } from 'react-native-noxi';
import Icon from 'react-native-dynamic-vector-icons';

const LayoutScreen = ({ navigation }) => {
  const [state, setstate] = useState([]);
  const [refreshing, setRefreshing] = React.useState(false);

  const wait = (timeout) => {
    return new Promise((resolve) => {
      setTimeout(resolve, timeout);
    });
  };

  function getData() {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=1000')
      .then((res) => res.json())
      .then((data) => {
        setstate(data);
      })
      .catch((err) => console.log(err));
  }

  const onRefresh = () => {
    setRefreshing(true);

    wait(2000).then(() => setRefreshing(false));
  };

  useEffect(() => {
    getData();
  }, []);

  const Item = ({ title, id }) => (
    <ListItem
      title={title}
      subTitle={title}
      itemLeft={<Avatar text={id.toString()} type="round" size={40} />}
      itemRight={<Icon name="delete" type="ionicons" size={28} color="red" />}
    />
  );

  const renderItem = ({ item }) => <Item title={item.title} id={item.id} />;

  return (
    <Layout
      title="ExampleLayout"
      canGoBack
      enabledPullToRefresh={true}
      refreshing={refreshing}
      onRefresh={onRefresh}
      containerStyle={{ flexGrow: 1, padding: 8 }}
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
