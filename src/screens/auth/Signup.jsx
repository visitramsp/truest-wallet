import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { Pressable, Text, TouchableOpacity, View } from 'react-native'
import MainLayout from '../../components/layout/Layout';
import CustomButton from '../../components/CustomButton';
import TextInputFieldPaper from '../../components/textInputFieldPaper/TextInputFieldPaper';
import { verticalScale } from '../../theme/Matrics';
import { useFormik } from 'formik';
import { SignUpSchema } from '../../schemas/AuthSchema';
import styles from './authStyles';
import Icon from 'react-native-vector-icons/FontAwesome6';
import SocialMediaScreen from './SocialMediaScreen';
import { Colors } from '../../theme';
export default function Signup() {
  const navigation = useNavigation();
  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    validationSchema: SignUpSchema,
    onSubmit: values => {
      console.log(values, "values");
      navigation.navigate("registration")
    },
  });

  return (
    <MainLayout scrollable>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="chevron-left" size={25} color={Colors.black100} />
        </TouchableOpacity>
        <Text style={styles.title}>Sign Up</Text>

        <View style={styles.middleContainer}>
          <TextInputFieldPaper
            label="Name"
            value={values.name}
            errors={errors?.name}
            touched={touched.name}
            onChangeText={handleChange('name')}
            onBlur={handleBlur('name')} />
          <TextInputFieldPaper
            label="Email"
            value={values.email}
            errors={errors?.email}
            touched={touched.email}
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')} />
          <TextInputFieldPaper
            label="Password"
            value={values.password}
            errors={errors?.password}
            touched={touched.password}
            onChangeText={handleChange('password')}
            onBlur={handleBlur('password')} />
        
            <Pressable style={styles.alreadyView} onPress={() => navigation.navigate("login")}>
              <Text style={styles.alreadyText}>Already have an account?</Text>
              <Icon name="arrow-right-long" size={15} color={Colors.red100} />
            </Pressable>
         
          <CustomButton style={{ marginTop: verticalScale(28) }} onPress={() => handleSubmit()} title='SIGN UP' />
          <SocialMediaScreen />
        </View>


      </View>
    </MainLayout>
  )
}


