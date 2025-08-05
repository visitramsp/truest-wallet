import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Colors, Fonts } from '../theme';

export default function CustomButton({
  onPress,
  title = '',
  disabled = true,
  style,
  btnColor,
}) {
  return (
    <TouchableOpacity
      style={[styles.button, !disabled && styles.disableBtn, style]}
      disabled={!disabled}
      onPress={onPress}>
      <Text style={[styles.btnText, btnColor, !disabled && styles.disableText]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.btnColor,
    padding: 12,
    borderRadius: 25,
    width: '100%',
  },
  btnText: {
    color: Colors.bgColor,
    textAlign: 'center',
    fontSize: Fonts.size.regular,
    fontWeight: Fonts.Weight.medium,
    fontFamily: Fonts.type.montserratSemiBold
  },
  disableBtn: {
    backgroundColor: Colors.gray100,
  },
  disableText: {
    color: Colors.gray70,
  }
});
