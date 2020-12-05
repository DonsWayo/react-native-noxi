import React, { ReactNode } from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  View,
  ImageStyle,
  StyleProp,
  ViewStyle,
  Dimensions,
} from 'react-native';
import { withTheme } from '../core/Theme';

const SCREEN_WIDTH = Dimensions.get('screen').width;
const SCREEN_HEIGHT = Dimensions.get('screen').height;

export interface ImageCardProps {
  theme: ReactNativeNoxi.Theme;
  itemHeader?: ReactNode;
  itemBottom?: ReactNode;
  backgroundOverlay?: string;
  imageStyle?: StyleProp<ImageStyle>;
  automaticWidth?: boolean;
  automaticHeight?: boolean;
  automaticSize?: boolean;
  imageBackgroundStyle?: StyleProp<ViewStyle>;
  itemHeaderStyle?: StyleProp<ViewStyle>;
  itemBottomStyle?: StyleProp<ViewStyle>;
  style?: StyleProp<ViewStyle>;
  width?: number | string;
  height?: number | string;
  onPress?: () => void;
}

const ImageCard: React.FC<ImageCardProps> = ({
  itemHeader,
  itemBottom,
  imageStyle,
  imageBackgroundStyle,
  width = 250,
  height = 400,
  style,
  itemHeaderStyle,
  itemBottomStyle,
  automaticWidth = true,
  automaticHeight = true,
  automaticSize = true,
  backgroundOverlay = 'rgba(0,0,0,0.2)',
  theme,
  onPress,
}) => {
  if (automaticSize && automaticWidth) {
    width = SCREEN_WIDTH - theme.padding;
  }

  if (automaticSize && automaticHeight) {
    height = SCREEN_HEIGHT / 4;
  }

  return (
    <TouchableOpacity style={[styles.cardContainer, style]} onPress={onPress}>
      <ImageBackground
        source={{
          uri:
            'https://i1.wp.com/descubrirlahistoria.es/wp-content/uploads/2014/07/636px-Paris_July_2011-30.jpg',
        }}
        resizeMode="cover"
        style={[{ width, height }, imageBackgroundStyle]}
        imageStyle={[styles.imageBackgroundImageStyle, imageStyle]}
      >
        {itemHeader ? (
          <View
            style={[
              styles.cardContentView,
              styles.cardContentTop,
              { backgroundColor: backgroundOverlay },
              itemHeaderStyle,
            ]}
          >
            {itemHeader}
          </View>
        ) : (
          <></>
        )}
        {itemBottom ? (
          <View
            style={[
              styles.cardContentView,
              styles.cardContentBottom,
              { backgroundColor: backgroundOverlay },
              itemBottomStyle,
            ]}
          >
            {itemBottom}
          </View>
        ) : (
          <></>
        )}
      </ImageBackground>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  imageBackgroundImageStyle: {
    borderRadius: 20,
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  cardContainer: {
    flex: 1,
    flexDirection: 'column',
    padding: 28,
  },
  cardContentView: {
    left: 0,
    position: 'absolute',
    right: 0,
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    padding: 8,
  },
  cardContentTop: {
    top: 0,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  cardContentBottom: {
    bottom: 0,
    marginBottom: 0,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
});

export default withTheme(ImageCard);
