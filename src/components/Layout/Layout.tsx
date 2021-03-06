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
  SafeAreaView,
  StatusBar,
  Platform,
  FlatList,
  RefreshControl,
} from 'react-native';
import { ifIphoneX, isIphoneX } from 'react-native-iphone-x-helper';
import { EntryDirection, Entry } from './Entry';
import Icon from 'react-native-dynamic-vector-icons';
import { withTheme } from '../../core/Theme';
import TextInput from '../TextInput';
const { height, width } = Dimensions.get('window');
const SEARCH_BAR_HEIGHT = 40;

interface LayoutProps {
  title?: string;
  toolbarLeft?: React.ReactNode;
  toolbarRight?: React.ReactNode;
  largeToolbarRight?: React.ReactNode;
  canGoBack?: boolean;
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
  showSearchComponentWithoutScroll?: boolean;
  searchBarHeight?: number;
  onRefresh?: (() => void) | undefined;
  enabledPullToRefresh?: boolean;
  refreshing?: boolean;
  largeToolbar?: boolean;
  theme: ReactNativeNoxi.Theme;
}

const containerHeight = ifIphoneX(80, 35);

export class Layout extends PureComponent<LayoutProps> {
  static defaultProps = {
    scrollViewProps: {},
    searchBarHeight: SEARCH_BAR_HEIGHT,
    showSearchComponent: false,
    showSearchComponentWithoutScroll: false,
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
    const {
      showSearchComponent,
      showSearchComponentWithoutScroll,
    } = this.props;
    if (showSearchComponent && showSearchComponentWithoutScroll) {
      setTimeout(() => {
        this.setState({
          searchBarFixed: true,
          searchBarShrinking: false,
        });
      }, 100);
    } else if (showSearchComponent && !showSearchComponentWithoutScroll) {
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
        } else if (value.value > 30 && searchBarFixed) {
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
    const { searchBarHeight = 30 } = this.props;
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
      fadeDirection,
      scrollViewProps = {},
      searchBarHeight = SEARCH_BAR_HEIGHT,
      showSearchComponent = false,
      toolbarLeft,
      toolbarRight,
      largeToolbarRight,
      onPressBackIcon,
      canGoBack = false,
      onRefresh,
      enabledPullToRefresh = false,
      refreshing = false,
      largeToolbar = true,
      theme,
    } = this.props;
    const {
      isHeaderScrolled,
      searchBarFixed,
      searchBarShrinking,
      largeTitleHeight: _largeTitleHeight,
    } = this.state;

    const fontSize =
      titleStyle && (titleStyle as any).fontSize
        ? (titleStyle as any).fontSize
        : 34;
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
      <View
        style={[styles.container, { backgroundColor: theme.colors.background }]}
      >
        <View
          style={[
            styles.headerContainerCollapse,
            {
              backgroundColor: theme.colors.background,
              shadowOpacity: !largeToolbar || isHeaderScrolled ? 0.2 : 0,
              elevation: !largeToolbar || isHeaderScrolled ? 8 : 0,
              height:
                Platform.OS === 'android' && isHeaderScrolled
                  ? 50
                  : containerHeight,
            },
            headerContainerStyle,
          ]}
        >
          <SafeAreaView
            style={[
              styles.headerComponentContainer,
              headerComponentContainerStyle,
            ]}
          >
            {!toolbarLeft && canGoBack ? (
              <View
                style={[
                  styles.headerComponentLeft,
                  { marginTop: Platform.OS === 'ios' ? 0 : 40 },
                ]}
              >
                <Icon
                  name="arrow-back"
                  type="ionicons"
                  size={28}
                  color={theme.colors.text}
                  onPress={onPressBackIcon}
                />
              </View>
            ) : (
              <View style={styles.headerComponentLeft}>{toolbarLeft}</View>
            )}
            <Entry
              style={styles.headerComponentMain}
              visible={largeToolbar ? isHeaderScrolled : true}
              direction={fadeDirection}
            >
              <Text
                style={[
                  styles.headline,
                  { color: theme.colors.text },
                  headlineStyle,
                ]}
              >
                {title}
              </Text>
            </Entry>
            <View style={styles.headerComponentRight}>{toolbarRight}</View>
            <View />
          </SafeAreaView>
        </View>
        <FlatList
          renderItem={null}
          overScrollMode="never"
          nestedScrollEnabled
          style={{ flex: 1 }}
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
          refreshControl={
            // only enabled={enabledPullToRefresh} not work in 0.63
            enabledPullToRefresh ? (
              <RefreshControl
                enabled={enabledPullToRefresh}
                refreshing={refreshing}
                onRefresh={onRefresh}
                tintColor={theme.colors.text}
              />
            ) : (
              <></>
            )
          }
          {...scrollViewProps}
          data={[]}
          ListHeaderComponent={
            <>
              {largeToolbar ? (
                <Animated.View
                  style={[
                    showSearchComponent
                      ? {
                          height: searchBarFixed
                            ? expandedLargeTitleHeight
                            : largeTitleAnimation,
                        }
                      : {
                          flex: 1,
                          flexDirection: 'row',
                        },
                  ]}
                  onLayout={this.onLargeTitleLayout}
                >
                  <View style={styles.scroll}>
                    <Animated.Text
                      style={[
                        {
                          fontSize: animatedFontSize,
                          color: theme.colors.text,
                        },
                        styles.title,
                        titleStyles,
                        titleStyle,
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
                        <TextInput
                          placeholder="Search"
                          iconLeftName="search1"
                          style={{ height: searchBarHeight }}
                        />
                      </Entry>
                    </Animated.View>
                  ) : null}
                  {largeToolbarRight}
                </Animated.View>
              ) : (
                <></>
              )}
            </>
          }
          ListFooterComponent={
            <Animated.View style={[styles.children, containerStyle]}>
              {children}
            </Animated.View>
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  headerContainer: {
    height: containerHeight,
  },
  headerContainerCollapse: {
    elevation: 0,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 4,
  },
  headerComponentContainer: {
    height: containerHeight,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingBottom: 12,
  },
  headerComponentLeft: {
    flex: 1,
    marginLeft: 20,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  headerComponentRight: {
    flex: 1,
    marginRight: 20,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  largeHeaderComponentRight: {
    flex: 1,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  headerComponentMain: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  headline: {
    fontSize: 17,
    lineHeight: 22,
    fontWeight: '500',
    letterSpacing: 0.2,
    marginLeft: -width / 24,
    marginTop: Platform.OS === 'android' ? 50 : undefined,
  },
  title: {
    letterSpacing: 0.011,
    fontWeight: '700',
  },
  scroll: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: 20,
    marginRight: 20,
  },
  searchContainer: {
    marginTop: 0,
    marginBottom: 10,
    marginLeft: 20,
    marginRight: 20,
  },
  children: {
    flex: 1,
  },
  defaultButton: {
    color: 'blue',
  },
});

export default withTheme(Layout);
