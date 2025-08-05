import { useFormik } from 'formik';
import React, { useEffect, useRef, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import OTPTextInput from 'react-native-otp-textinput';
import { useNavigation, useRoute } from '@react-navigation/native';
import Entypo from 'react-native-vector-icons/Entypo';
import * as Animatable from 'react-native-animatable';

import { Colors } from '../../theme';
import { OtpSchema } from '../../schemas/OtpSchema';
import styles from './Welcome.Styles';



export default function OtpScreen() {
  const [toggleBtn, setToggleBtn] = useState(false);
  const otpInputRef = useRef(null);
  const navigation = useNavigation();
  const route = useRoute();
  const { isFirst } = route.params || {};

  const initialValues = { otp: '' };

  const formik = useFormik({
    initialValues,
    validationSchema: OtpSchema,
    onSubmit: async values => {
      setToggleBtn(true);
      console.log(values, 'values');
      if (isFirst) {
        navigation.navigate('first-time-recovery-phase');
      } else {
        navigation.navigate('recovery-phase');
      }
    },
  });

  const { values, errors, touched } = formik;

  useEffect(() => {
    if (values.otp.length === 6) {
      formik.submitForm();
    }
  }, [values]);

  return (
    <Animatable.View
      animation="fadeIn"
      duration={800}
      style={{ flex: 1, backgroundColor: Colors.bgColor }}
    >
      {/* Top section */}
      <Animatable.View
        animation="fadeInLeft"
        delay={200}
        duration={700}
        style={{ paddingTop: 40, paddingHorizontal: 20 }}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
           <Entypo
            name={'chevron-small-left'}
            size={40}
            color={Colors.purple50}
            style={{ position: "relative", left: -10 }}
          />
        </TouchableOpacity>
         <Text style={styles.stepText}>Step 1 of 3</Text>
      </Animatable.View>

      {/* OTP input section */}
      <Animatable.View
        animation="fadeInUp"
        delay={400}
        duration={800}
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: Colors.background,
          paddingHorizontal: 20,
        }}
      >
        <Text style={styles.passcodeText}>
          Enter Passcode
        </Text>

        <View style={{ width: '100%' }}>
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
            tintColor={Colors.btnColor}
            textInputStyle={styles.inputOTP}
            onBlur={() => formik.setFieldTouched('otp', true)}
            secureTextEntry
            textInputProps={{ secureTextEntry: true }}
            keyboardAppearance="light"
          />

          {errors?.otp && touched?.otp && (
            <Text style={{ color: 'red', textAlign: 'center', marginTop: 12 }}>
              {errors?.otp}
            </Text>
          )}
        </View>
      </Animatable.View>
    </Animatable.View>
  );
}
