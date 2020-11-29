import React from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import Icon from 'react-native-dynamic-vector-icons';
import { withTheme } from '../../core/Theme';

type Props = {
  iconName: string;
  isCurrent?: boolean;
  theme: ReactNativeNoxi.Theme;
};

const TabBarItem = ({ iconName, isCurrent, theme }: Props) => {
  return (
    <View style={styles.item}>
      <Icon
        name={iconName}
        type={theme.iconsTheme}
        size={30}
        color={isCurrent ? theme.colors.primary : 'grey'}
      />
    </View>
  );
};

export default withTheme(TabBarItem);

const styles = StyleSheet.create({
  item: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: Platform.OS === 'ios' ? 0 : 6,
  },
});
