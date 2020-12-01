import React, { useContext, useState } from 'react';
import {
  Button,
  FlatList,
  StatusBar,
  StyleSheet,
  Switch,
  View,
} from 'react-native';
import {
  DarkTheme,
  Layout,
  LigthTheme,
  SizeBox,
  Text,
} from 'react-native-noxi';
import ThemeContext from '../ThemeContext';

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
  {
    id: 'c1db',
    title: 'FAB',
  },
  {
    id: 'c1dwewb',
    title: 'Text',
  },
  {
    id: 'c1dwewsdsdb',
    title: 'Select',
  },
];

const HomeScreen = ({ navigation }) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const { setTheme } = useContext(ThemeContext);

  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState);
    //@ts-ignore
    setTheme(isEnabled ? LigthTheme : DarkTheme);
  };

  const Item = ({ title }) => (
    <View style={styles.item}>
      <Button title={title} onPress={() => navigation.navigate(title)} />
    </View>
  );

  const renderItem = ({ item }) => <Item title={item.title} />;

  return (
    <Layout
      title="Noxi"
      largeToolbarRight={
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <Text type="h3">
            {isEnabled ? 'current: Dark' : 'current: Light'}
          </Text>
          <SizeBox />
          <Switch onValueChange={toggleSwitch} value={isEnabled} />
        </View>
      }
    >
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
