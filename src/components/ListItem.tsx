import React, { ReactNode } from 'react';
import { StyleSheet, StyleProp, ViewStyle, View, Text } from 'react-native';
import { withTheme } from '../core/Theme';

export interface ListItemProps {
  theme: ReactNativeNoxi.Theme;
  style?: StyleProp<ViewStyle>;
  subTitle?: string;
  itemRight?: ReactNode;
  itemLeft?: ReactNode;
  title?: string;
}

const ListItem: React.FC<ListItemProps> = ({
  title,
  subTitle,
  itemRight,
  itemLeft,
  theme,
  style,
}) => {
  return (
    <View style={[styles.container, style]}>
      <View>{itemLeft}</View>
      <View style={styles.contentContainer}>
        <Text style={[styles.title, { color: theme.colors.text }]}>
          {title}
        </Text>
        {subTitle && <Text style={styles.subtitle}>sub</Text>}
      </View>
      <View>{itemRight}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignContent: 'center',
    marginVertical: 12,
  },
  contentContainer: {
    flex: 1,
    alignSelf: 'center',
    marginLeft: 12,
  },
  title: {
    fontSize: 16,
    marginBottom: 2,
    textTransform: 'capitalize',
  },

  subtitle: {
    color: '#777',
    fontSize: 14,
    textTransform: 'capitalize',
  },
});

export default withTheme(ListItem);
