import React, {useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withRepeat,
  Easing,
} from 'react-native-reanimated';
import Svg, {Polygon} from 'react-native-svg';

const CubeCard = () => {
  const rotate = useSharedValue(0);

  useEffect(() => {
    rotate.value = withRepeat(
      withTiming(360, {
        duration: 6000,
        easing: Easing.linear,
      }),
      -1,
    );
  }, []);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{rotate: `${rotate.value}deg`}],
  }));

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.cubeContainer, animatedStyle]}>
        <Svg height="100" width="100" viewBox="0 0 100 100">
          {/* Top Face */}
          <Polygon points="50,15 85,35 50,55 15,35" fill="#E07BAE" />
          {/* Left Face */}
          <Polygon points="15,35 50,55 50,90 15,70" fill="#007E3A" />
          {/* Right Face */}
          <Polygon points="85,35 50,55 50,90 85,70" fill="#1E1E1E" />
        </Svg>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  cubeContainer: {
    width: 100,
    height: 100,
  },
});

export default CubeCard;
