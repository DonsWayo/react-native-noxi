---
id: listitem
title: List Item
---

A basic button component that should render nicely on any platform. Supports a minimal level of customization.

```tsx
import { ListItem } from 'react-native-noxi';

 <ListItem
      title="title"
      subTitle="subtitle"
      itemLeft={<Avatar text="Jhon Doe" type="round" size={40} />}
      itemRight={<Icon name="delete" type="ionicons" size={28} color="red" />}
    />
```

## Example

```SnackPlayer name=ListItem%20Example
import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { Layout, ListItem, Avatar } from 'react-native-noxi';
import Icon from 'react-native-dynamic-vector-icons';

const ListScreen = ({ navigation }) => {
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
      title="ListItem"
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

export default ListScreen;


```

---

___
