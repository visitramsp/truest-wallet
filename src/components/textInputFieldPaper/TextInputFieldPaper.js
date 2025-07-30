import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { TextInput } from 'react-native-paper';
import {
  ApplicationStyle,
  Colors,
  Fonts,
  horizontalScale,
  verticalScale
} from '../../theme';

// eslint-disable-next-line complexity
const TextInputFieldPaper = (props) => {
  const {
    label,
    value,
    mode = 'flat',
    isDisable = false,
    editable = true,
    autoCapitalize = false,
    onChangeText = () => null,
    onBlur = () => null,
    underlineStyle = ApplicationStyle.dNone,
    containerStyle,
    style,
    labelStyle = { fontSize: Fonts.size.h20 },
    valueStyle = {},
    secureTextEntry,
    keyboardType,
    Icon,
    onPressRight,
    errors,
    touched,
    validationSymbol,
    multiline = false,
    numberOfLines = 1,
    maxLength
  } = props;
  const [isFocused, setIsFocused] = useState(false);

  const onFocus = () => {
    setIsFocused(true);
  };
  return (
    <View>
      <View
        style={[
          styles.inputViewEmail,
          style,
          isDisable && {
            backgroundColor: `${Colors.gray100}44`,
            ...ApplicationStyle.productFieldDisable
          }
        ]}
      >
        <TextInput
          label={
            <Text
              style={[
                styles.label,
                labelStyle,
                (value?.length > 0 || isFocused) && { color: Colors.gray100 }
              ]}
            >
              {label}
              {validationSymbol ? '*' : null}
            </Text>
          }
          mode={mode}
          autoCapitalize={autoCapitalize}
          style={[
            styles.input,
            containerStyle,
            valueStyle,
            isDisable && { backgroundColor: Colors.transparent }
          ]}
          underlineStyle={underlineStyle}
          value={value}
          editable={isDisable ? false : editable}
          keyboardType={keyboardType}
          secureTextEntry={secureTextEntry}
          multiline={multiline}
          numberOfLines={numberOfLines}
          maxLength={maxLength}
          onChangeText={onChangeText}
          onBlur={(val) => {
            onBlur(val);
            setIsFocused(false);
          }}
          onFocus={onFocus}
        />
        {Icon &&
          (onPressRight ? (
            <TouchableOpacity onPress={onPressRight}>
              <Icon />
            </TouchableOpacity>
          ) : (
            Icon
          ))}
      </View>
      {errors && touched && <Text style={styles.error}>{errors}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    color: Colors.gray100,
    fontWeight: Fonts.Weight.low
  },
  input: {
    backgroundColor: Colors.transparent,
    color: Colors.black90,
    fontFamily: Fonts.type.montserratMedium,
    fontWeight: Fonts.Weight.medium,
    paddingHorizontal: horizontalScale(5),
    fontSize: Fonts.size.input,
    borderRadius: 0,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    height: 57,
    overflow: 'hidden',
    flex: 1
  },
  inputViewEmail: {
    ...ApplicationStyle.rowAlignCenter,
    backgroundColor: Colors.white80,
    shadowColor: Colors.white80,
    shadowOffset: {
      width: 0, // horizontal shadow
      height: 1 // vertical shadow

    },
    shadowOpacity: 0.25, // opacity of the shadow
    shadowRadius: 3.84, // blur radius of the shadow
    elevation: 5, // for Android shadow

    // borderWidth: 1,
    // borderColor: Colors.gray100,
    borderRadius: verticalScale(5),
    overflow: 'hidden',
    paddingHorizontal: horizontalScale(13)
  },
  error: {
    color: Colors.red100,
    paddingLeft: verticalScale(8),
    paddingTop: verticalScale(2),
    fontSize: 12,
    marginTop: verticalScale(4)
  }
});

export default TextInputFieldPaper;