import React, { PureComponent } from 'react';
import {
  View,
  ScrollView,
  Text,
  Animated,
  Dimensions,
  StyleProp,
  TextStyle,
  ViewStyle,
  ScrollViewProps,
  NativeScrollEvent,
  NativeSyntheticEvent,
  LayoutChangeEvent,
  StyleSheet,
  TextInput,
  SafeAreaView,
  StatusBar,
  Platform,
  FlatList,
} from 'react-native';
import { ifIphoneX, isIphoneX } from 'react-native-iphone-x-helper';
import { EntryDirection, Entry } from './Entry';
import Icon from 'react-native-dynamic-vector-icons';
const { height, width } = Dimensions.get('window');
const SEARCH_BAR_HEIGHT = 40;

interface LayoutProps {
  title?: string;
  toolbarLeft?: React.ReactNode;
  canGoBack: boolean;
  titleStyle?: StyleProp<TextStyle>;
  headlineStyle?: StyleProp<TextStyle>;
  children?: React.ReactNode;
  onPressBackIcon?: () => void;
  containerStyle?: StyleProp<ViewStyle>;
  headerContainerStyle?: StyleProp<ViewStyle>;
  headerComponentContainerStyle?: StyleProp<ViewStyle>;
  scrollContainerStyle?: StyleProp<ViewStyle>;
  fadeDirection?: EntryDirection;
  scrollViewProps?: ScrollViewProps;
  showSearchComponent?: boolean;
  searchBarHeight?: number;
}

export class Layout extends PureComponent<LayoutProps> {
  static defaultProps = {
    scrollViewProps: {},
    searchBarHeight: SEARCH_BAR_HEIGHT,
    showSearchComponent: true,
    ScrollComponent: ScrollView,
  };

  state = {
    headerHeight: 0,
    headerY: 0,
    largeTitleHeight: undefined,
    isHeaderScrolled: false,
    searchBarShrinking: false,
    searchBarFixed: false,
  };

  scrollAnimatedValue = new Animated.Value(0);

  componentDidMount = () => {
    const { showSearchComponent } = this.props;
    if (showSearchComponent) {
      this.scrollAnimatedValue.addListener((value) => {
        const { searchBarFixed } = this.state;
        const { searchBarHeight = SEARCH_BAR_HEIGHT } = this.props;
        if (
          value.value < -(searchBarHeight + styles.searchContainer.marginTop) &&
          !searchBarFixed
        ) {
          this.setState({
            searchBarFixed: true,
            searchBarShrinking: false,
          });
        } else if (value.value > 0 && searchBarFixed) {
          this.setState({
            searchBarFixed: false,
            searchBarShrinking: true,
          });
        }
      });
    }
  };

  onLayout = (event: LayoutChangeEvent): void => {
    this.setState({
      headerHeight: event.nativeEvent.layout.height,
      headerY: event.nativeEvent.layout.y,
    });
  };

  onLargeTitleLayout = (event: LayoutChangeEvent) => {
    const { largeTitleHeight } = this.state;
    const { searchBarHeight = 40 } = this.props;
    if (!largeTitleHeight) {
      this.setState({
        largeTitleHeight:
          event.nativeEvent.layout.height - searchBarHeight + 15,
      });
    }
  };

  handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const {
      headerHeight,
      headerY,
      isHeaderScrolled: stateIsScrolled,
    } = this.state;
    const offset = event.nativeEvent.contentOffset.y;
    const scrollHeaderOffset = headerHeight + headerY - 8;
    const isHeaderScrolled = scrollHeaderOffset < offset;

    if (!stateIsScrolled && isHeaderScrolled) {
      this.setState({
        isHeaderScrolled,
      });
    }

