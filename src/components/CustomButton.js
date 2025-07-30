import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {Colors} from '../theme';

export default function CustomButton({onPress, title = '', style}) {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <Text style={styles.btnText}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.red100,
    padding: 10,
    borderRadius: 25,
    width: '100%',
  },
  btnText: {color: 'white', textAlign: 'center'},
});
