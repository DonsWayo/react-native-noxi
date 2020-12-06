import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  StyleProp,
  ViewStyle,
  Animated,
  ImageStyle,
  ImageSourcePropType,
} from 'react-native';

export interface ImageProps {
  onloadPlaceholder?: () => void;
  onLoadImage?: () => void;
  placeholderFadeDuration?: number;
  imageFadeDuration?: number;
  placeholderBlurRadius?: number;
  style?: StyleProp<ViewStyle>;
  imageStyle?: StyleProp<ImageStyle>;
  placeHolderSource?: Animated.WithAnimatedValue<ImageSourcePropType>;
  imageSource: Animated.WithAnimatedValue<ImageSourcePropType>;
  resizeMode?:
    | Animated.WithAnimatedValue<
        'cover' | 'contain' | 'stretch' | 'repeat' | 'center' | undefined
      >
    | undefined;
}

const Image: React.FC<ImageProps> = ({
  onloadPlaceholder,
  onLoadImage,
  placeholderFadeDuration = 350,
  imageFadeDuration = 350,
  placeholderBlurRadius = 20,
  placeHolderSource,
  imageSource,
  imageStyle,
  style,
  resizeMode = 'cover',
}) => {
  const [state] = useState({
    imageOpacity: new Animated.Value(0),
    placeholderOpacity: new Animated.Value(0),
  });
  function loadPlaceholder() {
    Animated.timing(state.placeholderOpacity, {
      toValue: 1,
      duration: placeholderFadeDuration,
      useNativeDriver: true,
    }).start();
    onloadPlaceholder;
  }

  function loadImage() {
    Animated.timing(state.imageOpacity, {
      toValue: 1,
      duration: imageFadeDuration,
      useNativeDriver: true,
    }).start();
    onLoadImage;
  }
  return (
    <View style={style}>
      <Animated.Image
        resizeMode={resizeMode}
        style={[
          styles.image,
          { opacity: state.placeholderOpacity },
          imageStyle,
        ]}
        source={placeHolderSource}
        onLoad={loadPlaceholder}
        blurRadius={placeholderBlurRadius}
      />
      <Animated.Image
        resizeMode={resizeMode}
        style={[styles.image, { opacity: state.imageOpacity }, imageStyle]}
        source={imageSource}
        onLoad={loadImage}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
});

export default Image;
