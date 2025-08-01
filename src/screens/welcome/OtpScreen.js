import {useFormik} from 'formik';
import React, {useEffect, useRef, useState} from 'react';
import {Text, View} from 'react-native';
import OTPTextInput from 'react-native-otp-textinput';
import {Colors} from '../../theme';
import {OtpSchema} from '../../schemas/OtpSchema';
import styles from './Welcome.Styles';
import {useNavigation, useRoute} from '@react-navigation/native';
export default function OtpScreen() {
  const [toggleBtn, setToggleBtn] = useState(false);
  const otpInputRef = useRef(null);
  const navigation = useNavigation();
  const route = useRoute();
  const {isFirst} = route.params || {};

  console.log(isFirst, 'isFirst');
  // console.log(navigation., 'isFirst');

  //   useEffect(() => {
  //     if (otpInputRef?.current) {
  //       otpInputRef.current.focus();
  //     }
  //   }, []);

  const initialValues = {
    otp: '',
  };

  let formik = useFormik({
    initialValues,
    validationSchema: OtpSchema,
    onSubmit: async (values, action) => {
      setToggleBtn(true);
      console.log(values, 'values');
      if (isFirst) {
        navigation.navigate('first-time-recovery-phase');
      } else {
        navigation.navigate('recovery-phase');
      }

      // navigation.navigate("recovery-phase")
      if (isPhone) {
        // onPressPhoneOtpVerify(values?.otp);
      } else {
        // onPressOtpVerify(values?.otp);
      }
    },
  });

  const {values, errors, touched, handleBlur, handleChange, handleSubmit} =
    formik;

  useEffect(() => {
    if (values.otp.length === 6) {
      formik.submitForm();
    }
  }, [values]);
  return (
    <View
      style={{
        flexDirection: 'column',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.bgColor,
      }}>
      <Text style={styles.passcodeText}>Enter Passcode</Text>
      <View style={styles.otpView}>
        <OTPTextInput
          autoFocus
          inputCount={6}
          keyboardType="number-pad"
          ref={otpInputRef}
          handleTextChange={text => {
            formik.setFieldValue('otp', text);
            if (text?.length === 6) {
              setToggleBtn(true);
              //   isPhone ? onPressPhoneOtpVerify(text) : onPressOtpVerify(text);
            }
          }}
          tintColor={Colors.black100}
          textInputStyle={styles.inputOTP}
          onBlur={handleBlur('otp')}
          secureTextEntry
          textInputProps={{
            secureTextEntry: true,
          }}
        />
        {errors?.otp && touched?.otp && (
          <Text style={styles.errorText}>{errors?.otp}</Text>
        )}
        {/* {otpError && !errors?.otp && (
          <Text style={styles.otpTextError}>{otpError}</Text>
        )} */}
      </View>
    </View>
  );
}
