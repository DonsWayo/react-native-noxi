import React from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import Icon from 'react-native-dynamic-vector-icons';
import { withTheme } from '../../core/Theme';
import { isIphoneX } from 'react-native-iphone-x-helper';

type Props = {
  iconName: string;
  isCurrent?: boolean;
  iconFamily?: string;
  theme: ReactNativeNoxi.Theme;
};

const TabBarItem = ({ iconName, isCurrent, theme, iconFamily }: Props) => {
  const tabBarItemStyleHeigth = {
    marginTop: Platform.OS === 'ios' ? -3 : 0,
  };

  if (isIphoneX()) {
    tabBarItemStyleHeigth.marginTop = -5;
  }

  return (
    <View style={[styles.item, tabBarItemStyleHeigth]}>
      <Icon
        name={iconName}
        type={iconFamily ? iconFamily : theme.iconsTheme}
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
  },
});
