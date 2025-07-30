import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Colors, Fonts } from '../theme';

export default function CustomButton({ onPress, title = '', style,btnColor }) {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <Text style={[styles.btnText,btnColor]}>{title}</Text>
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
    fontSize:Fonts.size.regular,
    fontWeight:Fonts.Weight.medium
    },
});