    if (stateIsScrolled && !isHeaderScrolled) {
      this.setState({
        isHeaderScrolled,
      });
    }
  };

  render() {
    const {
      children,
      title = '',
      titleStyle,
      containerStyle = {},
      headerContainerStyle = {},
      headerComponentContainerStyle = {},
      headlineStyle = {},
      scrollContainerStyle = {},
      fadeDirection,
      scrollViewProps = {},
      searchBarHeight = SEARCH_BAR_HEIGHT,
      showSearchComponent,
      toolbarLeft,
      onPressBackIcon,
      canGoBack = false,
    } = this.props;
    const {
      isHeaderScrolled,
      searchBarFixed,
      searchBarShrinking,
      largeTitleHeight: _largeTitleHeight,
    } = this.state;

    const fontSize = titleStyle ? (titleStyle as any).fontSize : 34;
    const titleStyles = {
      fontSize,
      lineHeight: fontSize * 1.2,
    };
    let margin;
    if (isIphoneX()) {
      margin = ifIphoneX(44, 0);
    } else {
      margin = StatusBar.currentHeight;
    }
    const estimatedLargeTitleHeight = titleStyles.lineHeight + margin;
    console.log(estimatedLargeTitleHeight);
    const largeTitleHeight = _largeTitleHeight || estimatedLargeTitleHeight;
    const expandedLargeTitleHeight =
      largeTitleHeight + searchBarHeight + styles.searchContainer.marginTop;

    const animatedFontSize = this.scrollAnimatedValue.interpolate({
      inputRange: [-height, 100],
      outputRange: [fontSize * 1.75, fontSize],
      extrapolate: 'clamp',
    });

    const animatedSearchScale = this.scrollAnimatedValue.interpolate({
      inputRange: [-searchBarHeight, 0],
      outputRange: [searchBarHeight, 0],
      extrapolate: 'clamp',
    });

    const animatedSearchScaleReverse = this.scrollAnimatedValue.interpolate({
      inputRange: [0, searchBarHeight],
      outputRange: [searchBarHeight, 0],
      extrapolate: 'clamp',
    });

    const animationLargeTitleHeight = this.scrollAnimatedValue.interpolate({
      inputRange: [-searchBarHeight, 0],
      outputRange: [expandedLargeTitleHeight, largeTitleHeight],
      extrapolate: 'clamp',
    });

    const animationLargeTitleHeightShrink = this.scrollAnimatedValue.interpolate(
      {
        inputRange: [0, searchBarHeight],
        outputRange: [expandedLargeTitleHeight, largeTitleHeight],
        extrapolate: 'clamp',
      }
    );

    const largeTitleAnimation = searchBarShrinking
      ? animationLargeTitleHeightShrink
      : animationLargeTitleHeight;

    const searchFieldAnimation = searchBarShrinking
      ? animatedSearchScaleReverse
      : animatedSearchScale;

    return (
      <View style={[styles.container, containerStyle]}>
        <View style={[styles.headerContainer, headerContainerStyle]}>
          <SafeAreaView
            style={[
              styles.headerComponentContainer,
              headerComponentContainerStyle,
            ]}
          >
            {!toolbarLeft && canGoBack ? (
              <View style={styles.headerComponentLeft}>
                <Icon
                  name="arrow-back"
                  type="ionicons"
                  size={28}
                  color="black"
                  onPress={onPressBackIcon}
                />
              </View>
            ) : (
              <View style={styles.headerComponentLeft}>{toolbarLeft}</View>
            )}
            <Entry
              style={styles.headerComponentMain}
              visible={isHeaderScrolled}
              direction={fadeDirection}
            >
              <Text style={[styles.headline, headlineStyle]}>{title}</Text>
            </Entry>
            <View />
          </SafeAreaView>
        </View>
        <FlatList
          renderItem={null}
          overScrollMode="never"
          nestedScrollEnabled
          onScroll={Animated.event(
            [
              {
                nativeEvent: { contentOffset: { y: this.scrollAnimatedValue } },
              },
            ],
            {
              listener: this.handleScroll,
              useNativeDriver: false,
            }
          )}
          scrollEventThrottle={8}
          contentContainerStyle={scrollContainerStyle}
          {...scrollViewProps}
          data={[]}
          ListHeaderComponent={
            <Animated.View
              style={[
                showSearchComponent
                  ? {
                      height: searchBarFixed
                        ? expandedLargeTitleHeight
                        : largeTitleAnimation,
                    }
                  : {
                      paddingBottom: 15,
                    },
              ]}
              onLayout={this.onLargeTitleLayout}
            >
              <View style={styles.scroll}>
                <Animated.Text
                  style={[
                    styles.title,
                    titleStyle,
                    titleStyles,
                    {
                      fontSize: animatedFontSize,
                    },
                  ]}
                  onLayout={this.onLayout}
                >
                  {title}
                </Animated.Text>
              </View>
              {showSearchComponent ? (
                <Animated.View
                  style={[
                    styles.searchContainer,
                    {
                      height: searchBarFixed
                        ? searchBarHeight
                        : searchFieldAnimation,
                    },
                  ]}
                >
                  <Entry visible={searchBarFixed}>
                    <TextInput placeholder="Search" />
                  </Entry>
                </Animated.View>
              ) : null}
            </Animated.View>
          }
          ListFooterComponent={
            <Animated.View style={styles.children}>{children}</Animated.View>
          }
        />
      </View>
    );
  }
}

const containerHeight = ifIphoneX(88, 60);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  headerContainer: {
    height: containerHeight,
  },
  headerComponentContainer: {
    height: containerHeight,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingBottom: 12,
  },
  headerComponentLeft: {
    marginLeft: 20,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  headerComponentMain: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerComponentRight: {
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  headline: {
    fontSize: 17,
    lineHeight: 22,
    fontWeight: '500',
    letterSpacing: 0.019,
    marginLeft: -width / 10,
  },
  title: {
    letterSpacing: 0.011,
    fontWeight: '700',
  },
  scroll: {
    marginLeft: 20,
    marginRight: 20,
  },
  searchContainer: {
    marginTop: 15,
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: 'gray',
    height: SEARCH_BAR_HEIGHT,
    left: 0,
    right: 0,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: 15,
    paddingRight: 15,
  },
  search: {
    padding: 10,
    opacity: 0,
  },
  children: {
    flex: 1,
  },
  defaultButton: {
    color: 'blue',
  },
});

export default Layout;
