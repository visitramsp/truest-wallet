import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Colors, Fonts} from '../theme';

export default function CustomButton({
  onPress,
  title = '',
  disabled = false,
  style,
  btnColor,
}) {
  return (
    <LinearGradient
      colors={['#D6F736', '#E0FC56', '#E2FA6E']}
      style={[
        styles.linearGradient,
        style,
        // disabled && styles.disabledGradient,
      ]}>
      <TouchableOpacity
        style={styles.button}
        onPress={onPress}
        // disabled={disabled}
        activeOpacity={0.7}>
        <Text
          style={[styles.btnText, btnColor, disabled && styles.disabledText]}>
          {title}
        </Text>
      </TouchableOpacity>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  linearGradient: {
    borderRadius: 25,
    width: '100%',
  },
  disabledGradient: {
    opacity: 0.5,
  },
  button: {
    padding: 12,
    borderRadius: 25,
    width: '100%',
  },
  btnText: {
    color: Colors.bgColor,
    textAlign: 'center',
    fontSize: Fonts.size.regular,
    fontWeight: Fonts.Weight.medium,
    fontFamily: Fonts.type.montserratSemiBold,
  },
  disabledText: {
    color: Colors.gray70,
  },
});
