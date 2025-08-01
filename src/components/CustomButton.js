import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {Colors, Fonts} from '../theme';

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
      <Text style={[styles.btnText, btnColor]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.blue100,
    padding: 12,
    borderRadius: 25,
    width: '100%',
  },
  btnText: {
    color: Colors.white80,
    textAlign: 'center',
    fontSize: Fonts.size.regular,
    fontWeight: Fonts.Weight.medium,
  },
  disableBtn: {
    backgroundColor: Colors.primarySecond,
  },
});
