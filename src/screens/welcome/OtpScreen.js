import { useFormik } from 'formik';
import React, { useEffect, useRef, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import OTPTextInput from 'react-native-otp-textinput';
import { Colors } from '../../theme';
import { OtpSchema } from '../../schemas/OtpSchema';
import styles from './Welcome.Styles';
import { useNavigation, useRoute } from '@react-navigation/native';
import Entypo from 'react-native-vector-icons/Entypo';
export default function OtpScreen() {
  const [toggleBtn, setToggleBtn] = useState(false);
  const otpInputRef = useRef(null);
  const navigation = useNavigation();
  const route = useRoute();
  const { isFirst } = route.params || {};


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

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    formik;

  useEffect(() => {
    if (values.otp.length === 6) {
      formik.submitForm();
    }
  }, [values]);
  return (
    <View style={{ backgroundColor: Colors.white80 }}>

      <View style={{ position: 'relative', top: 25, left: 20, height: 100 }}>
        
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Entypo
              name={'chevron-small-left'}
              size={40}
              color={Colors.gray80}
              style={{position:"relative",left:-10}}
            />
          </TouchableOpacity>
        
        <Text style={styles.stepText}>Step 1 of 3</Text>
      </View>


      <View
        style={{
          flexDirection: 'column',
          height: '85%',
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
              }
            }}
            tintColor={Colors.black100}
            textInputStyle={styles.inputOTP}
            onBlur={() => formik.setFieldTouched('otp', true)}
            secureTextEntry
            textInputProps={{
              secureTextEntry: true,
            }}
          />
          {errors?.otp && touched?.otp && (
            <Text style={styles.errorText}>{errors?.otp}</Text>
          )}

        </View>
      </View>
    </View>
  );
}
